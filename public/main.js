import { navbar } from "./scripts/navbar.js"
import { loadPage } from "./scripts/loadPage.js"
import { TodoList } from "./scripts/TodoList.js"
import { projecter } from "./scripts/projecter.js/index.js"

document.addEventListener("DOMContentLoaded", function () {
    // Initial load of the navbar
    navbar()
    window.loadPage = loadPage
    window.TodoList = TodoList
    window.projecter = projecter
    // Event listeners for each navigation link
})
