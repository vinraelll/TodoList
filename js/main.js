let newTask = document.querySelector('.newTask')
let addTask = document.querySelector('.addTask')
let delTask = document.querySelector('.delTask')
let todoList = document.querySelector('.todoList')
let todoArr = []
let task = ''

if(localStorage.getItem('task')) {
  todoArr = JSON.parse(localStorage.getItem('task'))
  displayTasks()
}

addTask.addEventListener('click', function() {
  if (newTask.value === '') return false

  newTodo = {
    task: newTask.value,
    complete: false,
    important: false
  }

  todoArr.push(newTodo)

  displayTasks()
  newTask.value = ''
  localStorage.setItem('task', JSON.stringify(todoArr))
})

function displayTasks() {
  let displayTask = ''

  todoArr.forEach(function(task, index) {
    displayTask += `
    <li class="todoItem">
      <input type="checkbox" class="todoInput" id="todoInput" ${task.complete ? 'checked' : ''}>
      <label for="todoInput">${task.task}</label>
      <button class="delTask">&times</button>
    </li>
   `

   todoList.innerHTML = displayTask
  })
}


