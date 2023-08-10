function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'This is not a number';
    }
    else {
        let cube = number * number * number;
        return cube;
    }
}

cubeNumber(3);



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
sortMaker(myArray);



function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Input should be two strings';
    }

    if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}

matchFinder('John Doe', 'ohn');
matchFinder('JavaScript', 'Code');
matchFinder('Peter Parket', 'Pen');
matchFinder('Peter Parker', 'pet');




function findAddress(obj) {
    let outPut = '';
   if(obj.street){
       outPut += obj.street + ",";
   }else{
       outPut += '__,';
   }

  if(obj.house){
       outPut += obj.house + ",";
   }else{
       outPut += '__,';
   }

  if(obj.society){
       outPut += obj.society;
   }else{
       outPut += '__';
   }
   return outPut;
}


const inputOne = { street: 10, house: '15A', society: 'Earth Perfect' };
const inputTwo = { street: 10, society: 'Earth Perfect' };
const inputThree = { street: 10 };

findAddress(inputOne);
findAddress(inputTwo);
findAddress(inputThree);





 function canPay(changeArray, totalDue) {
    let totalRetail = 0;
    if (changeArray.length === 0) {
        return 'First Imput is empty';
    }
    for (let i = 0; i < changeArray.length; i++) {
        let totalIndex = changeArray[i];
        totalRetail = totalRetail + totalIndex;
    }
    if (totalRetail >= totalDue) {
        return true;
    }
    else {
        return false;
    }

}

const firstInput = [1, 3, 5]
const secondInput = 10;
canPay(firstInput, secondInput);



