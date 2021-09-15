function range(start, end){
    return [...Array((end-start)+1).keys()].map((num)=>num+start)
}

const nums = range(1,20)

nums.map((num)=>{
    if(num%3==0 && num%5==0){
        console.log("FizzBuzz")
    }else if(num%3==0){
        console.log("Fizz")
    }else if(num%5==0){
        console.log("Buzz")
    }else{
        console.log(num)
    }
})