document.addEventListener('DOMContentLoaded', () => {

    const musicData = {
        "ost-1": {
            title: "The Tale of Universe #1",
            songs: [
                { title: "A Stand That Existed", file: "A Stand That Existed.mp3" },
                { title: "Allocation Task Force", file: "Allocation Task Force.mp3" },
                { title: "Alternates", file: "Alternates.mp3" },
                { title: "Andr", file: "Andr.mp3" },
                { title: "Anywhere in The Universe", file: "Anywhere in The Universe.mp3" },
                { title: "Average Alternate", file: "Average Alternate.mp3" },
                { title: "Casual", file: "Casual.mp3" },
                { title: "Core of The Universe and All Knowledge", file: "Core of The Universe and All Knowledge.mp3" },
                { title: "Cube of Sixth Stage Seal" },
                { title: "Cyber Trap" },
                { title: "Der Teemeister aus der Leere" },
                { title: "Futuristic World" },
                { title: "G Foundation" },
                { title: "G-033" },
                { title: "G-Adv" },
                { title: "Guardian of the Cosmos" }
            ]
        }
        // Future albums can be added here with keys like "ost-2", etc.
    };

    // Modal elements
    const modal = document.getElementById('music-modal');
    const modalView = document.getElementById('modal-view');
    const closeModalButton = document.querySelector('.close-button');

    // Player elements
    const musicPlayer = document.getElementById('music-player');
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const progressBar = document.getElementById('progress-bar');
    const volumeSlider = document.getElementById('volume-slider');
    const playerAlbumArt = document.getElementById('player-album-art');
    const playerSongTitle = document.getElementById('player-song-title');
    const currentTimeEl = document.getElementById('current-time');
    const totalDurationEl = document.getElementById('total-duration');
    
    // Player state
    let currentPlaylist = [];
    let currentIndex = -1;
    let isPlaying = false;

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const playSong = (index) => {
        if (index < 0 || index >= currentPlaylist.length) return;
        
        const song = currentPlaylist[index];
        if (!song || !song.file) return; // Don't play if song is disabled

        currentIndex = index;
        
        audioPlayer.src = song.file;
        playerSongTitle.textContent = song.title;
        // In a real scenario, you'd have different art per album/song
        // playerAlbumArt.src = musicData[albumId].coverArt;

        audioPlayer.play();
        isPlaying = true;
        updatePlayPauseButton();
        updatePlayingClass();
        musicPlayer.classList.remove('hidden');
    };

    const updatePlayPauseButton = () => {
        if (isPlaying) {
            playPauseButton.classList.add('playing');
        } else {
            playPauseButton.classList.remove('playing');
        }
    };
    
    const updatePlayingClass = () => {
        const songListItems = modalView.querySelectorAll('.song-list li');
        songListItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('playing');
            } else {
                item.classList.remove('playing');
            }
        });
    };

    const showSongList = (albumId) => {
        const album = musicData[albumId];
        if (!album) return;
        
        currentPlaylist = album.songs;

        let songListHtml = `
            <h3>${album.title}</h3>
            <ul class="song-list">`;
        
        album.songs.forEach((song, index) => {
            const isDisabled = !song.file;
            songListHtml += `
                <li data-index="${index}" class="${isDisabled ? 'disabled' : ''}">
                    <span class="song-title">${song.title}</span>
                    ${isDisabled ? '<span class="song-duration">Unavailable</span>' : ''}
                </li>`;
        });

        songListHtml += `</ul>`;
        modalView.innerHTML = songListHtml;
        modal.style.display = 'block';
        updatePlayingClass();

        modalView.querySelectorAll('.song-list li').forEach(item => {
            item.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'));
                const song = currentPlaylist[index];
                
                if (song && song.file) {
                    playSong(index);
                    modal.style.display = 'none';
                }
            });
        });
    };

    document.querySelectorAll('.album-card[data-album-id]').forEach(card => {
        card.addEventListener('click', (e) => {
            const albumId = e.currentTarget.getAttribute('data-album-id');
            showSongList(albumId);
        });
    });

    // Player Controls Event Listeners
    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            if (audioPlayer.src) {
                audioPlayer.play();
            } else if (currentPlaylist.length > 0) {
                playSong(0);
            }
        }
        isPlaying = !isPlaying;
        updatePlayPauseButton();
    });

    nextButton.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % currentPlaylist.length;
        playSong(nextIndex);
    });

    prevButton.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        playSong(prevIndex);
    });
    
    audioPlayer.addEventListener('ended', () => {
        nextButton.click();
    });

    audioPlayer.addEventListener('timeupdate', () => {
        if (audioPlayer.duration) {
            const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.value = progressPercent;
            currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
        }
    });
    
    audioPlayer.addEventListener('loadedmetadata', () => {
        totalDurationEl.textContent = formatTime(audioPlayer.duration);
    });

    progressBar.addEventListener('input', () => {
        if (audioPlayer.duration) {
            const seekTime = (progressBar.value / 100) * audioPlayer.duration;
            audioPlayer.currentTime = seekTime;
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });

    // Modal Controls
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});