const body = document.querySelector('body');
const changeBtn = document.querySelector("#btn");
const displayVal = document.querySelector('#displayHex');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

changeBtn.addEventListener("click", function() {
    generateHex();
});

function generateHex() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    displayVal.innerHTML = color;
    body.style.background = color;
}