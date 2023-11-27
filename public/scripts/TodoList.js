export class TodoList {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem("todos")) || [
            { text: "Default Todo", crossed: false },
        ]
        this.inputField = document.getElementById("TodoInput")
        this.todoButton = document.getElementById("TodoButton")
        this.list = document.getElementById("TodoList")

        // Add a click event listener to the "Add Todo, Dawg" button
        this.todoAdder = this.addToDo.bind(this)
        this.todoButton.addEventListener("click", this.todoAdder)
        this.inputField.addEventListener("keyup", this.EnterListiner.bind(this))
        this.updateTodoList() // Update the displayed todo list
    }

    ///////////////////////////// Add todo item to the list /////////////////////////////
    addToDo() {
        const inputValue = this.inputField.value

        if (inputValue.length < 1) {
            alert("Please enter a todo, dawg! you know it can't be empty.")
        } else {
            this.todos.push({ text: inputValue, crossed: false }) // Use an object to store the todo and its crossed status
            this.updateTodoList() // Update the displayed todo list
        }
        this.inputField.value = ""
    }

    ///////////////////////////// Update the displayed todo list /////////////////////////////
    updateTodoList() {
        this.list.innerHTML = "" // Clear the current list

        // Loop through the todos array and add each todo to the list
        for (const todo of this.todos) {
            const index = this.todos.indexOf(todo) // Get the index of the current todo
            const listItem = document.createElement("li")
            listItem.textContent = todo.text

            if (todo.crossed) {
                listItem.style.textDecoration = "line-through"
            }

            listItem.addEventListener("click", () => this.crossOut(index))
            listItem.addEventListener("dblclick", () => this.removeToDo(index))

            this.list.appendChild(listItem)
        }

        // Save todos to local storage after updating the todo list
        this.saveToLocalStorage()
    }

    ///////////////////////////// Cross out todo item /////////////////////////////
    crossOut(index) {
        // Toggle the crossed status of the todo at the given index
        this.todos[index].crossed = !this.todos[index].crossed
        this.updateTodoList() // Update the displayed todo list
    }

    ///////////////////////////// Remove todo item /////////////////////////////
    removeToDo(index) {
        // Remove the todo at the given index
        this.todos.splice(index, 1)
        this.updateTodoList() // Update the displayed todo list
    }

    ///////////////////////////// Enter key listener /////////////////////////////
    EnterListiner(event) {
        if (event.key === "Enter") {
            this.addToDo()
        }
    }

    ///////////////////////////// Save todos to local storage /////////////////////////////
    saveToLocalStorage() {
        // Save todos to local storage as a JSON string
        localStorage.setItem("todos", JSON.stringify(this.todos))
    }
}
