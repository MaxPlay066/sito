const vincita = ["Hai Vinto", "Hai Perso"]















function fv() {
	alert("Ora scoprirai se hai vinto")
	vinto = vincita[Math.floor(Math.random() * vincita.length)];;
	document.getElementById("scopri").innerHTML = vinto
}


