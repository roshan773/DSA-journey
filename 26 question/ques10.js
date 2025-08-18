// 31, 29, 24, 22, 17, ...

let sequence = []
let start = 31;
let terms = 10;

sequence.push(start)

for(let i = 1; i<=terms; i++){
    if(i%2 !== 0){
        start -= 2
    }
    else{
        start -= 5
    }

    sequence.push(start)
}

console.log(sequence)