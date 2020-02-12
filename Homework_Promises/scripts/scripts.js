/* function testNumber() that takes a number as an argument and returns a 
Promise that tests if the value is less than or equal to 10. If it is, it's successful, 
if not it should be rejected. (The function should wait at least 2 seconds to do the calculation).*/
let startTime = new Date().getTime()
console.log(`Start time is ` + startTime);

function testNum (num, timeOut) {
    return new Promise((resolve, reject) => 
    {
        setTimeout(()=>{
            if (num <= 10){
                resolve('Resolved');
            }
            else {
                reject('Rejected');
            }
        }, timeOut)
    });
}

testNum(7, 2000)
.then(succes=>{
    console.log(succes);
})
.catch(error=>console.log(error))
.finally(()=>console.log(`Everything is done at: ${new Date()}`));


// ------------------------------------------------------------------------------//

/* function changeAllToCaps() that will take an array of words (strings), make them all caps. 
Be sure to check if all the items in the array are strings. 
If at lest one is not a string, reject this promise, if all are strings return the array as changed*/

let str = ["avvvvvvv", "vvvvvvvv", "bbbbbb"]

function changeAllToCaps(strings, timeOut) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            for (let string of strings){
            if (typeof string !== 'string'){
                reject("Please enter a word, not a number!");
            }}
            {
                resolve(strings);
            }
        }, timeOut)
    })
.then(succes=>{
    let succestToUpperCase = []
    for (let x of succes){
        succestToUpperCase.push(x.toUpperCase())
    }
    succes = succestToUpperCase;
    console.log(succes)
    return succes; 
}
)
.catch(error=>console.log(error))
.finally(()=>console.log(`The strings in the array have been made in upper case at: ${new Date()}`))}

changeAllToCaps(str, 3000)

// -------------------------------------------------------------------------------------------------------

/*Write a function that will take an array of words (strings), and sort them alphabetically in an ascending order (A, B, C...).
 Check if there are 2 of more words in the array. If there is 1 or less, 
 log that there are not enough words to be sorted. If there are enough words, return them as sorted.*/

function sortStrings(arr, timeOut) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            for (let el of arr){
            if (typeof el !== 'string'){
                reject("Please enter a word, not a number!");
            }
            if (arr.length < 2){
                reject("There are not enough words to be sorted!");
            }}
            {
                resolve(arr);
            }
        }, timeOut)
    })
.then(succes=>{
    succes.sort(function(a,b){
        return a.localeCompare(b);
    })
    console.log(succes)
})
.catch(error=>console.log(error))
.finally(()=>console.log(`Sorting of the array is done at: ${new Date()}`))}

sortStrings(str, 5000)

// Connecting these functions by chaining

let str1 = ["cccccccc", "vvvvvvvv", "sssssss", "aaaaaaa"]

changeAllToCaps(str1, 7000)
.then(succes=>sortStrings(succes))
.finally(()=>console.log(`Everything is done for: ${(new Date().getTime() - startTime)/1000} seconds`));
