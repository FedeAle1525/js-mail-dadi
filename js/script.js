// ESERCIZIO 1 - MAIL

// 1. Creazione Array di stringhe contenente le mail
let arrayMail = ["fede@gmail.com", "ale12@hotmail.it", "andrew18@gmail.com", "erik-29@hotmail.it", "smemo25@libero.it"];
console.log("Array:", arrayMail);

// 2. Chiedere a Utente la Mail tramite prompt
const mailUtente = prompt("Inserisci la tua mail ;)");
console.log("Utente: ", mailUtente);

// 3. Controllare se la mail dell'Utente è presente nell'Array.
let messaggio = "no";

for(let i = 0; i < arrayMail.length; i++){

  // console.log("MailUtente: ", mailUtente, typeof mailUtente);
  // console.log("ArrayMail: ", arrayMail[i], typeof arrayMail[i]);

  if (mailUtente === arrayMail[i]){
    messaggio = "si";
  }

}

// 4. Stampare un messaggio con esito ricerca
if (messaggio === "si"){
  document.getElementById("mail").innerHTML = "La tua email è già presente!";
} else {
  document.getElementById("mail").innerHTML = "La tua email non è presente!";
}


// ESERCIZIO 2 - DADI

// 1. Recuperare elemento "pulsante" da HTML
const pulsanteEl = document.querySelector(".container button");
// console.log(pulsanteEl);

// 2. Generare un numero casuale (da 1 a 6) per Utente e PC al "click" del pulsante
pulsanteEl.addEventListener("click", function() {
  const numeroUtente = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  const numeroPC = Math.floor(Math.random() * (6 - 1 + 1) + 1);

  document.getElementById("dado-utente").innerHTML = numeroUtente;
  document.getElementById("dado-pc").innerHTML = numeroPC;

  // 3. Se numeroUtente > numeroPC ----> L'Utente vince!
  if (numeroUtente > numeroPC){
    document.getElementById("esito").innerHTML = "Hai Vinto!" + " " + '<i class="fa-regular fa-face-laugh-beam"></i>';
  }

  if(numeroUtente < numeroPC){
    document.getElementById("esito").innerHTML = "Hai Perso!" + " " + '<i class="fa-regular fa-face-frown"></i>';
  }

  if (numeroUtente === numeroPC){
    document.getElementById("esito").innerHTML = "Pareggio!" + " " + '<i class="fa-solid fa-xmark"></i>';
  }

});