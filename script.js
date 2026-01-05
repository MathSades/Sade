const ADMIN_PASSWORD = 'admin123';

/**
 * ==========================================
 * ABAIXO: CONFIGURAÇÃO DE MÚSICAS PADRÃO
 * Você pode adicionar, remover ou alterar as músicas aqui.
 * ==========================================
 */
const defaultSongs = [
    { title: 'Ourblues', artist: 'Math_Sades', src: 'https://www.dropbox.com/scl/fi/s781jps0giedhp9aexrns/S-es.mp3?rlkey=lxws1vsgp1iwe7cvljq4971w4&st=8vbvzf64?raw=1', cover: 'https://cdn2.suno.ai/b2484734-c948-4bbf-b809-e351a9b3c123.jpeg?width=360' },
    { title: 'Uni', artist: 'Math_Sades', src: 'https://docs.google.com/uc?export=download&id=1t-vgsyoN44RMgarKCZJuTBmx-GI5ZSSs', cover: 'https://cdn2.suno.ai/d8a48c10-9a30-48a4-b1ca-13baf0f9cfde.jpeg?width=360' },
    { title: 'Sães', artist: 'Math_Sades', src: 'https://www.dropbox.com/scl/fi/s781jps0giedhp9aexrns/S-es.mp3?rlkey=lxws1vsgp1iwe7cvljq4971w4&st=zjg2tcpu&dl=0', cover: 'https://cdn2.suno.ai/f996be58-9705-4b50-8ada-279e729d0d6f.jpeg?width=360' },
    { title: 'Alternativa Soe', artist: 'Math_Sades', src: 'Soe alternative.mp3', cover: 'https://cdn2.suno.ai/b4caa02d-1f28-459b-915e-2867304274cf.jpeg?width=360' },
    { title: 'Alternativum', artist: 'Math_Sades', src: 'ni560-vz7qx.mp3', cover: 'https://cdn2.suno.ai/image_9f275c2f-5b28-4f96-ac8f-996a94acafc6.jpeg?width=360' },
    { title: 'Tacens noctes', artist: 'Math_Sades', src: 'Noite Silenciosa.mp3', cover: 'https://cdn2.suno.ai/9b33e24c-6e54-42e3-9520-3ddc0b50d69d.jpeg?width=360' },
    { title: 'Perdita nocte', artist: 'Math_Sades', src: 'dlr01-wvhae.mp3', cover: 'https://cdn2.suno.ai/88f7dc45-8e1f-4dc3-83c8-43ad350c3d7a.jpeg?width=360' },
    { title: 'Perdita nocte', artist: 'Math_Sades', src: 'wimy1-lg79v.mp3', cover: 'https://cdn2.suno.ai/c04e54cd-2228-4572-9ea7-7bdfca3d46fe.jpeg?width=360' },
    { title: 'Venti castelli', artist: 'Math_Sades', src: 'Castelo no Vento (1).mp3', cover: 'https://cdn2.suno.ai/f790e55d-ca45-4543-8983-076f7e96f5ca.jpeg?width=360' },
    { title: 'castrum', artist: 'Math_Sades', src: '7rdyg-pxfo7.mp3', cover: 'https://cdn2.suno.ai/90cebf14-c6e8-4a00-a204-11e1dd7ec485.jpeg?width=360' },
    { title: 'Desiderium cras', artist: 'Math_Sades', src: 'vgnwz-qspoi.mp3', cover: 'https://cdn2.suno.ai/a08bbd3a-6afe-499f-aed4-4bbadf3a2a9e_953006c2.jpeg?width=360' },
    { title: 'Draco Mountain', artist: 'Math_Sades', src: 'nod2l-e9hts.mp3', cover: 'https://cdn2.suno.ai/80edbb07-e769-49ba-a589-539e53e9b9d5_0692d328.jpeg?width=360' },
    { title: 'Summum montis', artist: 'Math_Sades', src: 'ruijb-dh9uu.mp3', cover: 'https://cdn2.suno.ai/80edbb07-e769-49ba-a589-539e53e9b9d5_0692d328.jpeg?width=360' },
    { title: 'Praeteritum echorum', artist: 'Math_Sades', src: 'yjo74-pqvjs.mp3', cover: 'https://cdn2.suno.ai/1f304a83-2f6b-45d7-b36b-b03480e17260_9f398568.jpeg?width=360' },
    { title: 'Saltatio draconum', artist: 'Math_Sades', src: 'zwcr3-cjcou.mp3', cover: 'https://cdn2.suno.ai/d233257d-2e88-44eb-84c3-1710c6b0b8dd_6559c4c1.jpeg?width=360' },
    { title: 'glacies', artist: 'Math_Sades', src: '99vus-yaweu.mp3', cover: 'https://cdn2.suno.ai/image_f696e9e1-eab3-4702-ab82-fdd9464c6a0a.jpeg?width=360' },
    { title: 'Susurri Dynastiarum', artist: 'Math_Sades', src: '0fxth-o46da.mp3', cover: 'https://cdn2.suno.ai/image_9a28a606-792f-4529-bb62-de7d2d3b1a80.jpeg?width=360' },
    { title: 'Lunam Goryeo', artist: 'Math_Sades', src: 'lsx9u-p2qvn.mp3', cover: 'https://cdn2.suno.ai/image_82d9ac19-1065-4b58-98ca-310ec6c0258a.jpeg?width=360' },
    { title: 'Perditus in Lunae Luce', artist: 'Math_Sades', src: 'f1mm5-e7r7x.mp3', cover: 'https://cdn2.suno.ai/image_6e18a077-3e50-423d-aa5f-96cd4f30e130.jpeg?width=360' },
    { title: 'Florian', artist: 'Math_Sades', src: 'cab3b-pk1hw.mp3', cover: 'https://cdn2.suno.ai/24e83ee0-2328-4747-b694-f2734e3c79e7.jpeg?width=360' },
    { title: 'Animae', artist: 'Math_Sades', src: '0t845-oq59l.mp3', cover: 'https://cdn2.suno.ai/2094ab1e-06ac-493a-a2cb-726910977940.jpeg?width=360' },
    { title: 'Jazu', artist: 'Math_Sades', src: 'wczok-oe6yr.mp3', cover: 'https://cdn2.suno.ai/9484a129-1d1d-4cfd-b6d4-3a1a6493538d.jpeg?width=360' },
    { title: 'Velvet', artist: 'Math_Sades', src: 'emcyu-5f66t.mp3', cover: 'https://cdn2.suno.ai/image_ec7e6e97-479d-466e-a4bf-787b7d90a585.jpeg?width=360' },
    { title: 'Echoes', artist: 'Math_Sades', src: 'h614b-3d766.mp3', cover: 'https://cdn2.suno.ai/image_b12308b2-6f6a-40e8-86f4-71f561af46e3.jpeg?width=360' },
    { title: 'Tranquillitas solis', artist: 'Math_Sades', src: 'gemst-usm1z.mp3', cover: 'https://cdn2.suno.ai/305de330-25da-4145-9952-ac97572641b1_1997b132.jpeg?width=360' },
    { title: 'Breeze', artist: 'Math_Sades', src: '21nmy-mjmc1.mp3', cover: 'https://cdn2.suno.ai/22f834a6-f0a0-4707-a6f6-b1f93057ffff_f6e59921.jpeg?width=360' },
    { title: 'Capulus', artist: 'Math_Sades', src: 'lkuf3-qwv0c.mp3', cover: 'https://cdn2.suno.ai/4781c50a-59b3-45fa-9e0c-6f10fa70ca50_d7910314.jpeg?width=360' },
    { title: 'Animus scaena', artist: 'Math_Sades', src: 'qokk1-efsal.mp3', cover: 'https://cdn2.suno.ai/3eb425cc-6524-48a6-b37e-7a902772a593_e7d69d16.jpeg?width=360' },
    { title: 'Stage silentii', artist: 'Math_Sades', src: 'oah80-8kwma.mp3', cover: 'https://cdn2.suno.ai/1b9768dc-9c55-4296-ab64-a45f1b931ef4_8e2be4f4.jpeg?width=360' },
    { title: 'Final fluctus', artist: 'Math_Sades', src: 'nnowf-vlkys.mp3', cover: 'https://cdn2.suno.ai/5ded9084-4cec-4524-b2f2-cc3e6e3a9aca_5987be5a.jpeg?width=360' }
];

let songs = JSON.parse(localStorage.getItem('songs')) || defaultSongs;
let currentSongIndex = 0;
let isPlaying = false;
let filteredSongs = [];

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
const visualizer = document.getElementById('visualizer');
const adminBtn = document.getElementById('admin-btn');
const adminForm = document.getElementById('admin-form');
const addSongBtn = document.getElementById('add-song');
const searchInput = document.getElementById('search-input');

function loadSongByIdx(idx) {
    const song = songs[idx];
    if (!song) return;
    audioPlayer.src = song.src;
    currentTitleEl.textContent = song.title;
    currentArtistEl.textContent = song.artist;
    visualizer.innerHTML = `<img src="${song.cover || 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80'}" alt="Cover">`;
    renderPlaylist();
    if (isPlaying) {
        audioPlayer.play().catch(e => console.log('Error playing audio'));
        visualizer.classList.add('playing');
    }
}

function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        visualizer.classList.remove('playing');
    } else {
        audioPlayer.play().catch(e => console.log('Error playing audio'));
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        visualizer.classList.add('playing');
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSongByIdx(currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSongByIdx(currentSongIndex);
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;
    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
}

function setProgress() {
    const width = progressBar.value;
    const duration = audioPlayer.duration;
    if (duration) {
        audioPlayer.currentTime = (width / 100) * duration;
    }
}

function formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

function renderPlaylist() {
    songList.innerHTML = '';
    const query = searchInput.value.toLowerCase().trim();
    filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(query) || 
        song.artist.toLowerCase().includes(query)
    );
    const listToRender = query !== '' ? filteredSongs : songs;
    if (listToRender.length === 0) {
        songList.innerHTML = '<li style="justify-content: center; color: var(--text-slate);">Nenhum instrumental encontrado</li>';
        return;
    }
    listToRender.forEach((song, index) => {
        const isActive = songs[currentSongIndex] && songs[currentSongIndex].src === song.src;
        const li = document.createElement('li');
        if (isActive) li.classList.add('active');
        li.innerHTML = `
            <div class="list-art" style="background-image: url('${song.cover || ''}'); background-size: cover; background-position: center;">
                ${!song.cover ? '<i class="fas fa-music"></i>' : ''}
            </div>
            <div class="song-details">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
            ${isActive && isPlaying ? '<i class="fas fa-volume-up play-icon-small"></i>' : '<i class="fas fa-play play-icon-small"></i>'}
        `;
        li.addEventListener('click', () => {
            currentSongIndex = songs.findIndex(s => s.src === song.src);
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            loadSongByIdx(currentSongIndex);
        });
        songList.appendChild(li);
    });
}

searchInput.addEventListener('input', renderPlaylist);
adminBtn.addEventListener('click', () => {
    const pass = prompt('Digite a senha de administrador:');
    if (pass === ADMIN_PASSWORD) adminForm.classList.toggle('hidden');
    else if (pass !== null) alert('Senha incorreta!');
});
addSongBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const src = document.getElementById('src').value;
    const cover = document.getElementById('cover-url').value;
    if (title && artist && src) {
        songs.push({ title, artist, src, cover });
        localStorage.setItem('songs', JSON.stringify(songs));
        renderPlaylist();
        document.getElementById('music-form').reset();
        alert('Faixa adicionada à biblioteca!');
    } else alert('Por favor, preencha Título, Artista e URL da Música.');
});
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', nextSong);
progressBar.addEventListener('input', setProgress);
renderPlaylist();
loadSongByIdx(currentSongIndex);
