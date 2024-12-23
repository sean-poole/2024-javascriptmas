/*
Santa has been hacked! In the list of kids to deliver to, the Grinch has replaced some kids' names with his own name.

The original array looked like this: 
['James', 'Yi', 'Florinda', 'Fatima', 'Tariq', 'Jose', 'Clare', 'Gibbs']

**Task** 
Remove 'Grinch' from santasArr and put the missing kids back in their original places!

**Stretch goal**
- Do this without creating a new array and using no array methods other than .forEach().
*/

const santasArr = ['James', 'Yi', 'Grinch', 'Fatima', 'Tariq', 'Grinch', 'Clare', 'Grinch']

const missingNamesArr = ['Florinda', 'Jose', 'Gibbs']

// function removeGrinch(santasArr, missingNamesArr) {
//   let missingNamePointer = 0;

//   for (let i = 0; i < santasArr.length; i++) {
//     if (santasArr[i].toLowerCase() === "grinch") {
//       santasArr.splice(i, 1, missingNamesArr[missingNamePointer++]);
//     }
//   }

//   return santasArr;
// }

// console.log(removeGrinch(santasArr, missingNamesArr));


let index = 0;
santasArr.forEach((name, i) => santasArr[i] = (name.toLowerCase() === "grinch") ? missingNamesArr[index++] : santasArr[i]);

console.log(santasArr);
 

// Expected Output: ['James', 'Yi', 'Florinda', 'Fatima', 'Tariq', 'Jose', 'Clare', 'Gibbs']