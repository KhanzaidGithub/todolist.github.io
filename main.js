document.addEventListener('DOMContentLoaded', function () {
    const addbtn = document.getElementById('addbtn');
    const taskList = document.getElementById('taskList');
    let tasks = [];

    // Function to add a task
    function addTask() {
        const input = document.getElementById('input'); // Get the input element
        const inputvalue = input.value.trim();

        if (inputvalue !== '') {
            tasks.push(inputvalue);
            input.value = ''; // Clear input field


        } else {
            alert("Please enter a valid task.");
        }
    }
    displayTasks();

    // Function to display tasks in the list
    function displayTasks() {
        taskList.innerHTML = ''; // Clear previous list
        const li = document.createElement('li');
        li.textContent = inputvalue;
        taskList.appendChild(li);
    }

    // Event listener for Enter key press
    document.getElementById('input').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Event listener for Add button click
    addbtn.addEventListener('click', addTask);
});
