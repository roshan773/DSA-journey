// Finding leap year


let start = 1200
let end = 2030;
let sequence = []

while (start < end){
    if((start%4 === 0 && start%100 !== 0) || (start%400 === 0)){
        console.log(start, "it is leap year")
        sequence.push(start)
    }

    start++
}

console.log(start)