function createBlogEntry(content, entry) {
    const entryDiv = document.createElement("div")
    entryDiv.classList.add("blogEntry")
    const title = document.createElement("h2")
    title.innerText = entry.title
    title.classList.add("title")
    const text = document.createElement("p")
    text.innerText = entry.text
    text.classList.add("text")

    entryDiv.appendChild(title)
    entryDiv.appendChild(text)

    const currentHeight = content.clientHeight
    console.log(currentHeight)
    // Append the new entry
    content.appendChild(entryDiv)

    // Use requestAnimationFrame to ensure the new height is calculated after the new entry is added
    requestAnimationFrame(() => {
        const newHeight = content.clientHeight
        if (newHeight === 40) {
            return
        }
        console.log(newHeight)
        // Set the max-height to the current height first
        content.style.maxHeight = `${currentHeight}px`

        // Trigger reflow
        content.offsetHeight

        // Animate the max-height change
        content.style.transition = "max-height 500ms ease"
        content.style.maxHeight = `${newHeight}px`

        // Remove the inline styles after the transition ends
        content.addEventListener(
            "transitionend",
            () => {
                content.style.removeProperty("max-height")
                content.style.removeProperty("transition")
            },
            {once: true},
        )
    })

    requestAnimationFrame(() => {
        entryDiv.style.opacity = "1"
    }, 1)
}

function textToggler(button, newPost) {
    if (button.innerText === "Cancel") {
        button.innerText = "New Post"
        fadeOut(newPost)
    } else {
        button.innerText = "Cancel"
        fadeIn(newPost)
    }
}

function fadeIn(element) {
    let maxheight = 0
    let opacity = 0
    element.style.display = "block"
    function increaseHeight() {
        maxheight += 10 // increased speed of height increase
        if (maxheight >= 300) {
            opacity += 0.02 // increased speed of fade in
            element.style.opacity = opacity
        } // assuming the height will never exceed 1000px
        if (maxheight >= 1000) {
            // assuming the height will never exceed 1000px
            element.style.maxHeight = "1000px"
            // Start the opacity animation immediately after the height animation has completed
            return true
        }
        element.style.maxHeight = maxheight + "px"
        requestAnimationFrame(increaseHeight)
    }
    increaseHeight()

    function increaseOpacity() {
        opacity += 0.02 // increased speed of fade in
        if (opacity >= 1) {
            element.style.opacity = 1
            return true
        }
        element.style.opacity = opacity
        requestAnimationFrame(increaseOpacity)
    }
}

function watchSubmit() {
    document.getElementById("newPostSubmit").addEventListener("click", () => {
        const title = document.getElementById("title").innerText
        const text = document.getElementById("text").value
        const entry = {title: title, text: text}
        fetch("/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entry),
        })
        createBlogEntry(document.getElementById("blogList"), entry)
        textToggler(
            document.getElementById("newPostButton"),
            document.getElementById("newPost"),
        )
    })
}

function fadeOut(element) {
    let maxheight = 1000
    let opacity = 1
    function decrease() {
        maxheight -= 10 // increased speed of height decrease
        opacity -= 0.02 // increased speed of fade out
        if (maxheight <= 0) {
            element.style.maxHeight = "0"
            element.style.opacity = 0
            element.style.display = "none"
            return true
        }
        element.style.maxHeight = maxheight + "px"
        element.style.opacity = opacity
        requestAnimationFrame(decrease)
    }
    decrease()
}

export async function blog() {
    const entries = await fetch("/blog").then((response) => response.json())

    const content = document.getElementById("blogList")

    for (let i in entries) {
        const entry = entries[i]
        createBlogEntry(content, entry)
    }

    const button = document.getElementById("newPostButton")
    const newPost = document.getElementById("newPost")
    button.addEventListener("click", () => {
        textToggler(button, newPost)
    })

    const bigTitleDiv = document.getElementById("bigTitleDiv")
    const title = document.getElementById("title")
    bigTitleDiv.addEventListener("click", () => {
        title.focus()
    })

    watchSubmit()
}
