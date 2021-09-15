let salarioBase = 3500000;
let comisionVenta = 1500000;
let totalVentas = 2;
let vendedor = "qwerty";

const calcularSalario = (
  vendedor,
  salarioBase,
  comisionVenta,
  totalVentas,
  impuesto = 1.05
) => {
  totalSalario = salarioBase + (comisionVenta * totalVentas) / impuesto;
  return `El salario de ${vendedor} es: ${totalSalario}`;
};

// function calcularSalario(salarioBase,comisionVenta,totalVentas,impuesto = 1.05){
//   totalSalario = salarioBase + (comisionVenta * totalVentas) / impuesto;
//
//    return(`El salario de ${vendedor} es: ${totalSalario}`)
// }

console.log(calcularSalario(vendedor, salarioBase, comisionVenta, totalVentas));
