// Hide other divs that have class taskContainer
document.addEventListener('DOMContentLoaded', function() {
    const tasksFrame = document.querySelector('.tasksFrame');

    tasksFrame.addEventListener('click', function(event) {

        if (event.target.classList.contains('expanded')) {
            document.querySelectorAll('.taskContainer').forEach(container => {
                container.style.display = '';
                container.classList.remove('expanded');
            })
        }

        else {
        if (event.target.classList.contains('taskContainer')) {
            const clickedId = event.target.id;

            document.querySelectorAll('.taskContainer').forEach(container => {
                if (container.id !== clickedId) {
                    container.style.display = 'none';
                } if (container.id == clickedId) {
                    container.classList.add('expanded');
                }
            });
        }

            // console.log(`Comment logged: The div with ID ${clickedId} was clicked!`);      
        }
    });
});



// Function to add a new element
function newElement() {
    const inputValue = document.getElementById("taskInput").value;
    if (!inputValue) {
        alert("You must write something!");
    } else {
        const tasksFrame = document.querySelector('.tasksFrame');
        const newTask = document.createElement('div');
        newTask.classList.add('taskContainer');

        const count = document.querySelectorAll('.taskContainer').length;
        newTask.setAttribute('id', count + 1);

        newTask.innerHTML = `<h3>${inputValue}</h3>`;
        tasksFrame.appendChild(newTask);

        // Attach the event listener to the newly created element
        newTask.addEventListener('click', function(event) {
            const clickedId = event.currentTarget.id;

            document.querySelectorAll('.taskContainer').forEach(container => {
                if (container.id !== clickedId) {
                    container.style.display = 'none';
                } if (container.id == clickedId) {
                    container.classList.add('expanded');
                }
            });

            // console.log(`Comment logged: The div with ID ${clickedId} was clicked!`);
        });
    }
}
