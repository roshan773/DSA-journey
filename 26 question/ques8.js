// 3, 4, 7, 8, 11, 12, ...

let sequence = []
let start = 3;
let terms = 10;

sequence.push(start)

for(let i = 1; i<=terms; i++){
    if(start%2===0){
        start += 3
        sequence.push(start)
    }
    else{
        start += 1
        sequence.push(start)
    }
}

console.log(sequence)