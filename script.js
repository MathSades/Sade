const ADMIN_PASSWORD = 'admin123';

const defaultSongs = [
    { title: 'Relaxing Lo-Fi', artist: 'Lo-Fi Chill', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'Electronic Vibes', artist: 'Synth Wave', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { title: 'Acoustic Morning', artist: 'Acoustic Guitar', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
];

let songs = JSON.parse(localStorage.getItem('songs')) || defaultSongs;
let currentSongIndex = 0;
let isPlaying = false;

// DOM Elements
const songList = document.getElementById('song-list');
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const currentTitleEl = document.getElementById('current-title');
const currentArtistEl = document.getElementById('current-artist');
const adminBtn = document.getElementById('admin-btn');
const adminForm = document.getElementById('admin-form');
const addSongBtn = document.getElementById('add-song');

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    currentTitleEl.textContent = song.title;
    currentArtistEl.textContent = song.artist;
    
    // Update active state in playlist
    const listItems = songList.querySelectorAll('li');
    listItems.forEach((item, i) => {
        if (i === index) item.classList.add('active');
        else item.classList.remove('active');
    });

    if (isPlaying) audioPlayer.play();
}

function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audioPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) currentSongIndex = songs.length - 1;
    loadSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) currentSongIndex = 0;
    loadSong(currentSongIndex);
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;

    // Time formatting
    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
}

function setProgress() {
    const width = progressBar.value;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (width / 100) * duration;
}

function formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

function renderPlaylist() {
    songList.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        if (index === currentSongIndex) li.classList.add('active');
        
        li.innerHTML = `
            <div class="song-item-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            <button class="play-item-btn">
                <i class="fas ${index === currentSongIndex && isPlaying ? 'fa-pause' : 'fa-play'}"></i>
            </button>
        `;
        
        li.addEventListener('click', () => {
            currentSongIndex = index;
            if (!isPlaying) isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            loadSong(currentSongIndex);
            audioPlayer.play();
        });
        
        songList.appendChild(li);
    });
}

// Admin toggle
adminBtn.addEventListener('click', () => {
    const pass = prompt('Digite a senha de administrador:');
    if (pass === ADMIN_PASSWORD) {
        adminForm.classList.toggle('hidden');
        alert('Acesso concedido!');
    } else {
        alert('Senha incorreta!');
    }
});

// Add new song
addSongBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const src = document.getElementById('src').value;

    if (title && artist && src) {
        songs.push({ title, artist, src });
        localStorage.setItem('songs', JSON.stringify(songs));
        renderPlaylist();
        
        // Clear form
        document.getElementById('title').value = '';
        document.getElementById('artist').value = '';
        document.getElementById('src').value = '';
        
        alert('Música adicionada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Event Listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', nextSong);
progressBar.addEventListener('change', setProgress);

// Initialize
renderPlaylist();
loadSong(currentSongIndex);