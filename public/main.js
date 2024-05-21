import {TodoList} from "./scripts/TodoList.js"
import {loadPage} from "./scripts/loadPage.js"
import {navbar} from "./scripts/navbar.js"
import {music} from "./scripts/music.js"
import {projecter} from "./scripts/projecter.js"
import {blog} from "./scripts/blog.js"
import {pictures} from "./scripts/pictures.js"

document.addEventListener("DOMContentLoaded", function () {
    // Initial load of the navbar
    window.TodoList = TodoList
    window.projecter = projecter
    window.loadPage = loadPage
    window.music = music
    window.blog = blog
    window.pictures = pictures
    navbar()
    // Event listeners for each navigation link
})
