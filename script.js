const input = document.querySelector(".input");
const body = document.querySelector("body");

function Execute() {
  let value = input.value;
  if (isValidColor(value)) {
    body.style.background = value;
  } else {
    alert(" ❌ Enterd text is not valid color name ❗");
  }
  // body.style.background = value;
}

function isValidColor(strColor) {
  const s = new Option().style;
  console.log(s);
  s.color = strColor;

  return s.color !== "";
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.id);
    body.style.background = e.target.id;
  });
});
