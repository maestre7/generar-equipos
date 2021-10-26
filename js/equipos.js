function team2() {
    let elementList = document.getElementById("name_list") // Lista
    let newElementListOne = document.createElement('li'); // Campo
    let value_in = document.getElementById('Add_name').value; // Valor in
    newElementListOne.innerHTML = value_in; // Integrantes del equipo
    listNames.push(value_in);
    elementList.appendChild(newElementListOne); // Añadir campo a lista
}

function validateAdd() {
    return true;
}

let listNames = [];