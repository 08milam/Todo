//Made By: Charles M Milam Jr | Date: 10-14-23 | ToDo.js
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


const removeButton = document.querySelectorAll('#completebtn');
const form = document.querySelector('#listItems');
const input = document.querySelector('#addToList');
const displayItem = document.querySelector('#toDoList');


    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newItem = document.createElement('li');




        const removeItem = document.createElement('button');
        removeItem.setAttribute('class', 'remove')
        removeItem.innerText = 'X';
        removeItem.addEventListener('click', function(e){
            e.target.parentElement.remove();


             savedTodos.push({ task: newTodo.innerText, isCompleted: false });
             localStorage.setItem("todos", JSON.stringify(savedTodos));


        })
        newItem.innerText = input.value;
        newItem.appendChild(removeItem);
        input.value = '';
        displayItem.appendChild(newItem);
});

let targetElement = document.querySelector(".navbar");
let halfwayPoint = window.innerHeight / 35;
window.onscroll = function() {
  let scrollPosition = window.scrollY;
  if (scrollPosition >= halfwayPoint) {
    targetElement.style.backgroundColor = "rgba(23, 23, 23, 1)"; 
  } else {
    targetElement.style.backgroundColor = "transparent";
  }
};