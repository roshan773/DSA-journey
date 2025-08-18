// WAP for adding first and last number

let num = 23456

let last = num % 10
console.log(last)

let first = num
while(first >= 10){
    first = Math.floor(first/10)
}
console.log(first)

let sum = last + first
console.log(sum)