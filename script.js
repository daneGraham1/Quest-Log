

function newElement() {
    var inputValue = document.getElementById("input").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var taskContainer = document.querySelector('.taskContainer');
        var newTask = document.createElement('div');
        newTask.innerHTML = '<h3>' + inputValue + '</h3>';
        taskContainer.appendChild(newTask);
    }
    document.getElementById("input").value = "";
}