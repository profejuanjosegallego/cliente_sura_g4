export async function guardarPaciente(datosPaciente){

    const URL="http://localhost:8080/api/paciente"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosPaciente) 
    }

    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal
    


}

export async function consultarPacientes(){
    //1. pa onde voy - URL DEL SERVICIO
    const URL="http://localhost:8080/api/paciente"

    //2. Que vas a hacer alla ome - CONFIGURO LA PETICION
    let peticion={
        method:"GET"
    }

    //3. Arranque ps mijo - CONSUMA EL API
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal

}

