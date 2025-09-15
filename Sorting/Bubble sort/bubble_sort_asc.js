let arr = [20, 10, 43, 3, 6, 20, 33, 34, 78]
// let n = arr.length

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[i] < arr[j - 1]) {
//             [arr[i], arr[j - 1]] = [arr[j - 1], arr[i]]
//         }
//     }
// }

// console.log(arr)

arr.sort((a,b) => a-b)
console.log(arr)