import { navbar } from "./scripts/navbar.js"
import { loadPage } from "./scripts/loadPage.js"
import { TodoList } from "./scripts/TodoList.js"
import { projecter } from "./scripts/projecter.js"

document.addEventListener("DOMContentLoaded", function () {
    // Initial load of the navbar
    window.projecter = projecter
    window.loadPage = loadPage
    window.TodoList = TodoList
    navbar()
    // Event listeners for each navigation link
})
