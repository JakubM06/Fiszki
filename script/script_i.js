let lang = document.querySelector("#languages");

let langl = [
  "Hola!",
  "Bonjour!",
  "Guten Tag!",
  "Witaj!",
  "Welcome!",
  "annyeonghaseyo!",
  "Kon'nichiwa!",
  "Nǐ hǎo!",
  "Sain uu!",
];

change();
function change() {
  lang.innerHTML = "";
  let l = [-1, -1, -1];
  for (let i = 0; i < 3; i++) {
    l[i] = Math.floor(Math.random() * 9);
    if (
      (i == 0 && l[0] != l[2] && l[0] != l[1]) ||
      (i == 1 && l[1] != l[2] && l[1] != l[0]) ||
      (i == 2 && l[2] != l[0] && l[2] != l[1])
    )
      lang.innerHTML += langl[l[i]] + " ";
    else i--;
  }
}
