// WAP for finding armstrong number

let num = 1634
let sum = 0
let temp = num

while(temp > 0){
    let digit = temp % 10
    sum += digit ** 4
    temp = Math.floor(temp / 10)
}

if(sum == num){
    console.log("its a armstrong number")
}
else{
    console.log("its not a arnstrong")
}