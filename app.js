console.log('Hello World!')
console.log('Hello World Again!!!');

// Uniform Array
function uniformArr(num){
    const uniArr = [];
    for(i = 0; i < num; i++){
        uniArr.push(num);
    }
    console.log(uniArr);
}
uniformArr(4);
uniformArr(7);

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

// Car Object
const car = {
    make: 'Toyota',
    model: 'Corolla',
    color: 'Blue',
    engine: 'v8'
}
console.log(car);

// Person Object
const person = {
    fName: 'Stephens',
    lName: 'Jean-Jacques',
    sex: 'Male',
    race: 'African American',
    disabled: false
}
console.log(person);