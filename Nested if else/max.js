// WAP to find max from 3,4,5 number
//  1. With 3 number

// a = 100, b = 2, c = 10

// a,b,c
// if (a > b) {
//     if (a > c) {
//         console.log("a is max")
//     } else {
//         console.log("c is max")
//     }
// } else {
//     if (b > c) {
//         console.log("c is max")
//     } else {
//         console.log("b is max")
//     }
// }

// 2. with 4 number

// a = 100, b = 2, c = 10, d = 343456789

// a,b,c,d
// if (a > b) {
//     if (a > c) {
//         if (a > d) {
//             console.log("a is max")
//         } else {
//             console.log("d is max")
//         }
//     } else {
//         if(b > c){
//             console.log("b is max")
//         }
//         else{
//             console.log("c is max")
//         }
//     }
// } else {
//     if (b > c) {
//         if (b > d) {
//             console.log("b is max")
//         } else {
//             console.log("d is max")
//         }
//     } else {
//         if (c > d) {
//             console.log("c is max")
//         } else {
//             console.log("d is max")
//         }
//     }
// }


// 3. with 5 number
a = 100, b = 2, c = 10, d = 343456789

// a,b,c,d,e
if (a > b) {
    if (a > c) {
        if (a > d) {
            if (a > e) {
                console.log("a is max")
            } else {
                console.log("e is max")
            }
        } else {
            if (d > b) {
                console.log("d is max")
            } else {
                console.log("b is max")
            }
        }
    } else {
        if (c > b) {
            console.log("c is max")
        } else {
            console.log("b is max")
        }
    }
} else {
    
}