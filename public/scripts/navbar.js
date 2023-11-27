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
            window.loadPage("../views/home.html", this)
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
            window.loadPage("../views/projects.html", this)
            console.log("Projects Link clicked")
            window.projecter()
        })
    document
        .getElementById("contactsLink")
        .addEventListener("click", function (event) {
            event.preventDefault() // Prevent the default link behavior
            window.loadPage("contacts.html", this)
        })
    document
        .getElementById("settingsLink")
        .addEventListener("click", function (event) {
            event.preventDefault() // Prevent the default link behavior
            window.loadPage("../views/settings.html", this)
        })

    const firstNavLink = document.querySelector(".navbar li:first-child a")
    window.loadPage("../views/home.html", firstNavLink)
    console.log("First nav link clicked")
}
