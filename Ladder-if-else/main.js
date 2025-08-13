// Wap to calculate electricity bill as per unit

// 1 to 20 -> 0.5/unit
// 21 to 40 -> 1rs /unit
// 41 to 60 -> 1.5rs / unit
// 61 to 80 -> 2rs/unit
// 81 to 100 -> 2.5rs /unit
// 100+ -> 5rs /unit

let unit = 0;
let total = 0;

if(unit <= 0){
    console.log("Inavalid unit")
}
else if(unit>=1 && unit<=20){
    total = unit * 0.5;
    console.log("Your bill is", total , "rs")
}
else if(unit>=21 && unit<=40){
    total = unit * 1;
    final = 0.5*20 + (unit - 20) * 1; 
    console.log("Your bill is", total , "rs")
    console.log("Your final bill is", final+"rs")
}
else if(unit>=41 && unit<=60){
    total = unit * 1.5
    final = 0.5*20 + 1*20 + (unit-40) * 1.5;
    console.log("Your bill is", total , "rs")
    console.log("Your final bill is", final+"rs")
}
else if(unit>=61 && unit<=80){
    total = unit * 2;
    final = 0.5*20 + 1*20 + 1.5*20 + (unit - 60) * 2;
    console.log("Your bill is", total , "rs")
    console.log("Your final bill is", final+"rs")
}
else if(unit>=81 && unit<=100){
    total = unit * 2.5;
    final = 0.5*20 + 1*20 + 1.5*20 + (unit-80) * 2.5;
    console.log("Your bill is", total , "rs")
    console.log("Your final bill is", final+"rs")
}
else{
    total = unit * 5;
    final = 0.5*20 + 1*20 + 1.5*20 + 2*20 + 2.5*20 + (unit - 100) * 5;
    console.log("Your bill is", total , "rs")
    console.log("Your final bill is", final+"rs")
}