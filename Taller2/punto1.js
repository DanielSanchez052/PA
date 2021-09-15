/*function asociarEstudiantes (nombre, planeta, edad, estatura, asignarActividad){
    const estudiante = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura
    }
    asignarActividad(estudiante)
}   

asociarEstudiantes("Name","planet",15,1.18,function(estudiante){
    if(estudiante.edad<15){
        console.log("Manejo de la fuerza")
    }else if(estudiante.edad>=15){
        console.log("Manejo del sable de luz")
    }
})*/

function asociarEstudiantes(nombre, planeta, edad, estatura) {
  const estudiante = {
    nombre: nombre,
    planeta: planeta,
    edad: edad,
    estatura: estatura,
  };

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (estudiante.edad < 15) {
        resolve({
          estudiante: estudiante,
          message: "Manejo de la fuerza",
          Code: 200,
        });
      } else if (estudiante.edad >= 15) {
        resolve({
          estudiante: estudiante,
          message: "Manejo del sable de luz",
          Code: 200,
        });
      } else {
        reject({
          estudiante: estudiante,
          message: "Ha ocurrido un error",
          Code: 400,
        });
      }
    }, 2000);
  });
  return promise;
}

asociarEstudiantes("elza pato", "N/A", 14, 1, 80)
  .then((response) => {
    console.log(
      `La actividad para el aprendiz ${response.estudiante.nombre} es: ${response.message}`
    );
  })
  .catch((response) => {
    console.log(response.message);
  });
