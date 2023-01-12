import "./task.css";
import Trash from "../../images/trash.png";

const TaskElement = (task) => {
  const container = document.createElement("div");
  container.classList.add("container");
  container.setAttribute("data-id", task.getId());

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const delBtn = new Image();
  delBtn.src = Trash;

  const title = document.createElement("span");
  title.classList.add("title");
  title.innerText = task.getTitle();

  if (task.getDone() === true) {
    checkbox.checked = true;
    title.classList.add("done");
    container.classList.add("done");
  }

  container.appendChild(checkbox);
  container.appendChild(title);
  container.appendChild(delBtn);
  return {
    container,
    checkbox,
    title,
    delBtn,
  };
};

export { TaskElement };
