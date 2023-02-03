// ESERCIZIO 1 - MAIL

// 1. Creazione Array di stringhe contenente le mail
let arrayMail = ["fede@gmail.com", "ale12@hotmail.it", "andrew18@gmail.com", "erik-29@hotmail.it", "smemo25@libero.it"];
console.log("Array:", arrayMail);

// 2. Recupero elemento "pulsante" da HTML
const pulsanteMailEl = document.querySelector(".container button.btn-success");

// 3. Chiedere a Utente la Mail tramite prompt dopo aver cliccato il pulsante
pulsanteMailEl.addEventListener("click", function() {

  const mailUtente = prompt("Inserisci la tua mail ;)");
  console.log("Utente: ", mailUtente);
  
  // 4. Controllare se la mail dell'Utente è presente nell'Array.
  let presente = "no";
  
  for(let i = 0; i < arrayMail.length; i++){
  
    // console.log("MailUtente: ", mailUtente, typeof mailUtente);
    // console.log("ArrayMail: ", arrayMail[i], typeof arrayMail[i]);
  
    if (mailUtente === arrayMail[i]){
      presente = "si";
    }
  
  }
  
  // 5. Stampare un messaggio con esito ricerca
  if (presente === "si"){
    document.getElementById("mail").innerHTML = "La tua email è già presente!" + " " + '<i class="fa-regular fa-face-laugh-beam"></i>';
  } else {
    document.getElementById("mail").innerHTML = "La tua email non è presente!" + " " + '<i class="fa-regular fa-face-frown"></i>';
  }

});


// ESERCIZIO 2 - DADI

// 1. Recuperare elemento "pulsante" da HTML
const pulsanteDadiEl = document.querySelector(".container button.btn-warning");
// console.log(pulsanteEl);

// 2. Generare un numero casuale (da 1 a 6) per Utente e PC al "click" del pulsante
pulsanteDadiEl.addEventListener("click", function() {
  const numeroUtente = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  const numeroPC = Math.floor(Math.random() * (6 - 1 + 1) + 1);

  document.getElementById("dado-utente").innerHTML = numeroUtente;
  document.getElementById("dado-pc").innerHTML = numeroPC;

  // 3. Se numeroUtente > numeroPC ----> L'Utente vince!
  if (numeroUtente > numeroPC){
    document.getElementById("esito").innerHTML = "Hai Vinto!" + " " + '<i class="fa-regular fa-face-laugh-beam"></i>';
  }

  // 4. Se numeroUtente < numeroPC ----> L'Utente perde!
  if(numeroUtente < numeroPC){
    document.getElementById("esito").innerHTML = "Hai Perso!" + " " + '<i class="fa-regular fa-face-frown"></i>';
  }

  // 5. Se i numeri sono uguali è un pareggio.
  if (numeroUtente === numeroPC){
    document.getElementById("esito").innerHTML = "Pareggio!" + " " + '<i class="fa-solid fa-xmark"></i>';
  }

});