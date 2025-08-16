// 1.5, 2.3, 3.1, 3.9, ... 

let sequence = []
let start = 1.5;
let terms = 10;

for(let i = 1; i<=terms; i++){
    sequence.push(Number(start.toFixed(1)))

    start += 0.8
}

console.log(sequence)