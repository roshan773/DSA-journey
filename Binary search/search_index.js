let arr = [45, 12, 89, 33, 7, 56, 21, 73, 5, 38]

let newarr = arr.sort((a, b) => a - b)
console.log(newarr) //[5,  7, 12, 21, 33, 38, 45, 56, 73, 89]

let target = 89
let l = 0;
let h = arr.length - 1
let found = false
// let m = Math.floor((l + h) / 2)
// console.log(m)

// if (newarr[m] === target) {
//     console.log(`${target} found on the index of ${m}`)
// }
// else if (target > newarr[m]) {
//     l = m + 1
// }
// else{
//     l = m - 1
// }

// if(l>h){
//     console.log("index not found")
// }

while (l <= h) {
    let m = Math.floor((l + h) / 2)
    // console.log(m)

    if (newarr[m] === target) {
        console.log(`${target} found on the index of ${m}`)
        found = true
        break;
    }
    else if (target > newarr[m]) {
        l = m + 1
    }
    else {
        h = m - 1
    }

}