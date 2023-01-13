import { Storage } from "./data";

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
    Storage.getProject(projectId).addTask(title, "today", false);
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
    refresh(projectId);
  };

  const handleDeleteTask = (button, refresh) => {
    const taskId = button.parentNode.getAttribute("data-id");
    const projectId = taskId.substring(0, taskId.indexOf("-"));
    Storage.getProject(projectId).removeTask(taskId);
    refresh(projectId);
  };

  const handleEditTask = (title) => {
    const taskId = title.parentNode.getAttribute("data-id");
    const projectId = taskId.substring(0, taskId.indexOf("-"));
    const task = Storage.getProject(projectId).getTask(taskId);
    if (!task.getDone()) {
      const div = document.createElement("div");
      const input = document.createElement("input");
      div.classList.add("title");
      div.appendChild(input);
      input.value = title.innerText;
      title.parentNode.replaceChild(div, title);
    }
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
    handleEditTask,
  };
})();

export { EventHandler };
