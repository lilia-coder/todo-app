let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const themeBtn = document.getElementById("toggle-theme");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="delete" onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    li.onclick = () => toggleTask(index);
    taskList.appendChild(li);
  });
}

function addTask(text) {
  if (text.trim() === "") return;
  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask(taskInput.value);
    taskInput.value = "";
  }
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Mode clair"
    : "🌙 Mode sombre";
});

renderTasks();

