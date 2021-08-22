let temperatura = [10, 28, 39, 15, 17];

const promedio_temp = (temperatura) => {
  let temperaturaMax = Math.max(...temperatura);
  let temperaturaMin = Math.min(...temperatura);

  return (temperaturaMax + temperaturaMin) / 2;
};

console.log(
  `La temperatura media de La luna de Endor es de ${promedio_temp(
    temperatura
  )}°`
);
