let x = 7;
let y = 7;

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 13; j++) {
        if (x == j || y == j) {
            document.writeln("*")
        } else {
            document.writeln("&nbsp")
        }
    }
    x--;
    y++;
    document.writeln("<br>")
}

x = 1
y = 13

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 13; j++) {
        if (x == j || y == j) {
            document.writeln("*")
        }
        else {
            document.writeln("&nbsp")
        }
    }
    x++;
    y--;
    document.writeln("<br>")
}