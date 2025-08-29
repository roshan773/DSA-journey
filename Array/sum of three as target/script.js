// const target = 12
// const num = [1, 2, 3, 4, 5, 6]
// const ans = []


// for (let i = 0; i < num.length; i++) {
//     for (let j = 1; j < num.length; j++) {
//         // let total = num[i] + num[j]
//         // let diff = target - total
//         // let status = num.includes(diff)

//         // if (status) {
//         //     ans.push([num[i], num[j], diff])
//         // }
//         for(let k=j; k<num.length; k++){
//             let total = num[i] + num[j] + num[k]

//             if(target === total){
//                 ans.push([num[i], num[j], num[k]])
//             }
//         }
//     }
// }

const target = 12;
const num = [1, 2, 3, 4, 5, 6];
let ans = [];

for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        let total = num[i] + num[j];
        let diff = target - total;

        if (num.includes(diff)) {
            // make a triplet and sort it
            let triplet = [num[i], num[j], diff].sort((a, b) => a - b);

            // check if this triplet already exists in ans
            let exists = ans.some(t => JSON.stringify(t) === JSON.stringify(triplet));
            if (!exists) {
                ans.push(triplet);
            }
        }
    }
}

console.log(ans);


console.log(ans)
ans.forEach((e) => e.sort((a, b) => a - b))
console.log(ans)

/* 
    [ 
 

    [ 4, 4, 4 ],  
  [ 3, 4, 5 ], [ 2, 5, 5 ], 
  [ 3, 3, 6 ], [ 2, 4, 6 ],
  [ 1, 5, 6 ]
]
*/