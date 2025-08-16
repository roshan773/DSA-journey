// 53, 53, 40, 40, 27, 27, ...

let sequence = [];
let start = 53
let terms = 10

for(let i=2; i<=terms; i++){
    sequence.push(start)
    sequence.push(start)

    start -= 13
}

console.log(sequence)