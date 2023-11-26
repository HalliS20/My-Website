export function loadPage(page, element) {
    fetch(`../views/${page}`)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("content").innerHTML = data
        })
        .catch((error) => console.error("Error:", error))
    if (element && element.classList) {
        const navigationItems = document.querySelectorAll(".navbar li a")
        for (const item of navigationItems) {
            item.classList.remove("active")
        }

        // Add active class to the selected navigation item
        element.classList.add("active")
        console.log("Element ID:", element.id)
        console.log("Element Classes:", element.classList)
    } else {
        console.error("Element not found")
    }
}
