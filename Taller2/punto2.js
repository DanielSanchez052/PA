/*function robarPlanos(idPlano, arrancarNave){
    if(idPlano > 0 && idPlano <= 10){
        console.log(`El plano ${idPlano} es correcto`)
        arrancarNave(null)
    }else{
        console.log(`El plano ${idPlano} es falso`)
        arrancarNave("Error")
    }
}

function arrancarNave(18,function(e){
    if(e){
        console.log("Error") 
    }else{
        console.log("Arrancando la nave!!")
    }
})*/

function robarPlanos(idPlano) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idPlano > 0 && idPlano <= 10) {
        resolve({ message: `El plano ${idPlano} es correcto`, code: 200 });
      } else {
        reject({ message: `El plano ${idPlano} es falso`, code: 200 });
      }
    }, 2000);
  });
  return promise;
}

robarPlanos(11)
  .then((response) => {
    console.log(response);
  })
  .catch((response) => {
    console.log(response);
  });
