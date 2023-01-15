import { TaskElement } from "./components/task/task";

const Storage = (() => {
  let nextId = 0;
  const projects = [];
  const addProject = (title, tasks) => {
    const newProject = Project(nextId, title, tasks);
    projects.push(newProject);
    nextId++;
    return newProject;
  };
  const removeProject = (id) => {
    const index = projects.findIndex((project) => project.id === id);
    if (index !== -1) {
      projects.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

  const getProject = (id) => {
    let found = -1;
    projects.forEach((project) => {
      if (project.getId() === id) {
        found = project;
      }
    });
    return found;
  };

  const getAllTasks = () => {
    const allTasks = [];
    projects.forEach((project) => {
      project.getTasks().forEach((task) => {
        allTasks.push(task);
      });
    });
    return allTasks;
  };

  const getProjects = () => projects;

  return {
    projects,
    getProjects,
    addProject,
    removeProject,
    getProject,
    getAllTasks,
  };
})();

const Project = (id, title, tasks) => {
  let nextId = 0;
  const getId = () => "" + id;
  const getTitle = () => title;
  const setTitle = (newTitle) => (title = newTitle);
  const getTasks = () => tasks;
  const addTask = (title, dueDate, priority, done) => {
    const newTask = Task(`${id}-${nextId}`, title, dueDate, priority, done);
    tasks.push(newTask);
    nextId++;
  };
  const resetTasks = () => {
    tasks = [];
  };
  const addExistingTask = (newTask) => {
    if (getTask(newTask.getId()) != -1) {
      return;
    }
    tasks.push(newTask);
  };
  const getOpenTasks = () => {
    const list = [];
    tasks.forEach((task) => {
      if (!task.getDone()) list.push(task);
    });

    return list;
  };
  const getTask = (id) => {
    let found = -1;
    tasks.forEach((task) => {
      if (task.getId() === id) {
        found = task;
      }
    });
    return found;
  };
  const removeTask = (id) => {
    const index = tasks.findIndex((task) => task.getId() === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };
  return {
    tasks,
    getTasks,
    getId,
    getTitle,
    setTitle,
    addTask,
    removeTask,
    getTask,
    getOpenTasks,
    addExistingTask,
    resetTasks,
  };
};

const Task = (id, title, dueDate = undefined, done) => {
  const getId = () => id;
  const getTitle = () => title;
  const setDate = (date) => (dueDate = date);
  const getDate = () => dueDate;
  const toggleDone = () => {
    if (done) {
      done = false;
    } else {
      done = true;
    }
  };
  const getDone = () => done;
  return {
    getId,
    getTitle,
    toggleDone,
    getDone,
    setDate,
    getDate,
  };
};

export { Storage, Project, Task };
