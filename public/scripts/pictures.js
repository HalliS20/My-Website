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

function setFirstPicture(allPics) {
    let parent = document.getElementById("coverDiv")
    let imgPart = document.createElement("img")
    imgPart.src = allPics[0]
    imgPart.id = "imgPart"
    parent.prepend(imgPart)
}


function setImage(imgObj, index, allPics) {
    imgObj.src = allPics[index]
}

export async function pictures() {
    //============= Initializations =============//
    let index = 0
    const allPics = await fetchPictures()
    setFirstPicture(allPics)
    let imgPart = document.getElementById("imgPart")
    //============= Event Listeners =============//
    document.getElementById("nextPic").addEventListener("click", function () {
        if (index < allPics.length - 1) {
            index++
            setImage(imgPart, index, allPics)
        }
    })
    document.getElementById("prevPic").addEventListener("click", function () {
        if (index > 0) {
            index--
            setImage(imgPart, index, allPics)
        }
    })
}
