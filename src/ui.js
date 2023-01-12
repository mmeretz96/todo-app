import { ProjectForm } from "./components/projectForm/projectForm";
import { TaskElement } from "./components/task/task";
import { TaskForm } from "./components/taskForm/taskForm";

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
    const li = document.createElement("li");
    li.setAttribute("data-id", project.getId());
    li.innerText = project.getTitle();
    const taskAmount = project.getOpenTasks().length;
    const span = document.createElement("span");
    span.innerText = taskAmount;
    projectList.appendChild(li);
    li.appendChild(span);
    li.addEventListener("click", (e) => handleProjectClick(e.target));
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

//loads a project
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
      handleCheckboxClick(e.target);
      loadTasks(tasks, projectId);
    });
    taskElement.delBtn.addEventListener("click", (e) => {
      handleDeleteBtn(e.target);
      loadTasks(tasks, projectId);
    });
  });
  taskList.appendChild(addTaskBtn);
  taskList.appendChild(taskForm.form);
}

//EVENTS

newProjectBtn.addEventListener("click", (e) => {
  projectForm.form.classList.remove("hidden");
  e.target.parentNode.removeChild(e.target);
});

function handleProjectClick(projectLi) {
  const projectId = projectLi.getAttribute("data-id");
  loadProject(projectId);
}
projectForm.cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectList.appendChild(newProjectBtn);
  projectForm.reset();
});

projectForm.submitBtn.addEventListener("click", (e) =>
  handleSubmitProjectBtn(e)
);

function handleSubmitProjectBtn(e) {
  e.preventDefault();
  const title = projectForm.titleInput.value;
  if (!title) return alert("Project name can't be empty");
  const newProject = Storage.addProject(title, []);
  loadProject(newProject.getId());
  loadProjectList();
  projectForm.reset();
}

function handleCheckboxClick(checkbox) {
  const taskId = checkbox.parentNode.getAttribute("data-id");
  const projectId = taskId.substring(0, taskId.indexOf("-"));
  Storage.getProject(projectId).getTask(taskId).toggleDone();
  loadProjectList();
}

addTaskBtn.addEventListener("click", (e) => handleAddTask(e.target));

function handleAddTask(button) {
  taskForm.form.classList.remove("hidden");
  button.parentNode.removeChild(button);
}

taskForm.cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  taskList.appendChild(addTaskBtn);
  taskForm.reset();
});

taskForm.submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = taskForm.titleInput.value;
  if (!title) return alert("Task can't be empty");
  const projectId = e.target.parentNode.parentNode.getAttribute("data-id");
  const project = Storage.getProject(projectId);
  project.addTask(title, "today", false);
  loadProject(projectId);
  taskForm.reset();
  loadProjectList();
});

function handleDeleteBtn(button) {
  const taskId = button.parentNode.getAttribute("data-id");
  const projectId = taskId.substring(0, taskId.indexOf("-"));
  Storage.getProject(projectId).removeTask(taskId);
  loadProjectList();
}

export { init, loadProject };
