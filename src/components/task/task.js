import "./task.css";
import Trash from "../../images/trash.png";
import Calendar from "../../images/calendar.png";

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
  //if task has date make calendar the date
  const date = task.getDate();
  let calendar;
  if (date) {
    calendar = document.createElement("span");
    calendar.innerText = date;
  } else {
    calendar = new Image();
    calendar.src = Calendar;
  }
  calendar.classList.add("calendar");
  if (task.getDone() === true) {
    checkbox.checked = true;
    title.classList.add("done");
    container.classList.add("done");
  }

  container.appendChild(checkbox);
  container.appendChild(title);
  container.appendChild(calendar);
  container.appendChild(delBtn);
  return {
    container,
    checkbox,
    title,
    delBtn,
    calendar,
  };
};

export { TaskElement };
