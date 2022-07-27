const submit = document.querySelector(".submit");
const second = document.querySelector(".second");
const first = document.querySelector(".first");
submit.addEventListener("click", () => {
  second.classList.toggle("active");

  first.classList.toggle("disable");
  console.log(second);
});
const textPlaceholder = document.querySelector(".you-selected");
