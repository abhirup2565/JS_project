//Getting reference to key dom element 
const taskHolder = document.getElementById("task-holder");
const addBtn = document.getElementById("add-task-button");
const inputComponent = document.getElementById("input-component");

/** */
addBtn.addEventListener("click", () => {
  if (inputComponent.value.length === 0) 
    {
        alert("Value cannot be empty");
        return;
    }
  addTask(inputComponent.value);
  inputComponent.value = "";
});

/**adds task and generate functional delete button for that task */
const addTask = (inputItem) =>
{
    const taskItem = document.createElement('div');
    taskItem.textContent = inputItem;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    taskItem.appendChild(deleteBtn);
    taskHolder.appendChild(taskItem);

    deleteBtn.addEventListener("click", () => {
    console.log("clicked");
    taskHolder.removeChild(taskItem);
    });
}