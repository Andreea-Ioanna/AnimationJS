const dog = document.querySelector("#dog");
const owner = document.querySelector("#owner");
const bone = document.querySelector("#bone");
const time = document.querySelector("#time");
const barkk = document.querySelector('#bark')

// time.addEventListener('click',  shiftt);
dog.addEventListener("mouseover", bark);
owner.addEventListener("click", throww);

function throww() {
  // dog.addEventListener('click', run);
  bone.style.display = 'block';

}
function bark() {
  dog.classList.add('bark');
  barkk.play();
}
