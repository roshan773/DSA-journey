let arr = [4, 5, 6, 4, 7, 5, 8, 6, 9, 4];

const uniquearr = [... new Set(arr)]
console.log(uniquearr)

for (let i = 0; i < uniquearr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === uniquearr[i]) {
            count++
        }
    }
    console.log(`${uniquearr[i]} appear for ${count} times`)
}