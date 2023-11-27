import { navbar } from "./scripts/navbar.js"
import { loadPage } from "./scripts/loadPage.js"
import { TodoList } from "./scripts/TodoList.js"
document.addEventListener("DOMContentLoaded", function () {
    // Initial load of the navbar
    navbar()
    window.loadPage = loadPage
    window.TodoList = TodoList
    // Event listeners for each navigation link
})
