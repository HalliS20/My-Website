export function navbar() {
    fetch("../views/navbar.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("navbar-container").innerHTML = data
            addEventListeners()
        })
        .catch((error) => console.error("Error:", error))
}

function addEventListeners() {
    document
        .getElementById("homeLink")
        .addEventListener("click", function (event) {
            event.preventDefault() // Prevent the default link behavior
            window.loadPage("../views/home.html", this).then(() => {
                window.pictures()
            })
        })

    document
        .getElementById("infoLink")
        .addEventListener("click", function (event) {
            event.preventDefault() // Prevent the default link behavior
            window.loadPage("../views/info.html", this)
        })

    document
        .getElementById("projectsLink")
        .addEventListener("click", function (event) {
            event.preventDefault() // Prevent the default link behavior
            window.loadPage("../views/projects.html", this).then(() => {
                console.log("Projects Link clicked :)")
                window.projecter()
            })
        })
    document
        .getElementById("blogLink")
        .addEventListener("click", function (event) {
            event.preventDefault() // Prevent the default link behavior
            window.loadPage("blog.html", this).then(() => {
                console.log("Blog Link clicked :)")
                window.blog()
            })
        })
    document
        .getElementById("settingsLink")
        .addEventListener("click", function (event) {
            event.preventDefault() // Prevent the default link behavior
            window.loadPage("../views/settings.html", this)
        })

    const firstNavLink = document.querySelector(".navbar li:first-child a")
    window.loadPage("../views/home.html", firstNavLink).then(() => {
        window.pictures()
    })
}
