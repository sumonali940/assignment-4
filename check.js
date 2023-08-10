function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "Invalid Input";
    }

    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid Input";
    }

    if (arr[0] === arr[1]) {
        return "equal";
    }

    return [Math.max(...arr), Math.min(...arr)];
}

console.log(sortMaker([2, 3]));     // [2, 3]
console.log(sortMaker([4, 2]));     // [2, 4]
console.log(sortMaker([4, 4]));     // equal
console.log(sortMaker([1, 2]));     // [1, 2]
console.log(sortMaker([4, -2]));    // Invalid Input
console.log(sortMaker([0, 1]));     // [0, 1]
