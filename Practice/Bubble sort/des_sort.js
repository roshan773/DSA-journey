let arr = [2, 3, 73, 28, 92, 6, 90]

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}

console.log(arr)

/*
    Phase 1 (i=0)
    j=0 → compare 2,3 → 2<3 → swap → [3, 2, 73, 28, 92, 6, 90]
    j=1 → compare 2,73 → 2<73 → swap → [3, 73, 2, 28, 92, 6, 90]
    j=2 → compare 2,28 → 2<28 → swap → [3, 73, 28, 2, 92, 6, 90]
    j=3 → compare 2,92 → 2<92 → swap → [3, 73, 28, 92, 2, 6, 90]
    j=4 → compare 2,6 → 2<6 → swap → [3, 73, 28, 92, 6, 2, 90]
    j=5 → compare 2,90 → 2<90 → swap → [3, 73, 28, 92, 6, 90, 2]

    i=0 → [3, 73, 28, 92, 6, 90, 2]
*/

/*
    Phase 2 (i=1)
    j=0 → compare 3,73 → 3<73 → swap → [73, 3, 28, 92, 6, 90, 2]
    j=1 → compare 3,28 → 3<28 → swap → [73, 28, 3, 92, 6, 90, 2]
    j=2 → compare 3,92 → 3<92 → swap → [73, 28, 92, 3, 6, 90, 2]
    j=3 → compare 3,6 → 3<6 → swap → [73, 28, 92, 6, 3, 90, 2]
    j=4 → compare 3,90 → 3<90 → swap → [73, 28, 92, 6, 90, 3, 2]
    j=5 → compare 3,2 → 3<2 → false → no swap

    i=1 → [73, 28, 92, 6, 90, 3, 2]
*/

/*
    Phase 3 (i=2)
    j=0 → compare 73,28 → 73<28 → false → no swap
    j=1 → compare 28,92 → 28<92 → swap → [73, 92, 28, 6, 90, 3, 2]
    j=2 → compare 28,6 → 28<6 → false → no swap
    j=3 → compare 6,90 → 6<90 → swap → [73, 92, 28, 90, 6, 3, 2]
    j=4 → compare 6,3 → 6<3 → false → no swap
    j=5 → compare 3,2 → 3<2 → false → no swap

    i=2 → [73, 92, 28, 90, 6, 3, 2]
*/  

/*
    Phase 4 (i=3)
    j=0 → compare 73,92 → 73<92 → swap → [92, 73, 28, 90, 6, 3, 2]
    j=1 → compare 73,28 → 73<28 → false → no swap
    j=2 → compare 28,90 → 28<90 → swap → [92, 73, 90, 28, 6, 3, 2]
    j=3 → compare 28,6 → 28<6 → false → no swap
    j=4 → compare 6,3 → 6<3 → false → no swap
    j=5 → compare 3,2 → 3<2 → false → no swap

    i=3 → [92, 73, 90, 28, 6, 3, 2]
*/

/*
    Phase 5 (i=4)
    j=0 → compare 92,73 → 92<73 → false → no swap
    j=1 → compare 73,90 → 73<90 → swap → [92, 90, 73, 28, 6, 3, 2]
    j=2 → compare 73,28 → 73<28 → false → no swap
    j=3 → compare 28,6 → 28<6 → false → no swap
    j=4 → compare 6,3 → 6<3 → false → no swap
    j=5 → compare 3,2 → 3<2 → false → no swap

    i=4 → [92, 90, 73, 28, 6, 3, 2]
*/

/*
    Phase 6 (i=5)
    j=0 → compare 92,90 → 92<90 → false → no swap
    j=1 → compare 90,73 → 90<73 → false → no swap
    j=2 → compare 73,28 → 73<28 → false → no swap
    j=3 → compare 28,6 → 28<6 → false → no swap
    j=4 → compare 6,3 → 6<3 → false → no swap
    j=5 → compare 3,2 → 3<2 → false → no swap

    i=5 → [92, 90, 73, 28, 6, 3, 2]
*/  

/*
    Phase 7 (i=6)
    no swap arr is sorted
*/

// final sorted = [92, 90, 73, 28, 6, 3, 2]