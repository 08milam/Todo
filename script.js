

/*Made By: Charles M Milam Jr | Date: 10-14-23 | ToDo.css*/

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// TOP MENU BAR
let menu = function(){
  let targetElement = document.querySelector(".navbar");
let halfwayPoint = window.innerHeight / 35;
window.onscroll = function() {
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
let create = function(){

  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  inputElement = document.querySelector('#input');
  inputValue = inputElement.value;
  const displayItem = document.querySelector('#toDoList');
  newItem = document.createElement("li")
      newItem.setAttribute("class", "item")
      newItem.textContent = inputValue
      displayItem.prepend(newItem)

      tasks.forEach(a)
      function a(element){
      }
}


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// STORING ITEMS IN MEMORY
let storage = function(){
const todo = {
  content : inputValue 
}
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(todo);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// TEST LOCAL STORAGE
let testStorage = function(){
  if (typeof(Storage) !== "undefined") {
  } else {
      console.error("LocalStorage is not supported in this browser.");
  }
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// MARK ITEM AS COMPLETE
let completed = function(){
    newItem.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('completed');
    }
  });
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// REMOVE ITEM
let drop = function(){
  const remove = document.createElement('button')
    remove.setAttribute("class", "remove")
    remove.textContent = "X"
    newItem.appendChild(remove)
    remove.addEventListener('click', function(e){
              e.target.parentElement.remove(); 
              // todos = todos.filter(t => ) 
              localStorage.setItem('tasks', JSON.stringify(tasks));})
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// COMBINE ALL FUNCTION
const form = document.querySelector('#listItems');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  menu() 

  create() 

  drop() 

  completed()

  testStorage() 

  // storage() <---- is turned off
});