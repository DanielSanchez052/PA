const energiaSables = [2, 4, -8, 5, -6];

function sacarEnergiaNegativa(sables) {
  let energiaNegativa = 0;

  sables.map((energia) => {
    if (energia < 0) {
      energiaNegativa += 1;
    }
  });

  return energiaNegativa;
}

console.log(
  `Los sables que tienen energia negativa son ${sacarEnergiaNegativa(
    energiaSables
  )}`
);