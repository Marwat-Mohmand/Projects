const hourEl=document.querySelector(".hour");
const minuteEl=document.querySelector(".minute");
const secoundEl=document.querySelector(".secound");


function updateClock(){
    const currentDate=new Date();
setTimeout(updateClock, 100);
const hour=currentDate.getHours();
const minute=currentDate.getMinutes();
const secound=currentDate.getSeconds();
const hourDeg=(hour /12) * 360;
hourEl.style.transform=`rotate(${hourDeg}deg)`;
const minuteDeg=(minute /60) * 360;
minuteEl.style.transform=`rotate(${minuteDeg}deg)`;
const secoundDeg=(secound /60) * 360;
secoundEl.style.transform=`rotate(${secoundDeg}deg)`;
}
updateClock();