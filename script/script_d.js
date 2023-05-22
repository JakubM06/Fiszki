let fiszka = document.querySelector("#fiszka");
let tekst = document.querySelector("#tekst");
let stworzone = document.querySelector("#created");
let texta = document.querySelector("#tekst")
let licz = 1;
let pytania = [];
let odpowiedzi = [];
let s1text = document.querySelector("#s1");
let s2text = document.querySelector("#s2");
let submit = document.querySelector("#send");
let name = document.querySelector("#name");

let i = 0;


function flip() {
  if (licz == 1) {
    fiszka.style.transform = "rotateY(180deg)";
    fiszka.style.transition = "transform 600ms";
    setTimeout(() => {
      texta.style.transform = "rotateY(180deg)";
      pytania[i] = tekst.value;

      console.log("pytania: " + pytania[i]);
      if (odpowiedzi[i] != undefined) tekst.value = odpowiedzi[i];
      else tekst.value = null;
      }, 225);
      licz = 0;
  } else if (licz == 0) {
    fiszka.style.transform = "rotateY(0deg)";
    fiszka.style.transition = "transform 600ms";
    setTimeout(() => {
      texta.style.transform = "rotateY(0deg)";
      odpowiedzi[i] = tekst.value;
      console.log("odpowiedzi: " + odpowiedzi[i]);
      if (pytania[i] != undefined) tekst.value = pytania[i];
      else tekst.value = null;
      }, 225);
      licz = 1;
  }
  console.log(odpowiedzi + "    " + pytania);

}


function fadd() {
  if(i!=0){
    s1text.innerHTML += " | ";
    s2text.innerHTML += " | ";
  }
  if (licz == 1) {
    pytania[i] = tekst.value;
    console.log("pytania: " + pytania[i]);
  } else if (licz == 0) {
    odpowiedzi[i] = tekst.value;
    console.log("odpowiedzi: " + odpowiedzi[i]);
  }
  if (odpowiedzi[i] != undefined && odpowiedzi[i] != "" && pytania[i] != undefined && pytania[i] != "") {
    stworzone.innerHTML +=
      '<div class="created"><div class="question">' +
      pytania[i] +
      '</div><div class="anwser">' +
      odpowiedzi[i] +
      "</div></div>";
      s1text.innerHTML += pytania[i];
      s2text.innerHTML += odpowiedzi[i];
      i++;
      licz=1;
      fiszka.style.transform = "rotateY(0deg)";
      fiszka.style.transition = "transform 600ms";
      setTimeout(() => {
        texta.style.transform = "rotateY(0deg)";
        tekst.value = "";
        }, 225);
  }
  
}
function check() {
  if(name.textvalue != "" && i>0){
    submit.disabled = false;
  }
  else{
      submit.disabled = true;
  }
}