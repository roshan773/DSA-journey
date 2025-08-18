// WAP for checking Plaindrome number

let num = 121
let sum = 0
let temp = num

while(temp > 0){
    let digit = temp % 10
    sum = sum * 10 + digit
    temp = Math.floor(temp / 10)
}

if(sum === num){
    console.log("its a palindrome")
}
else{
    console.log("its not a palindrome")
}