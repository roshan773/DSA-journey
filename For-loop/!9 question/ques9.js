//  8, 22, 8, 28, 8, ... 

let sequence = []
let num1 = 8
let num2 = 22;
let terms = 10;

for(let i = 1; i<=terms; i++){
    sequence.push(num1, num2)

    num2 += 6
}

console.log(sequence)