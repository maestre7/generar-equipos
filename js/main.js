
//JS

let membersArray = ["Traidor", "Desalmado", "Juampi", "Lucia", "Desde casa", "En directo", "Presencial"];
//let no-primera = false;

// Verificamos que los miembros por equipo no sean menos de dos, ni mas que la gente disponible.
// Si todo esta bien llamamos a la funcion que montara y mostrara los equipos
function validateInputTeams() {

	let membersTeams = document.forms["teams"]["members"].value;

	if (membersTeams < 2) {
		alert("No puede haber menos de dos miembros por equipo");
		return false;
	} else if (membersArray.length <= membersTeams) {
		alert("No tienes suficientes gente para hacer dos equipos");
		return false;
	} else {	
		return true;
	}	
}


function createTeams() {
	// Recuperamos el numero de miembros por equipo del input(members) del form(teams)
	let membersTeams = document.forms["teams"]["members"].value;

	let myMembers = membersArray.slice();
	
	while (myMembers.length != 0) {
		let teamArray = [];

		for (selectControl=0; selectControl != membersTeams; selectControl++) {

			let positionRandom = getRandomArbitrary(0, (myMembers.length))

			if (myMembers[positionRandom] != "undefined") {
				teamArray.push(...myMembers.splice(positionRandom, 1));
			} else {
				break;
			}
		}

		includeMembers(teamArray);
	}
}

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Creamos las listas de los miembros en html y las rellenamos
function includeMembers(teamArray) {
	// Recuperamos el element donde mostraremos los teams
	//if (no-primera) {
		//let ul = document.querySelector("div.teams>ul");	
		//ul.remove();
	//}
	let elementTeams = document.querySelector("div.teams");	

	let newElementList = document.createElement('ul');

	for (let v of teamArray) {
		let newElementListOne = document.createElement('li');
		newElementListOne.innerHTML = v;
		newElementList.appendChild(newElementListOne);
	}
	elementTeams.appendChild(newElementList);
	//no-primera = true;
}


