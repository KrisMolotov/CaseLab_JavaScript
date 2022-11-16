let users = []
let tasks = []

Promise.all([
    loadUsers(),
    loadTasks()
    ]).then((result) => {
        let [loadedUsers, loadedTasks] = result
        users = loadedUsers
        tasks = loadedTasks
        updateDOMTasks()
        updateDOMUsers()
})

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault()
    if(document.querySelector('#user-todo').value === 'select user') return

    let newTaskTitle = document.querySelector('#new-todo').value
    let newTaskUserId = +document.querySelector('#user-todo').value

    sendTask({
        userId: newTaskUserId,
        title: newTaskTitle,
        completed: false
    }).then((newTask) => {
        if(newTask === null) return
        tasks.push(newTask)
        updateDOMTasks()
        document.querySelector('#new-todo').value = ""
        document.querySelector('#user-todo').value = 'select user'
    })
})

function updateDOMUsers() {
    let user_todo = document.querySelector("#user-todo")
    user_todo.innerHTML = "<option disabled selected>select user</option>"

    for(let i = 0; i < users.length; ++i) {
        let currUser = users[i]

        let option = document.createElement('option')
        option.innerText = currUser.name
        option.value = currUser.id

        user_todo.appendChild(option)
    }
}

function updateDOMTasks() {
    let todo_list = document.querySelector("#todo-list")
    todo_list.innerHTML = ""

    for(let i = tasks.length - 1; i >= 0; --i) {
        let currTask = tasks[i]

        let taskLi = document.createElement('li')
        taskLi.className = "todo-item"

        let userName = users.find((user) => {return user.id === currTask.userId}).name
        taskLi.innerHTML = `<input type='checkbox' ${currTask.completed ? 'checked' : ''}> <div>${currTask.title}</div> <div style='font-style: italic'> by </div> <div style='font-weight: bold'>${userName}</div> <div class='close'>x</div>`

        taskLi.querySelector("input").addEventListener('click', (e) => {
            e.preventDefault()
            updateTaskStatus(currTask.id, e.target.checked).then((updatedTask) => {
                tasks.find((task) => task.id === currTask.id).completed = updatedTask.completed
                updateDOMTasks()
            })
        })

        taskLi.querySelector(".close").addEventListener('click', () => {
            deleteTask().then((isDeleted) => {
                if(isDeleted) {
                    tasks = tasks.filter((task) => task.id !== currTask.id)
                    updateDOMTasks()
                }
            })
        })

        todo_list.appendChild(taskLi)
    }
}

async function loadUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        return await response.json()
    } catch (e){
        alert(e.message)
    }
}

async function loadTasks() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos')
        return await response.json()
    } catch (e){
        alert(e.message)
    }
}

async function sendTask(task) {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        })
        return await response.json()
    } catch (e){
        alert(e.message)
    }
}

async function updateTaskStatus(taskId, isCompleted) {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/${taskId}', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({completed: isCompleted})
        })
        return await response.json()
    } catch (e){
        alert(e.message)
    }
}

async function deleteTask() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/${taskId}', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })

        return response.ok
    } catch (e){
        alert(e.message)
    }
}
