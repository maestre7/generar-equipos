
//JS

let members = ["Traidor", "Desalmado", "Juampi", "Lucia", "Desde casa", "En directo", "Presencial"];

function validateInputTeams() {
	let membersTeams = document.forms["teams"]["members"].value;
	
	if (membersTeams < 2) {
		alert("No puede haber menos de dos miembros por equipo");
		return false;
	} else if (members.length < membersTeams) {
		alert("No tienes suficientes miembros para hacer dos equipos");
		return false;
	} else {
		createTeams();
	}	
}


function createTeams() {
	let membersTeams = document.forms["teams"]["members"].value;
	alert(`${members}`);
}