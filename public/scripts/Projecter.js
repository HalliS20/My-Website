export function projecter() {
  fetch("../views/projects.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      window.music();
      new window.TodoList();
    });
}
