const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");
const b10 = document.querySelector("#b10");
const hero = document.querySelector("#hero");
const bg = document.querySelector(".bg");

b1.addEventListener("click", walk);
b2.addEventListener("click", run);
b3.addEventListener("click", jump);
b4.addEventListener("click", shoot);
b5.addEventListener("click", attack);
b6.addEventListener("click", jetpack);
b7.addEventListener("click", hurt);
b8.addEventListener("click", glow);
b9.addEventListener("click", dizzy);
b10.addEventListener("click", die);

function walk(c) {
    b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    c.stopImmediatePropagation();
    bg.classList.add("movebg");
    hero.removeAttribute("class");
    hero.classList.add("walk");
    b1.removeEventListener("click", walk);
    b1.onclick = swalk;
   
}

function swalk() {
    bg.classList.remove("movebg");
    b1.addEventListener("click", walk);
    hero.classList.remove("walk");
    hero.removeAttribute("class");
    hero.classList.add("idle");
}

function run(a) {
    b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    a.stopImmediatePropagation();
    bg.classList.add("movebg");
    hero.removeAttribute("class");
    hero.classList.add("run");
    b2.removeEventListener("click", run);
    b2.onclick = srun;
}

function srun() {
    bg.classList.remove("movebg");
    b2.addEventListener("click", run);
    hero.removeAttribute("class");
    hero.classList.add("idle");
}

function jump(b) {
    b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    b.stopImmediatePropagation();
    bg.classList.remove("movebg");
    hero.removeAttribute("class");
    hero.classList.add("jump");
    b3.removeEventListener("click", jump);
    b3.onclick = sjump;
}
function sjump() {
    b3.addEventListener("click", jump);
    hero.removeAttribute("class");
    hero.classList.add("idle");
}

function shoot(d) {
    b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    d.stopImmediatePropagation();
    bg.classList.remove("movebg");
    hero.removeAttribute("class");
    hero.classList.add("shoot");
    b4.removeEventListener("click", shoot);
    b4.onclick = sshoot;
}
function sshoot() {
    b4.addEventListener("click", shoot);
    hero.removeAttribute("class");
    hero.classList.add("idle");
}
function attack(e) {
    b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    e.stopImmediatePropagation();
    bg.classList.remove("movebg");
    hero.removeAttribute("class");
    hero.classList.add("attack");
    b5.removeEventListener("click", attack);
    b5.onclick = sattack;
    
}
function sattack() {
    b5.addEventListener("click", attack);
    hero.removeAttribute("class");
    hero.classList.add("idle");
}

function jetpack(f) {
    b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    f.stopImmediatePropagation();
    bg.classList.add("movebg");
    hero.removeAttribute("class");
    hero.classList.add("jetpack")
    b6.removeEventListener("click", jetpack);
    b6.onclick = sjetpack;
}

function sjetpack() {
    bg.classList.remove("movebg");
    b6.addEventListener("click", jetpack);
    hero.removeAttribute("class");
    hero.classList.add("idle");
}

function hurt(g) {
    b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    g.stopImmediatePropagation();
    bg.classList.remove("movebg");
    hero.removeAttribute("class");
    hero.classList.add("hurt");
    b7.removeEventListener("click", hurt);
    b7.onclick=shurt;
}
function shurt() {
    bg.classList.remove("movebg");
    b7.addEventListener("click", hurt);
    hero.removeAttribute("class");
    hero.classList.add("idle");
}

function glow(h) {
    b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    h.stopImmediatePropagation();
    bg.classList.remove("movebg");
    hero.removeAttribute("class");
    hero.classList.add("glow");
    b8.removeEventListener("click", glow)
    b8.onclick=sglow;
}
function sglow() {
    bg.classList.remove("movebg");
    b8.addEventListener("click", glow);
    hero.removeAttribute("class");
    hero.classList.add("idle");
}

function dizzy(i) {
     b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    i.stopImmediatePropagation();
    bg.classList.remove("movebg");
    hero.removeAttribute("class");
    hero.classList.add("dizzy");
    b9.removeEventListener("click", dizzy)
    b9.onclick=sdizzy;
}
function sdizzy() {
    bg.classList.remove("movebg");
    b9.addEventListener("click", dizzy);
    hero.removeAttribute("class");
    hero.classList.add("idle");
}

function die(j) {
    b1.addEventListener("click", walk);
    b2.addEventListener("click", run);
    b3.addEventListener("click", jump);
    b4.addEventListener("click", shoot);
    b5.addEventListener("click", attack);
    b6.addEventListener("click", jetpack);
    b7.addEventListener("click", hurt);
    b8.addEventListener("click", glow);
    b9.addEventListener("click", dizzy);
    b10.addEventListener("click", die);
    j.stopImmediatePropagation();
    bg.classList.remove("movebg");
    hero.removeAttribute("class");
    hero.classList.add("die");
    b10.removeEventListener("click", die);
    b10.onclick=sdie;
}
function sdie() {
    bg.classList.remove("movebg");
    b10.addEventListener("click", die);
}
