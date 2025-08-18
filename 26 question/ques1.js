// let sequence = []
// let start = 2
// let terms = 50

// for (let i = 2; i < terms; i++) {

//     if (start >= 1 && Number.isInteger(start)) {
//         sequence.push(start.toString())
//     } else {
//         sequence.push("1/" + Math.round(1 / start))
//     }
//     start /= 2
// }

// console.log(sequence)




let sequence = []
let start = 2
let terms = 20

for(let i=2; i<=terms; i++){
    if (start >= 1 && Number.isInteger(start)) {
        sequence.push(start.toString())
    } else {
        sequence.push("1/" + Math.round(1/start))
    }

    start /= 2
    console.log(sequence)
}

