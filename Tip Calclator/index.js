const btnEl=document.getElementById("calculate");
const billInput=document.getElementById('bill')
const tipInput=document.getElementById('tip')
const toltalSpan=document.getElementById('toltal')

function calculateToltal(){
const billValue=billInput.value;
const tipValue=tipInput.value;
const totalValue=billValue * (1 +tipValue / 100);

toltalSpan.innerText=totalValue.toFixed(2);

}

btnEl.addEventListener("click", calculateToltal)