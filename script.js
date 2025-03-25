// Simple To-Do App
const tasks = [];

function addTask(text) {
    if (text.trim() === "") return;

    tasks.push(text);
    displayTasks();
}

function displayTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });
}

// Ajoute une tâche quand on appuie sur Entrée
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const input = document.getElementById("task-input");
        addTask(input.value);
        input.value = "";
    }
});
