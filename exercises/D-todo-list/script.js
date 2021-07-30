function todoList(todos) {
  const content = document.getElementById("content");
  const ul = document.createElement("ul");
  content.appendChild(ul);
  ul.style.textAlign = " center";
  ul.style.marginTop = "100px";
  todos.map((element) => {
    const li = document.createElement("li"); // creating li element.
    const a = document.createElement("a"); // creating a tag.
    const att = document.createAttribute("href");
    att.value = "#";
    a.setAttributeNode(att);
    a.style.textDecoration = "none"; // removing tet decoration from a tags.
    li.innerText = element.todo; //adding values of todo from todos array.
    li.style.textDecoration = "none";
    li.style.listStyle = "none";
    li.style.marginTop = "50px";
    ul.appendChild(a).appendChild(li); // appendong li items inside ul.
    function lineThrough() {
      //created a seperate fucntion to use inside the event listener.
      if (li.style.textDecoration === "none") {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    }
    li.addEventListener("click", lineThrough);
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
