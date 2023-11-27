import { loadPage } from "./scripts/loadPage.js"
import { TodoList } from "./scripts/TodoList.js"
import { projecter } from "./scripts/projecter.js"
import { navbar } from "./scripts/navbar.js"

document.addEventListener("DOMContentLoaded", function () {
    // Initial load of the navbar
    window.TodoList = TodoList
    window.projecter = projecter
    window.loadPage = loadPage
    navbar()
    // Event listeners for each navigation link
})
