const user1 = "b0461h"
const user2 = "b3486c"
const user3 = "b1431g"
const user4 = "b1549f"




const pass1 = "cln13876ad"
const pass2 = "ui136595lk"
const pass3 = "fs647456gf"
const pass4 = "yr238724rt"

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
	alert("Username non trovato")
	window.location="failus.html";
}

var password = window.prompt("Inserisci la tua password")

if (password == pass1) {
	alert("Accesso eseguito")
	document.getElementById("annunci").innerHTML = "Annunci";
	document.getElementById("lista").innerHTML = "Nessun annuncio";
} else if  (password == pass2) {
	alert("Accesso eseguito")
		document.getElementById("annunci").innerHTML = "Annunci";
	document.getElementById("lista").innerHTML = "Nessun annuncio";
} else if (password == pass3) {
	alert("Accesso eseguito")
		document.getElementById("annunci").innerHTML = "Annunci";
	document.getElementById("lista").innerHTML = "Nessun annuncio";
} else if (password == pass4) {
	alert("Accesso eseguito")
		document.getElementById("annunci").innerHTML = "Annunci";
	document.getElementById("lista").innerHTML = "Nessun annuncio";
} else {
	alert("Password errata")
	window.location="failpass.html";
}








