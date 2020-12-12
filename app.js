const stationList = document.querySelector('.station-list')
const stationIconImg = document.querySelector('.station-icon-img')
const stationListItems = document.querySelector('.station-list-items')
const cancel = document.querySelector('.cancel')
const playPause = document.querySelector('.icon-music-play-button')
const skipButton = document.querySelector('.icon-music-end-button')
const songState = document.getElementById('songState')

let songs = ["brsongs/Akatsuki No Yona Hip Hop Remix.mp3", "brsongs/Blue Rhythmz - Naruto Bump.mp3", "brsongs/Final Fantasy 13 Battle Theme Remix.mp3", "brsongs/Inuyasha Kikyo Theme Remix.mp3",  "brsongs/Inuyasha Shinjitsu no Uta Remix.mp3", "brsongs/Marvel vs Capcom 2 Abyss Theme Remix.mp3", "brsongs/Marvel vs Capcom 2 Clock Tower House Remix.mp3", "brsongs/Ridge Racer Type 4 Garage Talk Remix.mp3", "brsongs/Sonic Unleashed Apotos Remix.mp3", "brsongs/Street Fighter 3 Gill Theme Remix.mp3", "brsongs/Street Fighter 3 Ibuki Hip Hop Remix.mp3", "brsongs/Street Fighter 3 Third Strike Akuma Remix.mp3", "brsongs/Street Fighter 3 Third Strike Makoto Remix.mp3", "brsongs/Street Fighter 3 Third Strike Necro Remix.mp3"]
let song = new Audio()
song.crossOrigin = 'anonymous';
let currentSong = Math.floor(Math.random() * songs.length)

window.onload = pauseSong()

function playSong() {
    song.src = songs[currentSong]
    setTimeout(() => {
        song.play()
    }, 100)
}

function pauseSong() {
    song.src = songs[currentSong]
    setTimeout(() => {
        song.pause()
    }, 100)
}

function togglePlayPause() {
    if (song.paused) {
        setTimeout(() => {
            song.play()
        }, 100)
    } else {
        setTimeout(() => {
            song.pause()
        }, 100)
    }
}

function skipSong() {
    currentSong = Math.floor(Math.random() * songs.length)
    playSong()
}


stationIconImg.addEventListener('click', () => {
    stationIconImg.style.opacity = "0";
    stationList.style.display = "block"
})

cancel.addEventListener('click', () => {
    stationList.style.display = "none"
    stationIconImg.style.opacity = "1"
})

playPause.addEventListener('click', () => {
    togglePlayPause()
})

skipButton.addEventListener('click', () => {
    skipSong()
    songState.textContent = songs[currentSong].replace('brsongs/', '').replace('.mp3', '')
})

songState.textContent = songs[currentSong].replace('brsongs/', '').replace('.mp3', '')

//future functionality add click event to close the stationlist by clicking outside of it
/* document.addEventListener('click', (event) => {
    let isClickInside = stationListItems.contains(event.target)

    if (!isClickInside && stationList.style.display == "block") {
        alert('hey man')
        stationList.style.display = "none"
    } else if (isClickInside) {
        alert('ah bet')
    }


}) */