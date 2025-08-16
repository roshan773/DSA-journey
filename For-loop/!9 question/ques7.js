// 58, 52, 46, 40, 34, ...

let sequence = [];
let start = 58;
let terms = 10;


for(let i = 1; i<=terms; i++){
    sequence.push(start)

    start -= 6
}

console.log(sequence)