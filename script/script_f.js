let fiszka = document.querySelector("#fiszka");
let tekst = document.querySelector("#tekst");
let stworzone = document.querySelector("#created");
let licz = 1;
let pytania;
let odpowiedzi;
let id;
let i = 0;

function flip() {
  if (licz == 1) {
    fiszka.style.transform = "rotateY(180deg)";
    fiszka.style.transition = "transform 600ms";
    setTimeout(() => {
      tekst.style.transform = "rotateY(180deg)";
      pytania[i] = tekst.value;
      console.log("pytania: " + pytania[i]);
      if (odpowiedzi[i] != undefined) tekst.value = odpowiedzi[i];
      else tekst.value = null;
    }, 220);
    licz = 0;
  } else if (licz == 0) {
    fiszka.style.transform = "rotateY(0deg)";
    fiszka.style.transition = "transform 600ms";
    setTimeout(() => {
      tekst.style.transform = "rotateY(0deg)";
      odpowiedzi[i] = tekst.value;
      console.log("odpowiedzi: " + odpowiedzi[i]);
      if (pytania[i] != undefined) tekst.value = pytania[i];
      else tekst.value = null;
    }, 225);
    licz = 1;
  }
}
function load() {
  localStorage.side1 = document.querySelector(`#task${id} > .side1`).innerHTML;
  localStorage.side2 = document.querySelector(`#task${id} > .side2`).innerHTML;
  localStorage.check = 1;
  document.location.href = "fiszka.html";
}
function changeflash() {
  if(localStorage.check!=1){
  document.location.href = "zadania.php";
  }
  pytania = localStorage.side1.split(" | ");
  odpowiedzi = localStorage.side2.split(" | ");
  tekst.value = pytania[0];
  localStorage.clear();
}
function valchange(val) {
  id = val;
}
function back() {
  if (i > 0) i--;
  tekst.value = pytania[i];
  fiszka.style.transform = "rotateY(0deg)";
  tekst.style.transform = "rotateY(0deg)";
  fiszka.style.transition = "transform 0ms";
  licz = 1;
}
function fwd() {
  if (i < pytania.length - 1) i++;
  tekst.value = pytania[i];
  fiszka.style.transform = "rotateY(0deg)";
  tekst.style.transform = "rotateY(0deg)";
  fiszka.style.transition = "transform 0ms";
  licz = 1;
}

