// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let count = 1
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln(count)
        count++
    }
    document.writeln("<br>")
}