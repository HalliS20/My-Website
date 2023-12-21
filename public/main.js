import {TodoList} from "./scripts/TodoList.js"
import {projecter} from "./scripts/projecter.js"
import {loadPage} from "./scripts/loadPage.js"
import {navbar} from "./scripts/navbar.js"
import {addStarsMusic} from "./scripts/music.js"

document.addEventListener("DOMContentLoaded", function () {
    // Initial load of the navbar
    window.TodoList = TodoList
    window.projecter = projecter
    window.loadPage = loadPage
    window.loadMusicFiles = addStarsMusic
    navbar()
    // Event listeners for each navigation link
})
