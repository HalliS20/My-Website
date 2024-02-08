import { TodoList } from "./scripts/TodoList.js";
import { loadPage } from "./scripts/loadPage.js";
import { navbar } from "./scripts/navbar.js";
import { music } from "./scripts/music.js";
import { projecter } from "./scripts/Projecter.js";

document.addEventListener("DOMContentLoaded", function () {
  // Initial load of the navbar
  window.TodoList = TodoList;
  window.projecter = projecter;
  window.loadPage = loadPage;
  window.music = music;
  navbar();
  // Event listeners for each navigation link
});
