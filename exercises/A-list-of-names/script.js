function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.map((element) => {
    h1 = document.createElement("h1");
    h1.innerText = element.name;
    content.appendChild(h1);

    h2 = document.createElement("h2");
    h2.innerText = element.job;
    content.appendChild(h2);
    // content.appendChild(document.createElement("h1")).innerText = element.name;
    // content.appendChild(document.createElement("h2")).innerText = element.job;
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
