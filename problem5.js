function canPay(changeArray, totalDue) {
    let totalRetail = 0;
    if (changeArray.length === 0) {
        return 'First Imput is empty';
    }
    for (let i = 0; i < changeArray.length; i++) {
        let totalIndex = changeArray[i];
        totalRetail = totalRetail + totalIndex;
    }
    if (totalRetail >= 10) {
        return true;
    }
    else {
        return false;
    }

}

const firstInput = [1, 3, 5]
const secondInput = 10;
console.log(canPay(firstInput, secondInput));