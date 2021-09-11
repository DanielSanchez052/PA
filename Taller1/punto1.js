const CalcularDistancia=(
  coordenada_x1,
  coordenada_x2,
  coordenada_y1,
  coordenada_y2
)=>{
  const distancia = Math.sqrt(
    Math.pow(coordenada_x2 - coordenada_x1, 2) +
      Math.pow(coordenada_y2 - coordenada_y1, 2)
  );
  return `La distancia del plneta oooo a Naboo es de: ${distancia} UA `;
}

// function CalcularDistancia(coordenada_x1,coordenada_x2,coordenada_y1,coordenada_y2){
//   const distancia = Math.sqrt(
//     Math.pow(coordenada_x2 - coordenada_x1, 2) +
//       Math.pow(coordenada_y2 - coordenada_y1, 2)
//   );
//   return `La distancia del plneta oooo a Naboo es de: ${distancia} UA `;
// }

console.log(CalcularDistancia(0, 50, 0, 70));

console.log(CalcularDistancia(0, 20, 0, 30));
