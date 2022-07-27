const finalNumber = document.querySelector(".number");
const showSecond = document.querySelector(".second");
const hideFirst = document.querySelector(".first");
const number = document.querySelectorAll(".num");
const submit = document.querySelectorAll(".submit");

let firstButtonClicked = false;
let secondButtonClicked = false;

function Handler() {
  firstButtonClicked = false;
  secondButtonClicked = false;
  finalNumber.innerHTML = "1";
  showSecond.style.display = "block";
  hideFirst.style.display = "none";
  console.log(finalNumber);
}

number.forEach((num) => {
  num.addEventListener("click", function handleClick(event) {
    firstButtonClicked = true;
    if (firstButtonClicked && secondButtonClicked) Handler();
  });
});

submit.forEach((submit) => {
  submit.addEventListener("click", function handleClick(event) {
    secondButtonClicked = true;
    if (firstButtonClicked && secondButtonClicked) Handler();
  });
});
