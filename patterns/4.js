// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        document.writeln(j)
    }
    document.writeln("<br>")
}