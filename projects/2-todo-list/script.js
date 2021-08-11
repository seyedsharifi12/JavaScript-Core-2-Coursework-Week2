function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.textContent = "";
  todos.forEach((element) => {
    const iTrash = document.createElement("i");
    const iTick = document.createElement("i");
    const listOfTodos = document.createElement("li");
    const span = document.createElement("span");
    span.classList = "badge bg-primary rounded-pill";

    iTick.classList = "fa fa-check";
    iTick.setAttribute("area-hidden", "true");

    iTrash.classList = "fa fa-trash";
    iTrash.setAttribute("area-hidden", "true");

    listOfTodos.classList =
      "list-group-item d-flex justify-content-between  align-items-center ";
    listOfTodos.innerText = element.task;
    if (element.completed) {
      listOfTodos.style.textDecoration = "line-through";
    }

    list.appendChild(listOfTodos);
    listOfTodos.appendChild(span);
    span.appendChild(iTick);
    span.appendChild(iTrash);

    iTick.addEventListener("click", () => {
      element.completed = !element.completed;
      populateTodoList(todos);
    });

    iTrash.addEventListener("click", () => {
      listOfTodos.remove();
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: true },
];
populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  const input = document.getElementById("todoInput");
  const newItem = input.value;
  todos.push({ task: newItem, completed: false });
  input.value = "";
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
