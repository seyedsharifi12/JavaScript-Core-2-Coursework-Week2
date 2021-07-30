const orangeButton = document.getElementById("orangeBtn");
const greenButton = document.getElementById("greenBtn");
const blueButton = document.querySelector("#blueBtn");
const jumbotron = document.querySelector(".jumbotron");
const donateBikeButton = document.querySelector(".btn.btn-primary.btn-lrg");
const volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");
const submitButton = document.querySelector("form button");

blueButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#588fbd`;
  donateBikeButton.style.backgroundColor = `#ffa555`;
  volunteerButton.style.backgroundColor = "black";
  volunteerButton.style.color = "white";
});

orangeButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#f0ad4e`;
  donateBikeButton.style.backgroundColor = `#5751fd`;
  volunteerButton.style.backgroundColor = `#31b0d5`;
  volunteerButton.style.color = "white";
});

greenButton.addEventListener("click", function () {
  jumbotron.style.backgroundColor = `#87ca8a`;
  donateBikeButton.style.backgroundColor = `black`;
  volunteerButton.style.backgroundColor = `black`;
  volunteerButton.style.color = "white";
});

const email = document.getElementById("exampleInputEmail1");
console.log(email);
const yourName = document.getElementById("example-text-input");
console.log(yourName);
const textArea = document.getElementById("exampleTextarea");
console.log(textArea);
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!email.value.includes("@") || email.value.length === 0) {
    email.style.backgroundColor = "red";
  } else {
    email.style.backgroundColor = "white";
  }
  if (yourName.value.length === 0) {
    yourName.style.backgroundColor = "red";
  } else {
    yourName.style.backgroundColor = "white";
  }
  if (textArea.value.length === 0) {
    textArea.style.backgroundColor = "red";
  } else {
    textArea.style.backgroundColor = "white";
  }
  if (
    email.value.includes("@") &&
    email.value.length > 0 &&
    yourName.value.length > 0 &&
    textArea.value.length > 0
  ) {
    alert("Thank you for filling out the form");
    email.value = "";
    yourName.value = "";
    textArea.value = "";
  }
});
