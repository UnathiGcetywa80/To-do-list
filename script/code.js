function addTask() {
    let input = document.getElementById("taskInput");
     taskText = input.value.trim();
    
    if (taskText !== "") {
      let taskList = document.getElementById("taskList");
      let li = document.createElement("li");
      li.textContent = taskText;
      
      li.addEventListener("click", function() {
        this.null.removeChild(this);
      });
      
      taskList.appendChild(li);
      input.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
let sortButton = document.querySelector('button');
let taskList = document.getElementById('taskList');

function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();

  if (taskText !== '') {
    let newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}
function sortTask() {
    let taskList = document.getElementById('taskList');
    

}

  

