// const months = [534, 53453, 353, 435, 53];
// months.sort((b, a) => a- b );
// console.log(months);



function sortMaker(arr) {
    if(arr[0] === arr[1]){
       console.log('equal'); 
    }
    if(arr.indexOf(-1) < 0){
        let result =  arr.sort((b, a) => a - b);
        console.log(result);
    }
}

var myArray = [2, -2];


const test = sortMaker(myArray);
console.log(test);

