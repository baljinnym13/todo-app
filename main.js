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
    <div class="d-flex justify-content-between align-items-center border border-1 rounded p-2">
    <span>${tasks[i].name}</span>
    <div>
        <button class="btn" id="pencilbtn"data-bs-toggle="modal"
          data-bs-target="#taskModal">
        <i class="bi bi-pencil"></i>
        </button>
        <button class="btn" id="trashbtn">
        <i class="bi bi-trash"></i>
        </button>
    </div>
    </div>
 `;

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
trashbtn.addEventListener("click", () => {
  tasks.slice(1);
  // Таск кардуудыг дахин үзүүлэх
  zurah();
});
// const trashButtons = document.querySelectorAll("trashbtn");
// trashbtn.forEach((button, index) => {
// button.addEventListener("click", () => {
// Таскыг массиваас устгах
// tasks.splice(index, 1);
// Таск кардуудыг дахин үзүүлэх
// zurah();
// });
// });
