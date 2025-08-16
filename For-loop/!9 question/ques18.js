// 5.2, 4.8, 4.4, 4, ...

let sequence = []
let start = 5.2;
let terms = 10;


sequence.push(start)
for(let i=1; i<=terms; i++){
    start -= 0.4;
    sequence.push(Number(start.toFixed(1)))
}

console.log(sequence)