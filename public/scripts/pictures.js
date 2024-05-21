



export class pictures{

    constructor() {
        this.allPics = []
        this.index = 0
        this.parent = document.getElementById("coverDiv")
        this.img = null
        this.init().then(() => {
            console.log("Pictures initialized")
        })
    }

    async init(){
        this.allPics = await this.fetchPictures()
        this.setFirstPicture()
        this.setListeners()
    }

    setListeners(){
        document.getElementById("nextPic").addEventListener("click", () => {
            if (this.index < this.allPics.length - 1) {
                this.setImage(1)
            }
        })
        document.getElementById("prevPic").addEventListener("click", () => {
            if (this.index > 0) {
                this.setImage(-1)
            }
        })
    }

    async fetchPictures() {
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
    


    setFirstPicture() {
        let imgPart = document.createElement("img")
        imgPart.src = this.allPics[0]
        imgPart.id = "imgPart"
        this.img = imgPart
        this.parent.prepend(this.img)
    }

    setTemp(dir){
        let tempImg = document.createElement("img")
        tempImg.src = this.allPics[this.index]
        tempImg.id = "imgPart"
        tempImg.style.opacity = '0'
        tempImg.display = 'none'
        tempImg.style.transform = `translateX(${-dir *100}%)`
        return tempImg
    }

    setImage(dir) {
        this.index += dir
        this.img.style.opacity = '0'; // Start the fade out
        this.img.style.transform = `translateX(${dir * 100}%)`
        let tempImg = this.setTemp(dir)

        setTimeout(() => {
            this.parent.removeChild(this.img)
            this.parent.prepend(tempImg)
        },200)

        setTimeout(() => {
            tempImg.display = 'block'
            tempImg.style.opacity = '1'
            tempImg.style.transform = `translateX(0%)`
        }, 300)

        setTimeout(() => {
            this.img = tempImg},300)
    }
}
