let addTask = document.querySelector('.addTask')
let taskText = document.querySelector('.newTask')
let taskList = document.querySelector('.todoList')
let taskArr = []

addTask.addEventListener('click', function() {
  if(taskText.value === '') {
    return false
  }

  let newTask = {
    task: taskText.value,
    complete: false
  }

  taskArr.push(newTask)

  let item = document.createElement('li')
      item.classList.add('todoItem')
      item.innerHTML = `<input class="todoInput" type="checkbox" id="todoInput">
                        <label for="todoInput">${newTask.task}</label>
                        <button class="delTask">&times</button>`

  taskArr.forEach(function() {
    taskList.appendChild(item)
  })

  taskText.value = ''

  // console.log(taskArr);
})

