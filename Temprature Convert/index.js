const celsuisEl=document.getElementById("celsisus");
const farhrehitEl=document.getElementById("fahrenheit");
const kelvinEl=document.getElementById("kelvin");


function computeTemp(event){

const currentValue= +event.target.value;

switch (event.target.name) {
    case "celsisus":
        kelvinEl.value=(currentValue + 273.32).toFixed(2);
        farhrehitEl.value=(currentValue * 1.8 + 32).toFixed(2);
        break;
   case "fahrenheit":
   celsuisEl.value=((currentValue - 32) / 1.8).toFixed(2);
kelvinEl.value=((currentValue-32) / 1.8 + 273.32).toFixed(2);
break;
    case "kelvin":
        celsuisEl.value=(currentValue - 273.32)
        farhrehitEl.value=((currentValue - 273.32) * 1.8 + 32).toFixed(2);
        break;
    default:
        break;
}


}