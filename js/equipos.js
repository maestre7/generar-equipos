function team2() {
    let elementList = document.getElementById("name_list") // Lista
    let newElementListOne = document.createElement('li'); // Campo
    let v = document.getElementById('Add_name'); // Valor in
    newElementListOne.innerHTML = v; // Integrantes del equipo
    elementList.appendChild(newElementListOne); // Añadir campo a lista
}

function validateAdd() {
    return true
}