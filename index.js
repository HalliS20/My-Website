import { navbar } from "./scripts/navbar.js"
import { loadPage } from "./scripts/loadPage.js"

document.addEventListener("DOMContentLoaded", function () {
    // Initial load of the navbar
    navbar()

    window.loadPage = loadPage
    // Event listeners for each navigation link
})
