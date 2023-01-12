import "./projectForm.css";

const ProjectForm = (() => {
  const form = document.createElement("form");

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Project Title");
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

export { ProjectForm };
