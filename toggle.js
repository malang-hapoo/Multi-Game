const button = document.querySelector(".button");
const element = document.querySelector(".element");

button.addEventListener('click', function () {
    element.classList.toggle('toggle');
});