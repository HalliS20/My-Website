export function projecter() {
  fetch("../views/projects.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      // const projects = document.getElementById("projects");
      // ///////////////////// LIST OF PROJECTS /////////////////////
      // const projList = ["todoList", "music"];
      // // Project Ideas
      // // Tic Tac Toe, Pomodoro Timer, Drum Machine
      // for (const proj of projList) {
      //   const projItem = document.createElement("li");
      //   const projLink = document.createElement("a");
      //   projLink.href = "#";
      //   projLink.textContent = proj;
      //   projLink.addEventListener("click", () => {
      //     //================== Sets site content to project on link click ==================//
      //     fetch(`../views/${proj}.html`).then((response) => {
      //       response.text().then((data) => {
      //         document.getElementById("content").innerHTML = data;
      //         if (proj === "todoList") {
      //           new window.TodoList(); //===== Make new TodoList JS object =====//
      //         }
      //       });
      //     });
      //   });
      //   projItem.appendChild(projLink);
      //   projects.appendChild(projItem);
      // }
      window.music();
      new window.TodoList();
    });
}
