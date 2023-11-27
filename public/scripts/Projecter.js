export function projecter() {
    fetch("../views/projects.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("content").innerHTML = data
            const projects = document.getElementById("projects")
            ///////////////////// LIST OF PROJECTS /////////////////////
            const projList = ["todoList"]
            ///////////////////////////////////////////////////////////
            for (const proj of projList) {
                const projItem = document.createElement("li")
                const projLink = document.createElement("a")
                projLink.href = "#"
                projLink.textContent = proj
                projLink.addEventListener("click", () => {
                    fetch(`../views/${proj}.html`).then((response) => {
                        response.text().then((data) => {
                            document.getElementById("content").innerHTML = data
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
}
