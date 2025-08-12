import mitt from "mitt";
import { albums } from "./data.js";

const bus = mitt();

// State
const state = {
  queue: [],
  queueIndex: -1,
  isPlaying: false,
  liked: new Set(),
  modalOpen: false,
  modalAlbumId: null,
};

// Elements
const els = {
  grid: null,
  // now playing
  npCover: document.getElementById("npCover"),
  npTitle: document.getElementById("npTitle"),
  npSubtitle: document.getElementById("npSubtitle"),
  likeBtn: document.getElementById("likeBtn"),
  // transport
  playPauseBtn: document.getElementById("playPauseBtn"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  // seek
  seekBar: document.getElementById("seekBar"),
  curTime: document.getElementById("curTime"),
  durTime: document.getElementById("durTime"),
  // modal
  modal: document.getElementById("albumModal"),
  modalCover: document.getElementById("modalCover"),
  modalAlbumName: document.getElementById("modalAlbumName"),
  modalAlbumSub: document.getElementById("modalAlbumSub"),
  trackList: document.getElementById("trackList"),
};

// Audio
const audio = new Audio();
audio.preload = "metadata";
audio.crossOrigin = "anonymous";
audio.volume = 0.85;

// Helpers
function fmtTime(s) {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
}

// Render albums
function renderHome() {
  const grid = document.getElementById("homeGrid");
  els.grid = grid;
  grid.innerHTML = "";
  albums.forEach((a) => grid.appendChild(albumCard(a)));
}

// Card component
function albumCard(a) {
  const el = document.createElement("div");
  el.className = "card";
  el.innerHTML = `
    <div class="cover" style="background-image:url('${a.coverUrl}')"></div>
    <div class="title">${escapeHtml(a.name)}</div>
    <div class="subtitle">${escapeHtml(a.artist)} • ${a.year}</div>
  `;
  el.addEventListener("click", () => {
    openAlbumModal(a);
  });
  return el;
}

// Player utilities
function currentTrack() {
  const track = state.queue[state.queueIndex];
  let album = null;
  for (const a of albums) {
    if (a.tracks.some((t) => t.id === track?.id)) { album = a; break; }
  }
  return { track, album: album || albums[0] };
}

function updateNowPlaying(album, track) {
  els.npCover.style.backgroundImage = `url('${album.coverUrl}')`;
  els.npTitle.textContent = track?.title || "Nothing playing";
  els.npSubtitle.textContent = album ? `${album.name} • ${album.artist}` : "—";
  els.durTime.textContent = fmtTime(track?.duration || audio.duration || 0);
  updateLikeButton();
}

function playAt(index, albumHint = null) {
  if (index < 0 || index >= state.queue.length) return;
  state.queueIndex = index;
  const { track, album } = currentTrack();
  audio.src = track.url;
  audio.play().then(() => {
    state.isPlaying = true;
    updateNowPlaying(albumHint || album, track);
    bus.emit("playback:state");
    bus.emit("queue:changed");
  }).catch((e) => {
    console.warn("Autoplay blocked or error:", e);
    updateNowPlaying(albumHint || album, track);
    bus.emit("queue:changed");
  });
}

function nextTrack(auto = false) {
  let next = state.queueIndex + 1;
  if (next >= state.queue.length) {
    audio.pause();
    state.isPlaying = false;
    bus.emit("playback:state");
    return;
  }
  playAt(next);
}
function prevTrack() {
  const t = audio.currentTime;
  if (t > 3) { audio.currentTime = 0; return; }
  const prev = Math.max(0, state.queueIndex - 1);
  playAt(prev);
}

function updateLikeButton() {
  const { track } = currentTrack();
  const liked = track && state.liked.has(track.id);
  els.likeBtn.style.color = liked ? "#ff6b85" : "var(--text)";
  els.likeBtn.title = liked ? "Unlike" : "Like";
}

// Modal
function openAlbumModal(album) {
  state.modalOpen = true;
  state.modalAlbumId = album.id;
  els.modalCover.style.backgroundImage = `url('${album.coverUrl}')`;
  els.modalAlbumName.textContent = album.name;
  els.modalAlbumSub.textContent = `${album.artist} • ${album.year}`;
  renderTrackList(album);
  els.modal.setAttribute("aria-hidden", "false");
  els.modal.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeAlbumModal() {
  state.modalOpen = false;
  state.modalAlbumId = null;
  els.modal.classList.remove("show");
  els.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function renderTrackList(album) {
  els.trackList.innerHTML = "";
  // set the queue to this album when viewing (non-destructive to playback unless user plays)
  state.queue = album.tracks.slice();
  // preserve current queueIndex if same album; otherwise reset pointer
  const onSameAlbum = currentTrack().album?.id === album.id;
  if (!onSameAlbum) state.queueIndex = -1;

  album.tracks.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "track-row";
    li.innerHTML = `
      <button class="track-btn" data-idx="${i}" title="Play ${escapeHtml(t.title)}">
        <span class="track-num">${i + 1}</span>
        <span class="track-title">${escapeHtml(t.title)}</span>
        <span class="track-right">
          <span class="track-duration">${fmtTime(t.duration)}</span>
          <span class="track-status" aria-hidden="true"><svg width="10" height="10"><use href="#ico-dot"></use></svg></span>
        </span>
      </button>
    `;
    li.querySelector(".track-btn").addEventListener("click", (e) => {
      const idx = Number(e.currentTarget.getAttribute("data-idx"));
      playAt(idx, album);
    });
    els.trackList.appendChild(li);
  });
  highlightPlayingInList();
}
function highlightPlayingInList() {
  const rows = els.trackList.querySelectorAll(".track-row");
  rows.forEach((row, i) => {
    row.classList.toggle("active", i === state.queueIndex && !audio.paused);
  });
}

// Hook controls
function hookPlayer() {
  els.playPauseBtn.addEventListener("click", () => {
    if (!state.queue.length && albums.length) {
      state.queue = albums[0].tracks.slice();
      state.queueIndex = 0;
      playAt(0, albums[0]);
      return;
    }
    if (audio.paused) {
      audio.play();
      state.isPlaying = true;
    } else {
      audio.pause();
      state.isPlaying = false;
    }
    bus.emit("playback:state");
  });
  els.prevBtn.addEventListener("click", prevTrack);
  els.nextBtn.addEventListener("click", () => nextTrack(false));
  els.seekBar.addEventListener("input", () => {
    const pct = parseFloat(els.seekBar.value) / 100;
    if (Number.isFinite(audio.duration)) audio.currentTime = audio.duration * pct;
  });
  els.likeBtn.addEventListener("click", () => {
    const { track } = currentTrack();
    if (!track) return;
    if (state.liked.has(track.id)) state.liked.delete(track.id);
    else state.liked.add(track.id);
    updateLikeButton();
  });

  // modal close handlers
  els.modal.addEventListener("click", (e) => {
    if (e.target.dataset.close) closeAlbumModal();
  });
  els.modal.querySelector(".modal-close").addEventListener("click", closeAlbumModal);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.modalOpen) closeAlbumModal();
  });

  // keyboard transport
  window.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    if (e.code === "Space") { e.preventDefault(); els.playPauseBtn.click(); }
    if (e.code === "ArrowRight") audio.currentTime = Math.min(audio.currentTime + 5, audio.duration || Infinity);
    if (e.code === "ArrowLeft") audio.currentTime = Math.max(audio.currentTime - 5, 0);
  });

  // keep modal highlighting in sync
  bus.on("playback:state", highlightPlayingInList);
  bus.on("queue:changed", highlightPlayingInList);
}

// Audio events
audio.addEventListener("timeupdate", () => {
  const cur = audio.currentTime || 0;
  const dur = audio.duration || (currentTrack().track?.duration || 0);
  els.curTime.textContent = fmtTime(cur);
  els.durTime.textContent = fmtTime(dur);
  const pct = dur ? (cur / dur) * 100 : 0;
  els.seekBar.value = pct;
});
audio.addEventListener("play", () => {
  state.isPlaying = true;
  els.playPauseBtn.classList.add("playing");
  highlightPlayingInList();
});
audio.addEventListener("pause", () => {
  state.isPlaying = false;
  els.playPauseBtn.classList.remove("playing");
  highlightPlayingInList();
});
audio.addEventListener("ended", () => nextTrack(true));
audio.addEventListener("loadedmetadata", () => {
  const { album, track } = currentTrack();
  els.durTime.textContent = fmtTime(audio.duration || track?.duration || 0);
});

// Init
function init(){
  renderHome();
  hookPlayer();
}
init();