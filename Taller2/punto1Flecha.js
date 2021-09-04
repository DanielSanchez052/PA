const asociarEstudiantes= (nombre, planeta, edad, estatura, asignarActividad)=>{
    const estudiante = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura
    }
    asignarActividad(estudiante)
}   

asociarEstudiantes("Name","planet",12,1.18,(estudiante)=>{
    if(estudiante.edad<15){
        console.log("Manejo de la fuerza")
    }else if(estudiante.edad>=15){
        console.log("Manejo del sable de luz")
    }
})