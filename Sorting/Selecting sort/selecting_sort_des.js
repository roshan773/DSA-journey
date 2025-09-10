let arr = [42, 7, 19, 73, 55, 28, 14, 3, 60, 33]

// Descending Order
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]<arr[j]){
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
}

console.log(arr)