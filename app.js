const submit = document.querySelector(".submit");
const second = document.querySelector(".second");
const first = document.querySelector(".first");

const element = document.querySelector(".numbers");

const elementList = element.addEventListener("click", function handleClick() {
  element.classList.add("number");
  if (element.classList.contains("number")) {
    submit.addEventListener("click", () => {
      second.classList.toggle("active");
      first.classList.toggle("disable");
    });
  }
  // else {
  //   submit.addEventListener("click", () => {
  //     alert("choose rating");
  //   });
  // }
});

submit.addEventListener("click", () => {
  if (element.classList.contains("number")) {
    submit.addEventListener("click", () => {
      second.classList.toggle("active");
      first.classList.toggle("disable");
    });
  } else {
    alert("choose rating");
    location.reload();
  }
});

const textPlaceholder = document.querySelector(".you-selected");
