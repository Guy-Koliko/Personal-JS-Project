//getting variables for the project
const forms = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const ulUpdate = document.querySelector('.collection');
const clearTask = document.querySelector('.clear-tasks')

// load all event listerners 

loadTaskEventListener();

//defining loadTaskEventListener function
function loadTaskEventListener() {

    //load the DOMContent
    document.addEventListener('DOMContentLoaded', getTaskObject);
    //working with the form item
    forms.addEventListener('submit', addTask);

    // Add clear task
    ulUpdate.addEventListener('click', removeTask);

    //clear task

    clearTask.addEventListener('click', clearAllTask);

    //filter task
    filter.addEventListener('keyup', filterTask);
}

//Load DOMContent
function getTaskObject() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(
        function (task) {
            const li = document.createElement('li');
            li.className = 'collection-item';
            //create a textnode and append to li
            li.appendChild(document.createTextNode(task));

            //create a new link
            const link = document.createElement('a');

            //add class name
            link.className = 'delete-item secondary-content';

            // add link icon
            link.innerHTML = '<i class="fa fa-remove"></i>'

            //append link to li

            li.appendChild(link);
            //append the li to the ul
            ulUpdate.appendChild(li);


        }
    );
}
//Creating the addTask Function
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add Task');

    }
    //create an li item

    const li = document.createElement('li');
    li.className = 'collection-item';
    //create a textnode and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //create a new link
    const link = document.createElement('a');

    //add class name
    link.className = 'delete-item secondary-content';

    // add link icon
    link.innerHTML = '<i class="fa fa-remove"></i>'

    //append link to li

    li.appendChild(link);



    //append the li to the ul
    ulUpdate.appendChild(li);

    //store item into localstorage

    storeTasktoLocalStorage(taskInput.value);

    //clear the input
    taskInput.value = '';

    e.preventDefault();
}
//Function to store task to localstorage 
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
//Function for removing task

function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure!!')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    removeItemFromLocalStorage(e.target.parentElement.parentElement);
}

function removeItemFromLocalStorage(taskRemove) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(
        function (task, index) {
            if (taskRemove.textContent === task) {
                tasks.splice(index, 1);
            }
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    );
}

// clear all task

function clearAllTask() {
    while (ulUpdate.firstChild) {
        ulUpdate.removeChild(ulUpdate.firstChild);
    }
    clearAllStorageTask();
}

//clear all storage task
function clearAllStorageTask() {
    localStorage.clear();
}

//filter task

function filterTask(e) {
    const text = e.target.value;
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