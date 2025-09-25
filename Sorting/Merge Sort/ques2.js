// WAP of merge sort with recursionn

function merge(left, right) {
    let i = 0, j = 0;
    let result = []

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++;
        }
        else {
            result.push(right[j])
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i])
        i++;
    }

    while (j < right.length) {
        result.push(right[j])
        j++
    }

    return result;
}

function mergeSort(array) {

    if (array.length <= 1) {
        return array
    }

    let n = array.length
    let mid = Math.floor(n / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

let a = [5, 7, 2, 7, 0, -5.2]

console.log(mergeSort(a))