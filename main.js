let inputToDo = document.querySelector("#input-todo");
let addBtn = document.querySelector(".add-btn");
let resultAlert = document.querySelector(".result-alert");
let alertToDoRemove = document.querySelector(".alert-todo-remove");
let alertToDoCheck = document.querySelector(".alert-todo-check");
let todoListItem = document.querySelector(".todo-list");
//   Add todo
addBtn.addEventListener("click", () => {
  if (inputToDo.value === "") {
    let fillAlert = setTimeout(() => {
      resultAlert.innerHTML = "Fill A Correct Value In The Gap !";
    }, 100);
    setTimeout(() => {
      resultAlert.innerHTML = "";
    }, 1100);
  } else {
    let createLiTag = document.createElement("li");
    createLiTag.innerHTML = `
    <span>${inputToDo.value}</span>
    <span class='event-btn'><i class="bi bi-check check-btn"></i><i class="bi bi-trash remove-btn"></i></span>
    `;

    //   Append to ul
    todoListItem.appendChild(createLiTag);
    // check to do
    let checkToDo = document.querySelectorAll(".check-btn");
    checkToDo.forEach((check) => {
      check.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
        setTimeout(() => {
          alertToDoCheck.style.display = "block";
        }, 100);
        setTimeout(() => {
          alertToDoCheck.style.display = "none";
        }, 900);
      });
    });
    //   Remove to do
    let removeToDo = document.querySelectorAll(".remove-btn");
    removeToDo.forEach((remove) => {
      remove.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
        setTimeout(() => {
          alertToDoRemove.style.display = "block";
        }, 100);
        setTimeout(() => {
          alertToDoRemove.style.display = "none";
        }, 900);
      });
    });
  }
  inputToDo.value = ""; //remove the input value to fill again
  inputToDo.focus(); //focus to my input
});
