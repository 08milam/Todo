/*Made By: Charles M Milam Jr |  | ToDo.css*/

// Top Menu Bar
function setupMenuBar() {
  const navbar = document.querySelector(".navbar");
  const halfwayPoint = window.innerHeight / 35;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    navbar.style.backgroundColor = scrollPosition >= halfwayPoint ? "#2E5266FF" : "transparent";
  });
}

// Create Item
function createItem(inputValue) {
  const displayItem = document.querySelector("#toDoList");
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = inputValue;
  displayItem.prepend(newItem);

  // Add delete button
  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.textContent = "X";
  newItem.appendChild(remove);
  
  remove.addEventListener("click", function (e) {
    const parentElement = e.target.parentElement;
    parentElement.remove();
    removeFromStorage(inputValue);
  });
}

function removeFromStorage(inputValue) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const index = tasks.findIndex((element) => element.content === inputValue);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Storing Items in Memory
function storeItem(inputValue) {
  testLocalStorage();
  const todo = {
    content: inputValue,
  };
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Test Local Storage
function testLocalStorage() {
  if (typeof Storage === "undefined") {
    console.error("LocalStorage is not supported in this browser.");
  }
}

function loadItemsFromStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach((element) => {
    createItem(element.content);
  });
}

// Combine All Functions
const form = document.querySelector("#listItems");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputElement = document.querySelector("#input");
  const inputValue = inputElement.value;

  setupMenuBar();
  createItem(inputValue);
  storeItem(inputValue);
});

loadItemsFromStorage();
