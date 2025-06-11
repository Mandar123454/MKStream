// --------------- MOCK DATA -----------------
const albums = [
  {
    id: "album1",
    title: "Night Vibes",
    artist: "MK Stream",
    cover: "images/Night Vibes.png",    //assets,music,icons,images 
    songs: [
      {
        id: "song1",
        title: "Sajna",
        artist: "Darshan Raval",
        src: "assets/music/neon-drive.mp3",
        cover: "icons/Sajna.png"
      },
      {
        id: "song2",
        title: "Soni Soni",
        artist: "Rochak Kohli",
        src: "assets/music/moonlight-runner.mp3",
        cover: "icons/Soni.png"
      },
      {
        id: "song3",
        title: "Tumhare Hi Rahenge Hum",
        artist: "Sachin Jigar",
        src: "assets/music/moonlight-runner.mp3",
        cover: "icons/Tumhare.png"
      },
      {
        id: "song4",
        title: "Tera Chehra",
        artist: "Arijit Singh",
        src: "assets/music/moonlight-runner.mp3",
        cover: "icons/Tera.png"
      },
      {
        id: "song5",
        title: "Tum Se Hi",
        artist: "Mohit Chauhan",
        src: "assets/music/moonlight-runner.mp3",
        cover: "icons/Tum.png"
      }
    ]
  },
  {
    id: "album2",
    title: "Morning Glory",
    artist: "MK Stream",
    cover: "images/Morning Glory.png",
    songs: [
      {
        id: "song6",
        title: "Mary On a Cross",
        artist: "Ghost",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Mary.png"
      },
      {
        id: "song7",
        title: "Baby",
        artist: "Justin Bieber",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Baby.png"
      },
      {
        id: "song8",
        title: "Closer",
        artist: "Chainsmokers",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Closer.png"
      },
      {
        id: "song9",
        title: "Unstoppable",
        artist: "Sia",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Unstoppable.png"
      },
      {
        id: "song10",
        title: "Thunder",
        artist: "Imagine Dragons",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Thunder.png"
      },
    ]
  },
  {
    id: "album3",
    title: "Party Hits",
    artist: "MK Stream",
    cover: "images/Party Hits.png",
    songs: [
      {
        id: "song11",
        title: "Aaj Ki Raat",
        artist: "Sachin-Jigar",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Aaj.png"
      },
      {
        id: "song12",
        title: "Sooraj Dooba Hain",
        artist: "Amaal Malik",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Sooraj.png"
      },
      {
        id: "song13",
        title: "Aayi Nai",
        artist: "Pawan Singh",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Aayi.png"
      },
      {
        id: "song14",
        title: "Tum Hi Ho Bandhu",
        artist: "Pritam",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Tum hi.png"
      },
      {
        id: "song15",
        title: "Ghungroo",
        artist: "Vishal-Shekhar",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Ghungroo.png"
      },
    ]
  },
    {
    id: "album4",
    title: "Motivation Mix",
    artist: "MK Stream",
    cover: "images/Motivational Mix.png",
    songs: [
      {
        id: "song16",
        title: "Zinda",
        artist: "Shankar-Ehsaan-Loy",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Zinda.png"
      },
      {
        id: "song17",
        title: "Kar Har Maidan Fateh",
        artist: "Sukhwinder Singh",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Kar.png"
      },
      {
        id: "song18",
        title: "Brothers Anthems",
        artist: "Ajay-Atul",
        src: "asseSinghts/music/lazy-sunday.mp3",
        cover: "icons/Brothers.png"
      },
      {
        id: "song19",
        title: "Dangal",
        artist: "Pritam",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Dangal.png"
      },
      {
        id: "song20",
        title: "Besabriyaan",
        artist: "Amaal Malik",
        src: "assets/music/lazy-sunday.mp3",
        cover: "icons/Besab.png"
      },
    ]
  }
];


const playlists = [
  {
    id: "playlist1",
    title: "My Favs",
    cover: "images/Fav Songs.png",
    songIds: ["song1", "song3", "song7", "song8", "song12", "song15", "song18", "song20"]
  }
];

// Flatten all songs for search
const allSongs = albums.flatMap(album => album.songs);

// ------ LOCAL STORAGE: FAVORITES, PLAYLISTS -------
function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || "[]");
}
function setFavorites(favs) {
  localStorage.setItem('favorites', JSON.stringify(favs));
}
function isFavorite(songId) {
  return getFavorites().includes(songId);
}

function getUserPlaylists() {
  return JSON.parse(localStorage.getItem('userPlaylists') || "[]");
}
function setUserPlaylists(pls) {
  localStorage.setItem('userPlaylists', JSON.stringify(pls));
}

// --------------- THEME TOGGLE -----------------
// dark theme button
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  // Optionally: show a toast "Dark mode only"
});

// --------------- RENDER ALBUMS -----------------
function renderAlbums() {
  const grid = document.getElementById('albums-grid');
  grid.innerHTML = '';
  albums.forEach(album => {
    const el = document.createElement('div');
    el.className = 'album-card';
    el.innerHTML = `
      <img src="${album.cover}" class="album-cover" alt="${album.title}" />
      <div class="album-title">${album.title}</div>
      <div class="album-artist">${album.artist}</div>
      <button class="play-btn" title="Play album" data-album="${album.id}">
        <i data-feather="play"></i>
      </button>
    `;
    el.querySelector('.play-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      playAlbum(album.id);
    });
    el.addEventListener('click', () => showAlbumSongs(album.id));
    grid.appendChild(el);
  });
  feather.replace();
}

// --------------- RENDER PLAYLISTS ---------------
function renderPlaylists() {
  const grid = document.getElementById('playlists-grid');
  grid.innerHTML = '';
  const userPlaylists = getUserPlaylists().length ? getUserPlaylists() : playlists;
  userPlaylists.forEach(pl => {
    const el = document.createElement('div');
    el.className = 'playlist-card';
    el.innerHTML = `
      <img src="${pl.cover}" class="playlist-cover" alt="${pl.title}" />
      <div class="playlist-title">${pl.title}</div>
      <div class="playlist-meta">${pl.songIds.length} songs</div>
      <button class="play-btn" title="Play playlist" data-playlist="${pl.id}">
        <i data-feather="play"></i>
      </button>
    `;
    el.querySelector('.play-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      playPlaylist(pl.id);
    });
    el.addEventListener('click', () => showPlaylistSongs(pl.id));
    grid.appendChild(el);
  });
  feather.replace();
}

// -------------- SHOW ALBUM SONGS ----------------
function showAlbumSongs(albumId) {
  const album = albums.find(a => a.id === albumId);
  showSongsList(album.songs, `${album.title} - Songs`);
}

// -------------- SHOW PLAYLIST SONGS -------------
function showPlaylistSongs(playlistId) {
  const userPlaylists = getUserPlaylists().length ? getUserPlaylists() : playlists;
  const playlist = userPlaylists.find(pl => pl.id === playlistId);
  const songs = playlist.songIds.map(id => allSongs.find(s => s.id === id)).filter(Boolean);
  showSongsList(songs, `${playlist.title} - Songs`);
}

// ----------- SHOW SONGS LIST (ALBUM/PLAYLIST/SEARCH) ------------
function showSongsList(songs, heading = 'Songs') {
  document.querySelector('.albums-section').style.display = 'none';
  document.querySelector('.playlists-section').style.display = 'none';
  const searchSection = document.getElementById('search-results-section');
  searchSection.style.display = '';
  searchSection.innerHTML = ''; // Clear previous content

  // Back Button
  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn';
  backBtn.innerHTML = '<i data-feather="arrow-left"></i> Back';
  backBtn.onclick = () => {
    document.querySelector('.albums-section').style.display = '';
    document.querySelector('.playlists-section').style.display = '';
    searchSection.style.display = 'none';
  };
  searchSection.appendChild(backBtn);
  // Heading
  const h2 = document.createElement('h2');
  h2.textContent = heading;
  searchSection.appendChild(h2);
  // Song list
  const list = document.createElement('div');
  list.className = 'songs-list';
  searchSection.appendChild(list);
  renderSongsList(songs, list);
  feather.replace();
}

// -------------- RENDER SONG ROWS ----------------
function renderSongsList(songs, container) {
  container.innerHTML = '';
  songs.forEach(song => {
    const row = document.createElement('div');
    row.className = 'song-row';
    row.innerHTML = `
      <img src="${song.cover}" class="song-cover" alt="${song.title}" />
      <div class="song-info">
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
      <button class="fav-btn ${isFavorite(song.id) ? 'faved' : ''}" title="Favorite">
        <i data-feather="heart"></i>
      </button>
      <button class="play-btn" title="Play"><i data-feather="play"></i></button>
    `;
    // Favorite button
    row.querySelector('.fav-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(song.id, row.querySelector('.fav-btn'));
    });
    // Play button
    row.querySelector('.play-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      playSong(song.id);
    });
    // Play row click
    row.addEventListener('dblclick', () => playSong(song.id));
    container.appendChild(row);
  });
  feather.replace();
}

// -------- FAVORITE TOGGLE ---------------
function toggleFavorite(songId, btn) {
  let favs = getFavorites();
  if (favs.includes(songId)) {
    favs = favs.filter(id => id !== songId);
    btn.classList.remove('faved');
  } else {
    favs.push(songId);
    btn.classList.add('faved');
  }
  setFavorites(favs);
  feather.replace();
}

// ------------- SEARCH FUNCTIONALITY --------------
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
  const val = e.target.value.trim().toLowerCase();
  if (!val) {
    document.querySelector('.albums-section').style.display = '';
    document.querySelector('.playlists-section').style.display = '';
    document.getElementById('search-results-section').style.display = 'none';
    return;
  }
  const results = allSongs.filter(song =>
    song.title.toLowerCase().includes(val) ||
    song.artist.toLowerCase().includes(val)
  );
  document.querySelector('.albums-section').style.display = 'none';
  document.querySelector('.playlists-section').style.display = 'none';
  const searchSection = document.getElementById('search-results-section');
  searchSection.style.display = '';
  searchSection.innerHTML = '';
  // Back Button
  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn';
  backBtn.innerHTML = '<i data-feather="arrow-left"></i> Back';
  backBtn.onclick = () => {
    document.querySelector('.albums-section').style.display = '';
    document.querySelector('.playlists-section').style.display = '';
    searchSection.style.display = 'none';
    searchInput.value = '';
  };
  searchSection.appendChild(backBtn);
  // Heading
  const h2 = document.createElement('h2');
  h2.textContent = 'Search Results';
  searchSection.appendChild(h2);
  // Song list
  const list = document.createElement('div');
  list.className = 'songs-list';
  searchSection.appendChild(list);
  renderSongsList(results, list);
  feather.replace();
});

// ------------- PLAY SONG / ALBUM / PLAYLIST --------------
let audio = new Audio();
let nowPlaying = null;

function updatePlayerVisibility(show) {
  const player = document.getElementById('player');
  const main = document.querySelector('main');
  if (show) {
    player.classList.add('show');
    main.classList.add('player-active'); // Add padding to main content!
  } else {
    player.classList.remove('show');
    main.classList.remove('player-active');
  }
}

function playSong(songId) {
  const song = allSongs.find(s => s.id === songId);
  if (!song) return;
  nowPlaying = song;
  audio.src = song.src;
  audio.play();
  renderPlayer(song);
  updatePlayerVisibility(true);
}

function playAlbum(albumId) {
  const album = albums.find(a => a.id === albumId);
  if (album && album.songs.length > 0) playSong(album.songs[0].id);
}

function playPlaylist(playlistId) {
  const userPlaylists = getUserPlaylists().length ? getUserPlaylists() : playlists;
  const playlist = userPlaylists.find(pl => pl.id === playlistId);
  if (playlist && playlist.songIds.length > 0) playSong(playlist.songIds[0]);
}

// ------------- PLAYER UI -------------
function renderPlayer(song) {
  const player = document.getElementById('player');
  player.innerHTML = `
    <div class="player-controls">
      <button id="prev-btn" title="Previous"><i data-feather="skip-back"></i></button>
      <button id="play-btn" title="Play/Pause"><i data-feather="pause"></i></button>
      <button id="next-btn" title="Next"><i data-feather="skip-forward"></i></button>
    </div>
    <div class="track-info">
      <img src="${song.cover}" class="cover" />
      <div class="track-meta">
        <span class="title">${song.title}</span>
        <span class="artist">${song.artist}</span>
      </div>
    </div>
    <input type="range" min="0" max="100" value="0" id="seek">
    <button class="fav-btn ${isFavorite(song.id) ? 'faved' : ''}" id="player-fav-btn" title="Favorite">
      <i data-feather="heart"></i>
    </button>
  `;
  feather.replace();
  // Controls
  document.getElementById('play-btn').onclick = () => {
    if (audio.paused) { audio.play(); setPlayBtn(true); }
    else { audio.pause(); setPlayBtn(false); }
  };
  document.getElementById('prev-btn').onclick = () => prevSong();
  document.getElementById('next-btn').onclick = () => nextSong();
  document.getElementById('player-fav-btn').onclick = () => {
    toggleFavorite(song.id, document.getElementById('player-fav-btn'));
  };
  const seek = document.getElementById('seek');
  audio.ontimeupdate = () => {
    seek.value = (audio.currentTime / audio.duration) * 100 || 0;
  };
  seek.oninput = () => {
    audio.currentTime = (seek.value / 100) * audio.duration;
  };
}

function setPlayBtn(isPlaying) {
  document.getElementById('play-btn').innerHTML = isPlaying
    ? '<i data-feather="pause"></i>'
    : '<i data-feather="play"></i>';
  feather.replace();
}

// Previous/Next song (demo: next in album or allSongs)
function prevSong() {
  if (!nowPlaying) return;
  let idx = allSongs.findIndex(s => s.id === nowPlaying.id);
  if (idx > 0) playSong(allSongs[idx - 1].id);
}
function nextSong() {
  if (!nowPlaying) return;
  let idx = allSongs.findIndex(s => s.id === nowPlaying.id);
  if (idx < allSongs.length - 1) playSong(allSongs[idx + 1].id);
}

// ------------- NAVIGATION -------------
document.getElementById('nav-search').onclick = (e) => {
  e.preventDefault();
  searchInput.focus();
};
document.getElementById('nav-library').onclick = (e) => {
  e.preventDefault();
  document.querySelector('.albums-section').style.display = 'none';
  document.querySelector('.playlists-section').style.display = '';
  document.getElementById('search-results-section').style.display = 'none';
};

// ------------- INITIAL RENDER -------------
renderAlbums();
renderPlaylists();
audio.onended = nextSong;
updatePlayerVisibility(false);

// ------------- HOW TO ADD SONGS / PLAYLISTS (for developers) --------------
// To add a song: add to the `albums` array under the correct album, with fields: id, title, artist, src, cover.
// To add a new album: add a new object to `albums` with id, title, artist, cover, songs (array).
// To add a new playlist: add to `playlists`, or use localStorage 'userPlaylists' for user-created lists.
// To add to a playlist: update the 'songIds' array for the playlist (persist in localStorage if needed).
//
// For file paths, place the .mp3 and .jpg files in the respective assets folders.

const playlistsGrid = document.getElementById('playlists-grid');
playlists.forEach(p => {
  const card = createPlaylistCard(p);
  playlistsGrid.appendChild(card);
});

// After injecting all cards:
const highlightHTML = `
  <div class="playlist-highlight-info"> ...same inner HTML here... </div>
`;
playlistsGrid.insertAdjacentHTML('afterend', highlightHTML);

