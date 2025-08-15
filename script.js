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
                { title: "Cube of Sixth Stage Seal", file: "Cube of Sixth Stage Seal.mp3" },
                { title: "Cyber Trap", file: "Cyber Trap.mp3" },
                { title: "Der Teemeister aus der Leere", file: "Der Teemeister aus der Leere.mp3" },
                { title: "Futuristic World", file: "Futuristic World.mp3" },
                { title: "G Foundation", file: "G Foundation.mp3" },
                { title: "G-033", file: "G-033.mp3" },
                { title: "G-Adv", file: "G-Adv.mp3" },
                { title: "Guardian of the Cosmos", file: "Guardian of the Cosmos.mp3" },
                { title: "H0RR0R", file: "H0RR0R.mp3" },
                { title: "Holyght", file: "Holyght.mp3" },
                { title: "I can see", file: "I can see.mp3" },
                { title: "I care about whatever I see", file: "I care about whatever I see.mp3" },
                { title: "Immortal Ascension", file: "Immortal Ascension.mp3" },
                { title: "Joker Joker", file: "Joker Joker.mp3" },
                { title: "Kamustrophy", file: "Kamustrophy.mp3" },
                { title: "M4N1F35T10N", file: "M4N1F35T10N.mp3" },
                { title: "Metal Army", file: "Metal Army.mp3" },
                { title: "Metal Scratches", file: "Metal Scratches.mp3" },
                { title: "Overload", file: "Overload.mp3" },
                { title: "Technique of Brain", file: "Technique of Brain.mp3" },
                { title: "The Alternate Scientist", file: "The Alternate Scientist.mp3" },
                { title: "The Emperor", file: "The Emperor.mp3" },
                { title: "The First Alternate", file: "The First Alternate.mp3" },
                { title: "The LordGods", file: "The LordGods.mp3" },
                { title: "The Most Perfect Alternate Exist", file: "The Most Perfect Alternate Exist.mp3" },
                { title: "The Space Blitzkrieg", file: "The Space Blitzkrieg.mp3" },
                { title: "The True Speech", file: "The True Speech.mp3" },
                { title: "TV-er", file: "TV-er.mp3" },
                { title: "Universal Assassin Organization", file: "Universal Assassin Organization.mp3" },
                { title: "Universal Weapon Association", file: "Universal Weapon Association.mp3" },
                { title: "Veroy", file: "Veroy.mp3" }
            ]
        },
        "ost-2": {
            title: "The Tale of Universe #2",
            coverArt: "moon.jpg",
            songs: [
                { title: "Purple Flash", file: "Purple Flash.mp3" },
                { title: "Soft tunes", file: "Soft tunes.mp3" },
                { title: "True Nature of Nullify Everything", file: "True Nature of Nullify Everything.mp3" },
                { title: "Universe Empire", file: "Universe Empire.mp3" },
                { title: "Descendant", file: "Descendant.mp3" },
                { title: "Extended Madness Distorted Awareness Disorder", file: "Extended Madness Distorted Awareness Disorder.mp3" },
                { title: "K@n0sk1", file: "K@n0sk1.mp3" },
                { title: "Late Night Whispers", file: "Late Night Whispers.mp3" },
                { title: "Lurker", file: "Lurker.mp3" },
                { title: "Reluctance", file: "Reluctance.mp3" },
                { title: "Voidus Abyssal Series", file: "Voidus Abyssal Series.mp3" },
                { title: "Wretched Arm", file: "Wretched Arm.mp3" },
                { title: "Alternate in his Place", file: "Alternate in his Place.mp3" },
                { title: "Asylum", file: "Asylum.mp3" },
                { title: "Boxage", file: "Boxage.mp3" },
                { title: "Destiny", file: "Destiny.mp3" },
                { title: "Hunter in the Compound", file: "Hunter in the Compound.mp3" },
                { title: "L1ght", file: "L1ght.mp3" },
                { title: "Once upon a time", file: "Once upon a time.mp3" },
                { title: "The Security Director", file: "The Security Director.mp3" },
                { title: "Tragic", file: "Tragic.mp3" },
                { title: "Watching us, Laughing at us", file: "Watching us, Laughing at us.mp3" },
                { title: "2 bits", file: "2 bits.mp3" },
                { title: "40 Centuries", file: "40 Centuries.mp3" },
                { title: "Carnage", file: "Carnage.mp3" },
                { title: "Expandable", file: "Expandable.mp3" },
                { title: "Frenzy", file: "Frenzy.mp3" },
                { title: "Phonkage", file: "Phonkage.mp3" },
                { title: "Reese", file: "Reese.mp3" },
                { title: "Run as Fast as you can", file: "Run as Fast as you can.mp3" },
                { title: "Screams", file: "Screams.mp3" },
                { title: "UW1", file: "UW1.mp3" },
                { title: "Hantrence", file: "Hantrence.mp3" },
                { title: "My rain flowing in your vein", file: "My rain flowing in your vein.mp3" },
                { title: "Orbitation", file: "Orbitation.mp3" },
                { title: "The Old Duke", file: "The Old Duke.mp3" },
                { title: "Xylo the Phone", file: "Xylo the Phone.mp3" }
            ]
        },
        "ost-3": {
            title: "The Tale of Universe #3",
            coverArt: "moon.jpg",
            songs: [
                { title: "Kearo", file: "Kearo.mp3" },
                { title: "Kirk", file: "Kirk.mp3" },
                { title: "Prpr", file: "Prpr.mp3" },
                { title: "Trant", file: "Trant.mp3" },
                { title: "Cotton", file: "Cotton.mp3" },
                { title: "Darkest Tide", file: "Darkest Tide.mp3" },
                { title: "Fearless, Braveness, Hopeless..", file: "Fearless, Braveness, Hopeless...mp3" },
                { title: "Industrious", file: "Industrious.mp3" },
                { title: "Mechanics", file: "Mechanics.mp3" },
                { title: "Morphin and Mimicin", file: "Morphin and Mimicin.mp3" },
                { title: "The Universe Biggest Arm Dealer", file: "The Universe Biggest Arm Dealer.mp3" },
                { title: "Buoyancy", file: "Buoyancy.mp3" },
                { title: "Duo-Minded", file: "Duo-Minded.mp3" },
                { title: "End", file: "End.mp3" },
                { title: "His and Her Creation", file: "His and Her Creation.mp3" },
                { title: "Iu", file: "Iu.mp3" },
                { title: "Jumping on life", file: "Jumping on life.mp3" },
                { title: "Mess", file: "Mess.mp3" },
                { title: "The Rock n Roll Music", file: "The Rock n Roll Music.mp3" },
                { title: "Unforgettable Dreams", file: "Unforgettable Dreams.mp3" },
                { title: "Deep Water", file: "Deep Water.mp3" },
                { title: "Listen", file: "Listen.mp3" },
                { title: "Man im dead", file: "Man im dead.mp3" },
                { title: "Nah Im Done", file: "Nah Im Done.mp3" },
                { title: "Ohioic", file: "Ohioic.mp3" },
                { title: "Other side", file: "Other side.mp3" },
                { title: "Pre Timeskip", file: "Pre Timeskip.mp3" },
                { title: "Scrrr", file: "Scrrr.mp3" },
                { title: "Undead Rising", file: "Undead Rising.mp3" },
                { title: "What", file: "What.mp3" },
                { title: "C3RT41N", file: "C3RT41N.mp3" },
                { title: "Core", file: "Core.mp3" },
                { title: "Crunchy", file: "Crunchy.mp3" },
                { title: "Cyst", file: "Cyst.mp3" },
                { title: "Epicness", file: "Epicness.mp3" },
                { title: "Fantastic", file: "Fantastic.mp3" },
                { title: "Macula", file: "Macula.mp3" },
                { title: "Pablo", file: "Pablo.mp3" },
                { title: "Prediction", file: "Prediction.mp3" },
                { title: "Roofing", file: "Roofing.mp3" },
                { title: "Runting", file: "Runting.mp3" }
            ]
        },
        "ost-4": {
            title: "The Tale of Universe #4",
            coverArt: "moon.jpg",
            songs: [
                { title: "1N73RN4L", file: "1N73RN4L.mp3" },
                { title: "7-11", file: "7-11.mp3" },
                { title: "86-79-73-68-32-73-83-32-65-80-80-82-79-65-67-72-73-78-71", file: "86-79-73-68-32-73-83-32-65-80-80-82-79-65-67-72-73-78-71.mp3" },
                { title: "1478", file: "1478.mp3" },
                { title: "1934", file: "1934.mp3" },
                { title: "Beyond the Veil", file: "Beyond the Veil.mp3" },
                { title: "CH1LL1NG", file: "CH1LL1NG.mp3" },
                { title: "Creek", file: "Creek.mp3" },
                { title: "Distorta Inanis", file: "Distorta Inanis.mp3" },
                { title: "Drifting", file: "Drifting.mp3" },
                { title: "Driving", file: "Driving.mp3" },
                { title: "Ech", file: "Ech.mp3" },
                { title: "Gardeners", file: "Gardeners.mp3" },
                { title: "H4TR3D", file: "H4TR3D.mp3" },
                { title: "HESO Squad 3", file: "HESO Squad 3.mp3" },
                { title: "Hopk", file: "Hopk.mp3" },
                { title: "I got nothing left behind", file: "I got nothing left behind.mp3" },
                { title: "K0N", file: "K0N.mp3" },
                { title: "Neh", file: "Neh.mp3" },
                { title: "NOO00O000OO0O0OOO0", file: "NOO00O000OO0O0OOO0.mp3" },
                { title: "Nty", file: "Nty.mp3" },
                { title: "On Call", file: "On Call.mp3" },
                { title: "Pohk", file: "Pohk.mp3" },
                { title: "Reccc", file: "Reccc.mp3" },
                { title: "Renting Support", file: "Renting Support.mp3" },
                { title: "Rhapsody", file: "Rhapsody.mp3" },
                { title: "Run4", file: "Run4.mp3" },
                { title: "ST0P", file: "ST0P.mp3" },
                { title: "The time is up", file: "The time is up.mp3" },
                { title: "Tyance", file: "Tyance.mp3" },
                { title: "Unbreakable Charge", file: "Unbreakable Charge.mp3" },
                { title: "Wave", file: "Wave.mp3" },
                { title: "Welcome Foundation", file: "Welcome Foundation.mp3" },
                { title: "Wobble", file: "Wobble.mp3" },
                { title: "Woodcrawlers", file: "Woodcrawlers.mp3" },
                { title: "Yeh", file: "Yeh.mp3" },
                { title: "你的头为什么是尖尖的", file: "你的头为什么是尖尖的.mp3" }
            ]
        }
        // Future albums can be added here with keys like "ost-2", etc.
    };

    // Modal elements
    const modal = document.getElementById('music-modal');
    const modalView = document.getElementById('modal-view');
    const closeModalButton = document.querySelector('.close-button');

    // Search Modal Elements
    const searchButton = document.getElementById('search-button');
    const searchModal = document.getElementById('search-modal');
    const searchCloseButton = searchModal.querySelector('.close-button');
    const searchInput = document.getElementById('search-input');
    const searchResultsList = document.getElementById('search-results');

    // Copyright Modal Elements
    const copyrightNotice = document.getElementById('copyright-notice');
    const copyrightModal = document.getElementById('copyright-modal');
    const copyrightCloseButton = copyrightModal.querySelector('.close-button');

    // Log Panel Elements
    const logButton = document.getElementById('log-button');
    const logPanel = document.getElementById('log-panel');
    const logCloseButton = document.getElementById('log-close-button');

    // Theme toggle
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

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
    const loopButton = document.getElementById('loop-button');
    const downloadButton = document.getElementById('download-button');
    
    // Player state
    let currentPlaylist = [];
    let currentIndex = -1;
    let isPlaying = false;
    let allSongs = [];

    const buildAllSongsList = () => {
        allSongs = [];
        for (const albumId in musicData) {
            const album = musicData[albumId];
            album.songs.forEach((song, index) => {
                if (song.file) { // Only include playable songs
                    allSongs.push({
                        ...song,
                        albumId: albumId,
                        albumTitle: album.title,
                        indexInAlbum: index
                    });
                }
            });
        }
    };

    const setupTheme = () => {
        const preferredTheme = localStorage.getItem('theme');
        if (preferredTheme === 'light') {
            body.classList.add('light-mode');
        }

        themeToggleButton.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    };

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
        const album = musicData[getCurrentAlbumId()];
        if(album && album.coverArt) {
            playerAlbumArt.src = album.coverArt;
        } else {
            playerAlbumArt.src = 'moon.jpg'; // fallback
        }

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

    const getCurrentAlbumId = () => {
        // This is a simple way to find the album for the current song.
        // It assumes song titles are unique across albums. A more robust
        // solution might store the albumId when a playlist is created.
        if (currentIndex < 0) return null;
        const currentSong = currentPlaylist[currentIndex];
        for (const albumId in musicData) {
            if (musicData[albumId].songs.some(song => song.file === currentSong.file)) {
                return albumId;
            }
        }
        return null;
    };

    // Search Logic
    const openSearchModal = () => {
        searchModal.style.display = 'block';
        searchInput.focus();
    };

    const closeSearchModal = () => {
        searchModal.style.display = 'none';
        searchInput.value = '';
        searchResultsList.innerHTML = '';
    };

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        searchResultsList.innerHTML = '';

        if (query.length === 0) {
            return;
        }

        const results = allSongs.filter(song => song.title.toLowerCase().includes(query));

        if (results.length > 0) {
            results.forEach(song => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="song-title">${song.title}</span>
                    <span class="song-album">${song.albumTitle}</span>
                `;
                li.addEventListener('click', () => {
                    const targetAlbum = musicData[song.albumId];
                    if (targetAlbum) {
                        currentPlaylist = targetAlbum.songs;
                        playSong(song.indexInAlbum);
                        closeSearchModal();
                    }
                });
                searchResultsList.appendChild(li);
            });
        } else {
            searchResultsList.innerHTML = `<li class="disabled">No results found for "${searchInput.value}"</li>`;
        }
    };
    
    searchButton.addEventListener('click', openSearchModal);
    searchCloseButton.addEventListener('click', closeSearchModal);
    searchInput.addEventListener('input', performSearch);

    // Copyright Modal Logic
    copyrightNotice.addEventListener('click', () => {
        copyrightModal.style.display = 'block';
    });

    copyrightCloseButton.addEventListener('click', () => {
        copyrightModal.style.display = 'none';
    });

    // Log Panel Logic
    logButton.addEventListener('click', () => {
        logPanel.classList.add('open');
    });

    logCloseButton.addEventListener('click', () => {
        logPanel.classList.remove('open');
    });

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
    
    loopButton.addEventListener('click', () => {
        audioPlayer.loop = !audioPlayer.loop;
        loopButton.classList.toggle('active', audioPlayer.loop);
    });

    downloadButton.addEventListener('click', () => {
        if (currentIndex > -1 && currentPlaylist[currentIndex]) {
            const song = currentPlaylist[currentIndex];
            const link = document.createElement('a');
            link.href = song.file;
            link.download = song.title; // Uses song title for the filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });

    audioPlayer.addEventListener('ended', () => {
        if (!audioPlayer.loop) {
            nextButton.click();
        }
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
        if (event.target == searchModal) {
            closeSearchModal();
        }
        if (event.target == copyrightModal) {
            copyrightModal.style.display = 'none';
        }
        // Close log panel if clicking outside of it
        if (logPanel.classList.contains('open') && !logPanel.contains(event.target) && event.target !== logButton) {
            logPanel.classList.remove('open');
        }
    });

    // Initialize theme
    setupTheme();
    // Build the searchable song list
    buildAllSongsList();
});