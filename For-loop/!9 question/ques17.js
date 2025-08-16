// 2, 6, 18, 54, ...

let sequence = [];
let start = 2;
let terms = 10;

sequence.push(start)
for(let i=1; i<=terms; i++){
    start *= 3
    sequence.push(start)
}

console.log(sequence)