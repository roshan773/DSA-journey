// 7, 10, 8, 11, 9, 12, ...

let sequence = []
let num1 = 7
let num2 = 10
let terms=10

for(let i = 2; i<=terms; i++){
    sequence.push(num1, num2)

    num1++
    num2++
}

console.log(sequence)