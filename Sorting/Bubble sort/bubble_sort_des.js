let arr = [3, 7, 45, 6, 2, 90, 55, 4, 3, 5]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0 + i; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
}

console.log(arr)