import "./taskForm.css";
const TaskForm = (() => {
  const form = document.createElement("form");
  form.classList.add("taskForm");

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Task");
  form.appendChild(titleInput);

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("success");
  submitBtn.innerText = "Ok";
  form.appendChild(submitBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("danger");
  cancelBtn.innerText = "Cancel";
  form.appendChild(cancelBtn);

  function reset() {
    titleInput.value = "";
    form.classList.add("hidden");
  }
  return {
    form,
    titleInput,
    submitBtn,
    cancelBtn,
    reset,
  };
})();

export { TaskForm };
