const get_pilot_name =(accessCode)=>{
  const name = accessCode.split(":")[1];
  return name;
}

console.log(
  `El nombre del piloto es: ${get_pilot_name("ARQ2555:Sara Bel-Sun")}`
);

console.log(
  `El nombre del piloto es: ${get_pilot_name(" ARQ2556:Nodin Chavdri")}`
);

console.log(`El nombre del piloto es: ${get_pilot_name("ARQ2557:Finn")}`);
