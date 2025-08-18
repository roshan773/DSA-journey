// 544, 509, 474, 439, ... 

let sequence = []
let start = 544;
let terms = 10;

sequence.push(start)
for(let i=1; i<=terms; i++){
    start -= 35
    sequence.push(start)
}

console.log(sequence)