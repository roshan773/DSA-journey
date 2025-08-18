// 8, 6, 9, 23, 87 , ...
let a = 8;
let terms = 10;

console.log(a)
for(let i=1; i<=terms; i++){
    a = a*i - (i + 1)
    console.log(a)
}