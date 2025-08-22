for(let i=1; i<=7; i++){
    for(let j=1; j<=5; j++){
        if(j==1 || i==1 || i==4 || (i==4 && j<5) || (i<4 && j==5) ){
            document.writeln("*")
        }
        else{
            document.writeln("&nbsp&nbsp")
        }
    }
    document.writeln("<br>")
}