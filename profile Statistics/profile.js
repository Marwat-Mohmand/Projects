

const counterEl = document.querySelectorAll(".counter");

counterEl.forEach(counterEl => {
    counterEl.innerText = "0";
    
incrementCounter();

function incrementCounter() {
let currentNum = +counterEl.innerText; // Convert to number with +
const dataCeil = +counterEl.getAttribute("data-ceil"); // Convert to number
const increment = dataCeil / 15;

currentNum = Math.ceil(currentNum + increment);

if (currentNum < dataCeil) {
    counterEl.innerText = currentNum;
    setTimeout(incrementCounter, 60);
} else {
    counterEl.innerText = dataCeil;
}
}
});