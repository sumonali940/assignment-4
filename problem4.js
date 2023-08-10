function findAddress(obj) {
   let outPut = '';
   const propertiesKeys = ["street", "house", "society"];

   for (let propertyValues of propertiesKeys) {
      if (obj.hasOwnProperty(propertyValues)) {
         outPut += obj[propertyValues] + ",";
      } else {
         outPut += "__,";
      }
   }
   return outPut.slice(0, -1);
}


const inputOne = { street: 10, house: '15A', society: 'Earth Perfect' };
const inputTwo = { street: 10, society: 'Earth Perfect' };
const inputThree = { street: 10 };

const outPutOne = findAddress(inputOne);
const outPutTwo = findAddress(inputTwo);
const outPutThree = findAddress(inputThree);

console.log(outPutOne); // Output: 10,15A,Earth Perfect
console.log(outPutTwo); // Output: 10,__,Earth Perfect
console.log(outPutThree); // Output: 10,__,__