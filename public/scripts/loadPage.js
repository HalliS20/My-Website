let currentPage = null

export function loadPage(page, element) {
    // If the page to be loaded is the same as the currently loaded page, do nothing
    if (page === currentPage) {
        return Promise.resolve()
    }

    const contentElement = document.getElementById("content")

    // Add the fade-out class before changing the content
    contentElement.classList.add("fade-out")

    return new Promise((resolve) => {
        setTimeout(() => {
            fetch(`../views/${page}`)
                .then((response) => response.text())
                .then((data) => {
                    // Change the content of the element
                    contentElement.innerHTML = data

                    // Remove the fade-out class after a delay
                    contentElement.classList.remove("fade-out")

                    // Update the currently loaded page
                    currentPage = page

                    resolve()
                })
                .catch((error) => console.error("Error:", error))
        }, 400)

        //======== Set active button for NAVBAR ========//
        if (element && element.classList) {
            // If the element exists and has a classList property
            const navigationItems = document.querySelectorAll(".navbar li a") // Get all navigation items
            for (const item of navigationItems) {
                // Loop through all navigation items
                item.classList.remove("active") // Remove the active class from all navigation items
            }

            // Add active class to the selected navigation item
            element.classList.add("active")
            console.log("Element ID:", element.id)
            console.log("Element Classes:", element.classList)
        } else {
            console.error("Element not found")
        }
    })
}
