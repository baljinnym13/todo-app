function myFunction() {
  let element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}
// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");
const trashbtn = document.getElementById("trashbtn");
const pencilbtn = document.getElementById("pencilbtn");
const modechange = document.getElementById("modechange");
let taskChangeIndex = -1;

// VARIABLES FOR TASK
const tasks = [
  // {
  //   name: "Task Two",
  //   status: "INPROGRESS",
  // },
  // {
  //   name: "Task Three",
  //   status: "BLOCKED",
  // },
];

function zurah() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 rounded p-2 ${getStatusColor(
      tasks[i].status
    )} ">
    <span>${tasks[i].name}</span>
    <div>
        <button class="btn" onclick="modeChange(${i})" id="pencilbtn"data-bs-toggle="modal"
          data-bs-target="#taskModal">
        <i class="bi bi-pencil"></i>
        </button>
        <button class="btn" id="trashbtn" onclick="deletetask(${i})">
        <i class="bi bi-trash"></i>
        </button>
    </div>
    </div>
 `;

    console.log("status", getStatusColor(tasks[i].status));
    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}
// task[i].status
function getStatusColor(status) {
  switch (status) {
    case "TODO": {
      return "border-light";
    }
    case "INPROGRESS": {
      return "border-warning";
    }
    case "DONE": {
      return "border-success";
    }
    case "BLOCKED": {
      return "border-danger";
    }
  }
}

saveBtn.addEventListener("click", function () {
  const newTask = {
    name: taskInput.value,
    status: taskStatus.value,
  };
  tasks.push(newTask);
  zurah();
  console.log("TASKS", tasks);
});

zurah();
const deletetask = (taskindex) => {
  tasks.splice(taskindex, 1);
  zurah();
};
function modeChange(changeIndex) {
  taskInput.value = tasks[changeIndex].name;
  taskStatus.value = tasks[changeIndex].status;
  taskChangeIndex = changeIndex;
}

modechange.addEventListener("click", () => {
  tasks[taskChangeIndex].name = taskInput.value;
  tasks[taskChangeIndex].status = taskStatus.value;
  taskInput.value = "";
  taskStatus.value = "TODO";
  zurah();
});
