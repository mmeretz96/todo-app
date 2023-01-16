import { Storage } from "./data";
import Check from "./images/check.png";

const EventHandler = (() => {
  const handleNewProjectBtn = (button, projectForm) => {
    projectForm.form.classList.remove("hidden");
    button.parentNode.removeChild(button);
  };

  const handleNewTaskBtn = (button, taskForm) => {
    taskForm.form.classList.remove("hidden");
    button.parentNode.removeChild(button);
  };

  const handleFormCancel = (e, list, form, button) => {
    e.preventDefault();
    list.appendChild(button);
    form.reset();
  };

  const handleProjectSubmit = (e, projectForm, refresh) => {
    e.preventDefault();
    const title = projectForm.titleInput.value;
    if (!title) return alert("Project name can't be empty");
    const newProject = Storage.addProject(title, []);
    refresh(newProject.getId());
  };

  const handleTaskSubmit = (e, taskForm, refresh) => {
    e.preventDefault();
    const title = taskForm.titleInput.value;
    if (!title) return alert("Task can't be empty");
    const projectId = e.target.parentNode.parentNode.getAttribute("data-id");
    Storage.getProject(projectId).addTask(title, undefined, false);
    refresh(projectId);
  };

  const handleProjectClick = (projectLi, loadProject) => {
    const projectId = projectLi.getAttribute("data-id");
    loadProject(projectId);
  };

  const handleTaskStateChange = (checkbox, refresh) => {
    const taskId = checkbox.parentNode.getAttribute("data-id");
    const projectId = taskId.substring(0, taskId.indexOf("-"));
    Storage.getProject(projectId).getTask(taskId).toggleDone();
    if (refresh) refresh(projectId);
  };

  const handleDeleteTask = (button, refresh) => {
    const taskId = button.parentNode.getAttribute("data-id");
    const projectId = taskId.substring(0, taskId.indexOf("-"));
    Storage.getProject(projectId).removeTask(taskId);
    if (refresh) refresh(projectId);
  };

  const handleCalendarClick = (calendar, refresh) => {
    const taskId = calendar.parentNode.getAttribute("data-id");
    const projectId = taskId.substring(0, taskId.indexOf("-"));
    const task = Storage.getProject(projectId).getTask(taskId);
    const datePicker = document.createElement("input");
    datePicker.setAttribute("type", "date");
    datePicker.addEventListener("change", () => {
      handleAddDateToTask(task, datePicker.value, refresh, projectId);
    });
    calendar.parentNode.replaceChild(datePicker, calendar);
  };

  const handleAddDateToTask = (task, date, refresh, projectId) => {
    task.setDate(date);
    refresh(projectId);
  };

  return {
    handleNewProjectBtn,
    handleNewTaskBtn,
    handleFormCancel,
    handleProjectClick,
    handleProjectSubmit,
    handleTaskSubmit,
    handleTaskStateChange,
    handleDeleteTask,
    handleCalendarClick,
  };
})();

export { EventHandler };
