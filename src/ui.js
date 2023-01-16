import { ProjectForm } from "./components/projectForm/projectForm";
import { TaskElement } from "./components/task/task";
import { TaskForm } from "./components/taskForm/taskForm";
import { EventHandler } from "./eventHandler";

const { Storage } = require("./data");

const body = document.body;

function init() {
  loadProjectList();
}

//HEADER
const header = document.createElement("div");
header.classList.add("header");
header.innerHTML = "<h1>TODO</h1>";
body.appendChild(header);

//MAIN CONTENT
const content = document.createElement("div");
content.classList.add("content");
body.appendChild(content);

//SIDEBAR
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");
content.appendChild(sidebar);

const todayHeading = document.createElement("h3");
todayHeading.innerText = "//TODAY";
sidebar.appendChild(todayHeading);

const weekHeading = document.createElement("h3");
weekHeading.innerText = "//THIS WEEK";
sidebar.appendChild(weekHeading);

const projectHeading = document.createElement("h3");
projectHeading.innerText = "///PROJECTS";
sidebar.appendChild(projectHeading);

const projectList = document.createElement("ul");
projectList.classList.add(".project-list");
sidebar.appendChild(projectList);

const projectForm = ProjectForm;
projectForm.form.classList.add("hidden");
sidebar.appendChild(projectForm.form);

const newProjectBtn = document.createElement("button");
newProjectBtn.innerText = "Add Project";
newProjectBtn.classList.add("new-project-btn");

//reloads the project list
function loadProjectList() {
  projectList.innerHTML = "";
  Storage.projects.forEach((project) => {
    if (project.getTitle() === "Today" || project.getTitle() === "Week") return;
    const li = document.createElement("li");
    li.setAttribute("data-id", project.getId());
    li.innerText = project.getTitle();
    const taskAmount = project.getOpenTasks().length;
    const span = document.createElement("span");
    span.innerText = taskAmount;
    projectList.appendChild(li);
    li.appendChild(span);
    li.addEventListener("click", (e) =>
      EventHandler.handleProjectClick(e.target, loadProject)
    );
  });
  projectList.appendChild(newProjectBtn);
}

//LOADED PROJECT

const projectContainer = document.createElement("div");
projectContainer.classList.add("project-container");
content.appendChild(projectContainer);

const projectH2 = document.createElement("h2");

const taskList = document.createElement("div");
taskList.classList.add("task-list");

const addTaskBtn = document.createElement("button");
addTaskBtn.classList.add("add-task-btn");
addTaskBtn.innerText = "Add Task";

const taskForm = TaskForm;
taskForm.form.classList.add("hidden");

function loadProject(id) {
  const project = Storage.getProject(id);
  projectContainer.innerHTML = "";

  projectH2.innerText = project.getTitle();
  projectContainer.appendChild(projectH2);

  loadTasks(project.tasks, project.getId());
  projectContainer.appendChild(taskList);
}

function loadTasks(tasks, projectId) {
  taskList.innerHTML = "";
  taskList.setAttribute("data-id", projectId);
  tasks.forEach((task) => {
    const taskElement = TaskElement(task);
    taskList.appendChild(taskElement.container);
    taskElement.checkbox.addEventListener("click", (e) => {
      EventHandler.handleTaskStateChange(e.target, refresh);
    });
    taskElement.delBtn.addEventListener("click", (e) => {
      EventHandler.handleDeleteTask(e.target, refresh);
    });
    taskElement.calendar.addEventListener("click", (e) => {
      EventHandler.handleCalendarClick(e.target, refresh);
    });
  });
  taskList.appendChild(addTaskBtn);
  taskList.appendChild(taskForm.form);
}

function refresh(projectId) {
  loadProject(projectId);
  const tasks = Storage.getProject(projectId).getTasks();
  loadTasks(tasks, projectId);
  loadProjectList();
  projectForm.reset();
  taskForm.reset();
}

function loadTasksByDate(title, range) {
  const tasks = Storage.getTasksWithinDayRange(range);
  projectContainer.innerHTML = "";

  projectH2.innerText = title;
  projectContainer.appendChild(projectH2);

  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = TaskElement(task);
    taskList.appendChild(taskElement.container);
    taskElement.checkbox.addEventListener("click", (e) => {
      EventHandler.handleTaskStateChange(e.target, null);
      loadTasksByDate(title, range);
      loadProjectList();
    });
    taskElement.delBtn.addEventListener("click", (e) => {
      EventHandler.handleDeleteTask(e.target, null);
      loadTasksByDate(title, range);
      loadProjectList();
    });
  });
  projectContainer.appendChild(taskList);
}

//EVENTS
todayHeading.addEventListener("click", (e) => {
  loadTasksByDate("Today", 1);
});
weekHeading.addEventListener("click", (e) => {
  loadTasksByDate("This Week", 8);
});

newProjectBtn.addEventListener("click", (e) => {
  EventHandler.handleNewProjectBtn(e.target, projectForm);
});

projectForm.cancelBtn.addEventListener("click", (e) => {
  EventHandler.handleFormCancel(e, projectList, projectForm, newProjectBtn);
});

projectForm.submitBtn.addEventListener("click", (e) =>
  EventHandler.handleProjectSubmit(e, projectForm, refresh)
);

addTaskBtn.addEventListener("click", (e) =>
  EventHandler.handleNewTaskBtn(e.target, taskForm)
);

taskForm.cancelBtn.addEventListener("click", (e) => {
  EventHandler.handleFormCancel(e, taskList, taskForm, addTaskBtn);
});

taskForm.submitBtn.addEventListener("click", (e) =>
  EventHandler.handleTaskSubmit(e, taskForm, refresh)
);

export { init, loadProject };
