console.log('Hello World!')
console.log('Hello World Again!!!');

// Multiples of 17
const numArr = [];
for(i = 0; i < 100; i++){
    if(i % 17 == 0)
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

// Person Object
const person = {
    fName: 'Stephens',
    lName: 'Jean-Jacques',
    sex: 'Male',
    race: 'African American',
    disabled: false
}
console.log(person);