async function fetchPictures() {
    const picturePaths = await fetch("/pictures").then((response) =>
        response.json(),
    )
    const prefix = "../pictures/me/"
    let fullPaths = []
    for (let i in picturePaths) {
        const path = prefix + picturePaths[i]
        fullPaths.push(path)
    }
    return fullPaths
}

export async function pictures() {
    let index = 0
    const allPics = await fetchPictures()
    let imgPart = document.getElementById("imgPart")
    imgPart.src = allPics[index]
    console.log(allPics)
    document.getElementById("nextPic").addEventListener("click", function () {
        if (index < allPics.length - 1) {
            index++
            imgPart.src = allPics[index]
        }
    })
    document.getElementById("prevPic").addEventListener("click", function () {
        if (index > 0) {
            index--
            imgPart.src = allPics[index]
        }
    })
}
