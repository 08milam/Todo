/*Made By: Charles M Milam Jr |  | ToDo.css*/

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// TOP MENU BAR
function menu() {
  let targetElement = document.querySelector(".navbar");
  let halfwayPoint = window.innerHeight / 35;
  window.onscroll = function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= halfwayPoint) {
      targetElement.style.backgroundColor = "#2E5266FF";
    } else {
      targetElement.style.backgroundColor = "transparent";
    }
  };
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// CREATE ITEM

function create(inputValue) {
  const displayItem = document.querySelector("#toDoList");
  const newItem = document.createElement("li");
  newItem.setAttribute("class", "item");
  newItem.textContent = inputValue;
  displayItem.prepend(newItem);

  // add x delete btn
  const remove = document.createElement("button");
  remove.setAttribute("class", "remove");
  remove.textContent = "X";
  newItem.appendChild(remove);
  remove.addEventListener("click", function (e) {
    e.target.parentElement.remove();
    // todos = todos.filter(t => )
    removeFromStorage(inputValue);
  });
}

function removeFromStorage(inputValue) {
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  let index = tasks.findIndex((element) => element.content === inputValue);
  tasks.splice(index, 1);
  console.log(tasks);
  console.log(index);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// STORING ITEMS IN MEMORY
let storage = function (inputValue) {
  testStorage();
  const todo = {
    content: inputValue,
  };
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  console.log(tasks);
  tasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// TEST LOCAL STORAGE
function testStorage() {
  if (typeof Storage !== "undefined") {
  } else {
    console.error("LocalStorage is not supported in this browser.");
  }
}

function loadItem() {
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach((element) => {
    create(element.content);
  });
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// COMBINE ALL FUNCTION
const form = document.querySelector("#listItems");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputElement = document.querySelector("#input");
  let inputValue = inputElement.value;
  menu();

  create(inputValue);

  storage(inputValue);
});
loadItem();
