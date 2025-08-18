// 80, 10, 70, 15, 60, ...

let sequence = []
let num1 = 80
let num2 = 10
let terms = 10;


for(let i=1; i<=terms; i++){
    sequence.push(num1, num2)

    num1 -= 10
    num2 += 5
}

console.log(sequence)