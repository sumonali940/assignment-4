function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i];
        if(index <= 0){
            return 'invalid number';
        }     
    }
    if (arr[0] === arr[1]) {
        return 'equal';
    }
    return arr.sort((b, a) => a - b);
}

var myArray = [2, 6];
console.log(sortMaker(myArray));