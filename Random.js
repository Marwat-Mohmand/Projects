const imageContainerEl=document.querySelector(".image-conatainer");

const btnEl= document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
     imageNum=10;
addNewImages()
});

function addNewImages(){

for (let index = 0; index < imageNum; index++) {
 
    const newImgEl=document.createElement("img")
    newImgEl.src= `https://placebeard.it/300/300 ${Math.floor
   (Math.random()*2000)}`;

   imageContainerEl.appendChild(newImgEl)
}

  
}












