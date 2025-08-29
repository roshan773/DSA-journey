let target = 6
let num = [1, 2, 3, 4, 5, 6]
let ans = []

for(let i=0; i< num.length; i++){
    for(let j=1; j<num.length; j++){
        const total = num[i] + num[j]

        if(target === total){
            ans.push([num[i], num[j]])
        }
    }
}

console.log(ans)