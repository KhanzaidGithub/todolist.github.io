document.addEventListener('DOMContentLoaded', function () {
    const addbtn = document.getElementById('addbtn');
    const taskList = document.getElementById('taskList');
    let tasks = [];

    function addTask() {
        const input = document.getElementById('input'); 
        const inputvalue = input.value.trim();

        if (inputvalue !== '') {
            tasks.push(inputvalue);
            input.value = ''; 
            displayTasks(); 
        } else {
            alert("Please enter a valid task.");
        }
    }
    function displayTasks() {
        taskList.innerHTML = ''; 
        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    document.getElementById('input').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    addbtn.addEventListener('click', addTask);
});
