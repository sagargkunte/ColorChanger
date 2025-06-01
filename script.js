const input = document.querySelector('.input');
const body = document.querySelector('body');

function Execute() {
    let value = input.value;
    body.style.background = value;
}