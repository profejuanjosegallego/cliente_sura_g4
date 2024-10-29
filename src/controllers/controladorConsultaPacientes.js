import {pacientesSimulados} from "../data/simuladorPacientes.js"

let fila=document.getElementById("fila")

//Debo recorrer los datos de la BD para pintarlos
pacientesSimulados.forEach(function(paciente){
    console.log(paciente)
    //APLICANDO TRAVERSING

    //1. creo una columna para cada paciente
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2. creo una tarjeta para cada paciente
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","p-50","shadow")

    //3. creo una etiqueta para el nombre de cada paciente
    let etiquetaNombre=document.createElement("h3")
    etiquetaNombre.classList.add("text-center")
    etiquetaNombre.textContent=paciente.nombre

    //PASO FINAL--> ASOCIO LAS ETIQUETAS
    tarjeta.appendChild(etiquetaNombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})