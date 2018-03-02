// TEST CHANGES

console.log('Hello World!')
console.log('Hello World Again!!!');

// Multiples of 13
const numArr = [];
for(i = 0; i < 100; i++){
    if(i % 13 == 0)
        numArr.push(i);
} 
console.log(numArr);  

// myFunction
function myFunction(count){
    const countArr = [];
    for(let i = count; count <= 10; count++){
        i *= 6;
        countArr.push(i);
    }
    console.log(countArr);
}

myFunction(6);
