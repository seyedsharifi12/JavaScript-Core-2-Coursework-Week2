function listOfColours(colours) {
  const content = document.getElementById("content");
  const select = document.createElement("select");
  const p = document.createElement("p");
  content.appendChild(select);
  document.body.appendChild(p);

  colours.forEach((element) => {
    const option = document.createElement("option");
    option.innerText = element;
    p.innerText = "You have selected: " + select.value;
    p.style.color = select.value;

    function changeColorAndPara() {
      p.style.color = select.value;
      p.innerText = "You have selected: " + select.value;
    }
    select.appendChild(option);
    select.addEventListener("change", changeColorAndPara);
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
