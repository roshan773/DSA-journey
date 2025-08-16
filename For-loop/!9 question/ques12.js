// 14, 28, 20, 40, 32, 64, ...

let sequence = []
let start = 14;
let terms = 10;

sequence.push(start)
for (let i = 2; i <= terms; i++) {

    if (i % 2 === 0) {
        start *= 2
    }
    else {
        start -= 8
    }

    sequence.push(start)
}

console.log(sequence)