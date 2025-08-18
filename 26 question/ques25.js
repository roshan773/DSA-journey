// WAP for finding magic number

let num = 124
let sum = 0
let mul = 1

while (num > 0){
    let digit = num % 10
    sum += digit
    mul *= digit 
    num = Math.floor(num / 10)
}

console.log(sum, mul)

if(sum === mul){
    console.log("its a magic number")
}
else{
    console.log("its not a magic number")
}