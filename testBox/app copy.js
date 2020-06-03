// Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    //Load DOM content
    document.addEventListener('DOMContentLoaded', getTask);
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task
    taskList.addEventListener('click', removeTask);
    //Clear task
    clearBtn.addEventListener('click', clearTask);
    //Filter task
    filter.addEventListener('keyup', filterTask);

}

//Load the DOMContent
function getTask() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        // create an li element 
        const li = document.createElement('li');
        li.className = 'collection-item';
        // create text node and append to li
        li.appendChild(document.createTextNode(task));
        //create new link element

        const link = document.createElement('a');

        // Add class

        link.className = 'delete-item secondary-content';
        //Add  icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link)
        // Append the li to the ul

        // Applend the ul
        taskList.appendChild(li);
    })

}
// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // create an li element 
    const li = document.createElement('li');
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element

    const link = document.createElement('a');

    // Add class

    link.className = 'delete-item secondary-content';
    //Add  icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link)
    // Append the li to the ul

    // Applend the ul
    taskList.appendChild(li);

    //Add task to local storage
    storeTasktoLocalStorage(taskInput.value)

    // Clear the input 
    taskList.value = '';
    e.preventDefault();
}

//Add task to local storage

function storeTasktoLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove task function

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();
        }
    }


    removeItemFromLocalStorage(e.target.parentElement.parentElement)

}

//remove task from local storage 
function removeItemFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));
    });
}
//Clear task
function clearTask() {
    // taskList.innerHTML = '';
    // faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTaskFromLocalStorage();

}

//clearTask from local storage
function clearTaskFromLocalStorage() {
    localStorage.clear();
}

//Filter task
function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const item = task.firstChild.textContent;
            if (item.toLocaleLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );


}