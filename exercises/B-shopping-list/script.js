function shoppingList(arrayOfShopping) {
  let content = document.getElementById("content");
  let unOrderedlist = document.createElement("ul");

  arrayOfShopping.forEach((element) => {
    let list = document.createElement("li");
    content.appendChild(unOrderedlist).appendChild(list).innerText = element;
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
