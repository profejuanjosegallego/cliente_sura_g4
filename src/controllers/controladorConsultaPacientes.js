//import {pacientesSimulados} from "../data/simuladorPacientes.js"

import {consultarPacientes} from "../services/serviciosPaciente.js"

consultarPacientes()
.then(function(respuestaBack){
    let fila=document.getElementById("fila")

//Debo recorrer los datos de la BD para pintarlos
respuestaBack.forEach(function(paciente){
    console.log(paciente)
    //APLICANDO TRAVERSING

    //1. creo una columna para cada paciente
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2. creo una tarjeta para cada paciente
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","p-5","shadow")

    //3. creo una etiqueta para el nombre de cada paciente
    let etiquetaNombre=document.createElement("h3")
    etiquetaNombre.classList.add("text-center","fw-bold")
    etiquetaNombre.textContent=paciente.nombre

    let etiquetaIcono=document.createElement("img")
    etiquetaIcono.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
    etiquetaIcono.src="../../assets/img/paciente.png"

    let etiquetaIPS=document.createElement("h4")
    etiquetaIPS.classList.add("text-start","textosura")
    etiquetaIPS.textContent="IPS: "+paciente.ips

    let etiquetaCorreo=document.createElement("h5")
    etiquetaCorreo.classList.add("text-start")
    etiquetaCorreo.textContent="Correo electrónico: "+paciente.correo

    let etiquetaTelefono=document.createElement("h5")
    etiquetaTelefono.classList.add("text-start")
    etiquetaTelefono.textContent="Teléfono: "+paciente.telefono

    let etiquetaCiudad=document.createElement("h5")
    etiquetaCiudad.classList.add("text-start")
    etiquetaCiudad.textContent="Ciudad: "+paciente.ciudad

    let etiquetaGrupoIngreso=document.createElement("h5")
    etiquetaGrupoIngreso.classList.add("text-start","textosura")
    etiquetaGrupoIngreso.textContent="Grupo Ingreso: "+paciente.grupoIngresos

    let etiquetaAfiliacion=document.createElement("h5")
    etiquetaAfiliacion.classList.add("text-start","fw-bold")
    etiquetaAfiliacion.textContent="Fecha afiliacion: "+paciente.fechaAfiliacion

    let eliminar=document.createElement("button")
    eliminar.classList.add("btn","btn-primary","w-25")

    let iconoBasura=document.createElement("i")
    iconoBasura.classList.add("bi","bi-trash-fill")

    let editar=document.createElement("button")
    editar.classList.add("btn","btn-primary","w-25","my-2")

    let iconoEditar=document.createElement("i")
    iconoEditar.classList.add("bi","bi-pencil-fill")

    //PASO FINAL--> ASOCIO LAS ETIQUETAS
    eliminar.appendChild(iconoBasura)
    editar.appendChild(iconoEditar)
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaIcono)
    tarjeta.appendChild(etiquetaIPS)
    tarjeta.appendChild(etiquetaCorreo)
    tarjeta.appendChild(etiquetaTelefono)
    tarjeta.appendChild(etiquetaCiudad)
    tarjeta.appendChild(etiquetaGrupoIngreso)
    tarjeta.appendChild(etiquetaAfiliacion)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})
})



