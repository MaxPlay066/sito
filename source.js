function toinfo() {
	window.location="info.html";
}

const user1 = "b0461h"
const user2 = "b3486c"
const user3 = "b1431g"
const user4 = "b1549f"




const pass1 = "cln13876ad"
const pass2 = "ui136595lk"
const pass3 = "fs647456gf"
const pass4 = "yr238724rt"

var annuncio = " - Nuovo sistema di annunci aggiunto. In seguito verranno aggiunte altre sezioni"

var user = window.prompt("Inserisci il tuo username")

if (user == user1) {
	alert("Ok. Ora inserisci la password")
} else if  (user == user2) {
	alert("Ok. Ora inserisci la password")
} else if (user == user3) {
	alert("Ok. Ora inserisci la password")
} else if (user == user4) {
	alert("Ok. Ora inserisci la password")
} else {
	alert("Username non trovato. Alla fine del login, l'accesso non sarà eseguito.")
	window.location="brutal.html";
}

var password = window.prompt("Inserisci la tua password")

if (password == pass1) {
	alert("Accesso eseguito")
    document.getElementById("lista").innerHTML = annuncio;
} else if  (password == pass2) {
	alert("Accesso eseguito")
    document.getElementById("lista").innerHTML = annuncio;
} else if (password == pass3) {
	alert("Accesso eseguito")
    document.getElementById("lista").innerHTML = annuncio;
} else if (password == pass4) {
	alert("Accesso eseguito")
    document.getElementById("lista").innerHTML = annuncio;
} else {
	alert("Password errata")
	window.location="failpass.html";
}

document.getElementById("annunci").innerHTML = "Sezione attuale: Annunci"
document.getElementById("info").innerHTML = "Informazioni"









