// WAP for finding fibonnaci series

let num = 6
let first = 0
let second = 1

console.log(first)
console.log(second)
for(let i=1; i<=num; i++){
    let sum = first + second
    console.log(sum)
    first = second
    second = sum
}