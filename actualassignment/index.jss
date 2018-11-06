const dog = document.document.querySelector('#bg');
const owner = document.document.querySelector('#dog');
const bone = document.querySelector('#bone');
const time = document.querySelector('#time')

time.addEventListener('click',  shiftt);
dog.addEventListener('mouseover', bark);
owner.addEventListener('click', throw);

function throw() {
  dog.addEventListener('click', run);
  bone.style.display = 'block';
}
