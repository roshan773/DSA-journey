// WAP for merge sort for the following array [3,1,2] [7,1,9]

let arr1 = [3, 1, 2]
let arr2 = [7, 1, 9]

let newarr = arr1.concat(arr2)
console.log(newarr)

let arr = [...new Set(newarr)]

let n = arr.length
// sort using bubble sort
for (i = 0; i < n; i++) {
    for (j = 0; j < n - i; j++) {
        if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}

console.log(arr)