let arr = [2, 4, 78, 23, 12, 4, 90]

for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
}

console.log(arr)

/*
    phase 1
    when i =0(2)
    j=1 -> arr[1]=4   -> 2 < 4 true -> swap -> [4, 2, 78, 23, 12, 4, 90]
    j=2 -> arr[2]=78  -> 4 < 78 true -> swap -> [78, 2, 4, 23, 12, 4, 90]
    j=3 -> arr[3]=23  -> 78 < 23 false -> no swap
    j=4 -> arr[4]=12  -> 78 < 12 false -> no swap
    j=5 -> arr[5]=4   -> 78 < 4 false -> no swap
    j=6 -> arr[6]=90  -> 78 < 90 true -> swap -> [90, 2, 4, 23, 12, 4, 78]

    i=0 -> [90, 2, 4, 23, 12, 4, 78]
*/

/*
    phase 2
    when i=1(2)
    j=2 -> arr[2]=4   -> 2 < 4 true -> swap -> [90, 4, 2, 23, 12, 4, 78]
    j=3 -> arr[3]=23  -> 4 < 23 true -> swap -> [90, 23, 2, 4, 12, 4, 78]
    j=4 -> arr[4]=12  -> 23 < 12 false -> no swap
    j=5 -> arr[5]=4   -> 23 < 4 false -> no swap
    j=6 -> arr[6]=78  -> 23 < 78 true -> swap -> [90, 78, 2, 4, 12, 4, 23]

    i=1 -> [90, 78, 2, 4, 12, 4, 23]
*/

/*
    phase 3
    when i=2(2)
    j=3 -> arr[3]=4   -> 2 < 4 true -> swap -> [90, 78, 4, 2, 12, 4, 23]
    j=4 -> arr[4]=12  -> 4 < 12 true -> swap -> [90, 78, 12, 2, 4, 4, 23]
    j=5 -> arr[5]=4   -> 12 < 4 true -> no swap
    j=6 -> arr[6]=23  -> 12 < 23 true -> swap -> [90, 78, 23, 2, 4, 4, 12]

    i=2 -> [90, 78, 23, 2, 4, 4, 12]
*/

/*
    phase 4
    when i=3(2)
    j=4 -> arr[4]=4   -> 2 < 4 true -> swap -> [90, 78, 23, 4, 2, 4, 12]
    j=5 -> arr[5]=4   -> 4 < 4 false -> no swap
    j=6 -> arr[6]=12  -> 4 < 12 true -> swap -> [90, 78, 23, 12, 2, 4, 4]

    i=3 -> [90, 78, 23, 12, 2, 4, 4]
*/

/*
    phase 5
    when i=4(2)
    j=5 -> arr[5]=4 -> 2 < 4 -> swap -> [90, 78, 23, 12, 4, 2, 4]
    j=6 -> arr[6]=4 -> 4 < 4 -> no swap

    i=4 -> [90, 78, 23, 12, 4, 2, 4]
*/

/*
    phase 6
    when i=5(2)
    j=6 -> arr[6]=4 -> 2 < 4 -> swap -> [90, 78, 23, 12, 4, 4, 2]

    i=5 -> [90, 78, 23, 12, 4, 4, 2]
*/