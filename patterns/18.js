// 0
// 0 1
// 0 1 0
// 0 1 0 1
// 0 1 0 1 0


for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        if(j%2===0){
            document.writeln(1)
        }
        else{
            document.writeln(0)
        }
    }
    document.writeln("<br>")
}