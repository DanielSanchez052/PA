let salarioBase = 3500000;
let comisionVenta = 1500000;
let totalVentas = 2;
let vendedor = 'qwerty';

const calcularSalario=(salarioBase,comisionVenta,totalVentas,impuesto = 1.05)=>{
  return (totalSalario =
    salarioBase + (comisionVenta * totalVentas) / impuesto);
}

// function calcularSalario(salarioBase,comisionVenta,totalVentas,impuesto = 1.05){
//   return (totalSalario =
//     salarioBase + (comisionVenta * totalVentas) / impuesto);
// }

console.log(calcularSalario(salarioBase, comisionVenta, totalVentas));
