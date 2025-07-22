const containerEl=document.querySelector
(".container"
);
const leftEl=document.querySelector(".left");
const righttEl=document.querySelector(".right");

leftEl.addEventListener("mouseenter",()=>{
    containerEl.classList.add("active-left");
}
 );

 leftEl.addEventListener("mouseleave",()=>{
    containerEl.classList.remove(".active-left");
 });

 righttEl.addEventListener("mouseenter",()=>{
    containerEl.classList.add("active-right")
 })
 righttEl.addEventListener("mouseleave",()=>{
    containerEl.classList.remove("active-right")
 })