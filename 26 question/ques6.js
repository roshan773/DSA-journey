//  21, 9, 21, 11, 21, 13, 21, ...

let sequence = []
let num1 = 21
let num2 = 9
let terms = 10

for(let i=2; i<=terms; i++){
    sequence.push(num1, num2)

    num2 += 2
}

console.log(sequence)