const robarPlanos=(idPlano, arrancarNave)=>{
    if(idPlano > 0 && idPlano <= 10){
        console.log(`El plano ${idPlano} es correcto`)
        arrancarNave(null)
    }else{
        console.log(`El plano ${idPlano} es falso`)
        arrancarNave("Error")
    }
}

robarPlanos(18,(e)=>{
    if(e){
        console.log("Error") 
    }else{
        console.log("Arrancando la nave!!")
    }
})