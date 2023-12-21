function addStarsMusic() {
    fetch("../music/music.json")
        .then((response) => response.json())
        .then((data) => {
            let musiclist = document.getElementById("musicList")
            let musicJson = data
            const music = musicJson.music
            music.map((song) => {
                let songListItem = document.createElement("li")
                let songItem = document.createElement("audio")
                songItem.src = "../music/" + song.link
                songItem.id = song.name
                songItem.controls = true
                const songName = document.createElement("p")
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

export {addStarsMusic}
