function TodoLister() {
    let addToDoButton = document.getElementById("TodoButton")
    let toDoContainer = document.getElementById("TodoList")
    let inputField = document.getElementById("TodoInput")

    addToDoButton.addEventListener("click", function () {
        var listItem = document.createElement("li")
        listItem.innerText = inputField.value
        toDoContainer.appendChild(listItem)
        listItem.addEventListener("dblclick", function () {
            toDoContainer.removeChild(listItem)
        })
        listItem.addEventListener("click", function () {
            listItem.style.textDecoration = "line-through"
        })
    })
}

TodoLister()
