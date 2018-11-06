
let myImage = document.querySelector(".park");
let myImageTwo = document.querySelector(".tree");

let counter = 0;

myImage.addEventListener("click", moveImage);
myImageTwo.classList.add("pointer");

function moveImage(){
    counter = counter + 1;
    console.log(counter + " inside moveImage");
    this.removeEventListener("click" , moveImage);
    this.classList.remove("pointer");
    this.classList.add("move");
    this.addEventListener("animationend" , activateImageTwo);
}

function activateImageTwo(){
    this.classList.remove("pointer");
    myImageTwo.classList.add("pointer");
    this.removeEventListener("animationend" , activateImageTwo);
    myImageTwo.addEventListener("click" , fadeImage);
}

function fadeImage(){
    counter = counter + 1;
    console.log(counter + " inside moveImage");
    this.classList.add("fade");
    myImageTwo.removeEventListener("click", fadeImage);
    //this.addEventListener("animationend");

    if(counter == 2){
        mySound.play();

       }
}

