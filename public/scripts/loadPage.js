export function loadPage(page, element) {
    const contentElement = document.getElementById("content")

    // Add the fade-out class before changing the content
    contentElement.classList.add("fade-out")

    setTimeout(() => {
        fetch(`../views/${page}`)
            .then((response) => response.text())
            .then((data) => {
                // Change the content of the element
                contentElement.innerHTML = data

                // Remove the fade-out class after a delay
                contentElement.classList.remove("fade-out")
            })
            .catch((error) => console.error("Error:", error))
    }, 300)

    // Change the active navigation item to the selected page
    if (element && element.classList) {
        // Check if element exists and has classList
        const navigationItems = document.querySelectorAll(".navbar li a") // Get all navigation items
        for (const item of navigationItems) {
            // Remove active class from all navigation items
            item.classList.remove("active")
        }

        // Add active class to the selected navigation item for navbar change to take effect
        element.classList.add("active")
        console.log("Element ID:", element.id)
        console.log("Element Classes:", element.classList)
    } else {
        console.error("Element not found")
    }
}
