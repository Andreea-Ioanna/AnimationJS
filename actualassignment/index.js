const dog = document.querySelector("#dog");
const owner = document.querySelector("#owner");
const bone = document.querySelector("#bone");
const time = document.querySelector("#time");
const barkk = document.querySelector('#bark');
const bg = document.querySelector('#bg')

time.addEventListener('click',  shifttt);
dog.addEventListener("mouseover", bark);
owner.addEventListener("click", appear);

function shifttt() {
  time.classList.remove("sun");
  time.classList.add("moon");
  bg.style.backgroundImage = "url(images/parkn.png)";
}

function appear() {
  bone.style.display = 'block';
  bone.addEventListener("click", throww);
}
function bark() {
  dog.classList.add('bark');
  barkk.play();
}
function throww() {
  bone.classList.add("throw");
  barkk.onended = function run() {
      dog.classList.remove("bark");
      dog.classList.add("run");
      dog.removeEventListener("mouseover", bark);
      }
}
setTimeout(function shiftt() {
    time.classList.remove("sun");
    time.classList.add("moon");
    bg.style.backgroundImage = "url(images/parkn.png)";
}, 30000);
