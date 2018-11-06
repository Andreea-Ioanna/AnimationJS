const dog = document.querySelector('#bg');
const owner = document.querySelector('#dog');
const bone = document.querySelector('#bone');
const time = document.querySelector('#time')


let btnglow = document.querySelector("#btnglow");
btnglow.addEventListener("click",glow);

function glow () {
    time.classList.add("glow");
}

time.addEventListener('click',  shiftt);
dog.addEventListener('mouseover', bark);
owner.addEventListener('click', throw1);
//throw is a key word

function throw1() {
  dog.addEventListener('click', run);
  bone.style.display = 'block';
}


