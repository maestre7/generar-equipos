
//JS

// Verificamos que los miembros por equipo no sean menos de dos, ni mas que la gente disponible.
// Si todo esta bien llamamos a la function que montara y mostrara los equipos
function validateInputTeams() {

	let membersTeams = document.forms["teams"]["members"].value;

	if (membersTeams < 2) {
		alert("No puede haber menos de dos miembros por equipo");
		return false;
	} else if (listNames.length <= membersTeams) {
		alert("No tienes suficientes gente para hacer dos equipos");
		return false;
	} else {	
		return true;
	}	
}


function createTeams() {
	// Recuperamos el numero de miembros por equipo del input(members) del form(teams)
	let membersTeams = document.forms["teams"]["members"].value;

	let myMembers = listNames.slice();
	let teamControl = 1;
	
	createGroup();
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

		includeMembers(teamArray, teamControl);
		teamControl += 1;
		
		//if (myMembers.length < 0) //discriminar lo miembros sobrantes
	}
	includeLine();
}

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Creamos las listas de los miembros en html y las rellenamos
function includeMembers(teamArray, teamControl) {

	let elementTeams = document.querySelector("div.teams > div:last-child");	

	let newElementList = document.createElement('ul');
	let newElementDiv = document.createElement('div');
	newElementDiv.innerHTML = `TEAM ${teamControl}`; // Numero de equipo
	newElementList.appendChild(newElementDiv);
	
	for (let v of teamArray) {
		let newElementListOne = document.createElement('li');
		newElementListOne.innerHTML = v; // Integrantes del equipo
		newElementList.appendChild(newElementListOne);
	}
	
	elementTeams.appendChild(newElementList);

}

// Creamos linea divisoria
function includeLine() {
	
	let elementTeams = document.querySelector("div.teams");
	let newElementLine = document.createElement('div');
	let myAttribute = document.createAttribute("class");
	myAttribute.value = "line";
	newElementLine.setAttributeNode(myAttribute);
	
	elementTeams.appendChild(newElementLine);
}

// Añadimos un div para cada grupo de equipos
function createGroup() {
	let elementTeams = document.querySelector("div.teams");
	let newElementDiv = document.createElement('div');
	elementTeams.appendChild(newElementDiv);	
}
