function addStarsMusic() {
    fetch("../music/music.json")
        .then((response) => response.json())
        .then((data) => {
            const musiclist = document.getElementById("musicList")
            const musicJson = data
            const music = musicJson.music
            music.map((song) => {
                const songListItem = document.createElement("li")
                const songItem = document.createElement("audio")
                songItem.src = "../music/" + song.link
                songItem.id = song.name
                songItem.controls = true
                const songName = document.createElement("p")
                songName.classList.add("title")
                songName.textContent = song.name
                songListItem.classList.add("song")
                songListItem.appendChild(songName)
                songListItem.appendChild(songItem)
                musiclist.appendChild(songListItem)
            })
        })
        .catch((error) => {
            console.error("Error:", error)
        })
}

// maybe use plyr for the audio player
export {addStarsMusic}
