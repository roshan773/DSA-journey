// 36, 34, 30, 28, 24, ... 

let sequence = []
let start = 36
let terms = 10


for(let i = 2; i<= terms; i++){
    sequence.push(start)

    if(i%2 === 0){
        start -= 2
    }
    else{
        start -= 4
    }
}

console.log(sequence)