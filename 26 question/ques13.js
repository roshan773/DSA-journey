// 2, 4, 6, 8, 10, ...

let sequence = []
let start = 2
let terms = 10

sequence.push(start)
for(let i=1; i<=terms; i++){
    start += 2;
    sequence.push(start)
}

console.log(sequence)