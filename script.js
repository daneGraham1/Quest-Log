
// Adds new task from add task input
function newElement() {
    const inputValue = document.getElementById("taskInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        const tasksFrame = document.querySelector('.tasksFrame');
        const newTask = document.createElement('div');
        newTask.classList.add('taskContainer');
        
        const elements = document.getElementsByClassName('taskContainer');
        const count = elements.length;

        if (count > 0) {
            newTask.setAttribute('id', count+1);
        } else {
            newTask.setAttribute('id', '1');
        }

        newTask.innerHTML = '<h3>' + inputValue + '</h3>';
        tasksFrame.appendChild(newTask);
    }
    
}



function expandTasks() {
    const taskContainers = document.getElementsByClassName('taskContainer');

    for (let i = 0; i < taskContainers.length; i++) {
        taskContainers[i].onclick = function () {
            const clickedId = taskContainers[i].id;
            for (let j = 0; j < taskContainers.length; j++) {
                if (taskContainers[j].id !== clickedId) {
                    taskContainers[j].style.display = 'none';
                }
            }
        };
    }


}