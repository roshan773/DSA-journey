//  22, 21, 23, 22, 24, 23, ...

let sequence = []
let num1 = 22
let num2 = 21
let terms = 10


for(let i = 2; i <= terms; i++){
    sequence.push(num1, num2)

    num1++
    num2++
}

console.log(sequence)