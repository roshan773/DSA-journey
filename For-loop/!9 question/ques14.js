// 201, 202, 204, 207, ... 

let sequence = []
let start = 201;
let diff = 1;
let terms = 10;

sequence.push(start)
for(let i = 1; i<=terms; i++){

    start += diff
    sequence.push(start)
    diff++

}

console.log(sequence)