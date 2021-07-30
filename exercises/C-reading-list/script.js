const h1 = document.createElement("h1");
h1.innerText = "Book List";
let content = document.getElementById("content");
document.body.insertBefore(h1, content);
h1.style.textAlign = "center";

function readingList(books) {
  let ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.justifyContent = "space-between";
  books.forEach((element) => {
    let li = document.createElement("li");
    li.style.listStyle = "none";
    let img = document.createElement("img");
    img.style.height = "300px";
    img.style.width = "200px";
    let p = document.createElement("p");
    p.innerText = `${element.title} - ${element.author}`;
    content.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(img);
    if (element.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
    if (element.title === "The Design of Everyday Things") {
      img.src =
        "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
    } else if (element.title === "The Most Human Human") {
      img.src =
        "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg";
    } else {
      img.src =
        "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX396_BO1,204,203,200_.jpg";
    }
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
