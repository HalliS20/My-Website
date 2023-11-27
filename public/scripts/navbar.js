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
            fetch("../views/projects.html")
                .then((response) => response.text())
                .then((data) => {
                    document.getElementById("content").innerHTML = data
                    const projects = document.getElementById("projects")
                    const projList = ["todoList"]
                    for (const proj of projList) {
                        const projItem = document.createElement("li")
                        const projLink = document.createElement("a")
                        projLink.href = "#"
                        projLink.textContent = proj
                        projLink.addEventListener("click", () => {
                            fetch(`../views/${proj}.html`).then((response) => {
                                response.text().then((data) => {
                                    document.getElementById(
                                        "content"
                                    ).innerHTML = data
                                    if (proj === "todoList") {
                                        const todoList = new window.TodoList()
                                    }
                                })
                            })   
                        })
                        projItem.appendChild(projLink)
                        projects.appendChild(projItem)
                    }
                })
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
}
