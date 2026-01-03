let button = document.querySelector("#taskButton");
let input = document.querySelector("#TaskVal");

button.addEventListener("click", ButtonCallback);

function ButtonCallback() {
  console.log(input.value);
}

// ----
function addTask(task) {
  const tasks = retrieveStorage();

  tasks.push({
    id: Math.floor(Math.random() * 9999).toString(),
    task,
    complete: false,
  });

  saveStorage(tasks);
}

function completeTask(id) {
  const tasks = retrieveStorage();

  const taskIndex = tasks.findIndex((i) => i.id === id);

  if (!taskIndex) return;

  tasks[taskIndex].complete = !tasks[taskIndex].complete;

  saveStorage(tasks);
}

function retrieveStorage() {
  let items;

  try {
    items = JSON.parse(localStorage.getItem("tasks"));
  } catch (err) {
    items = [];
  }

  if (!items) {
    items = [];
  }

  return items;
}

function saveStorage(items) {
  localStorage.setItem("tasks", JSON.stringify(items));
}
