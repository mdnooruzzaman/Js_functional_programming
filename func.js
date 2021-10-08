// function decleration 
const demo = function( x , y){
    return x+y ;
}
console.log(demo(2,3));

//Arrow function

const demoq = (x , y) => {
    return x+y;
}

console.log(demoq(2,3))

//Refferential transparancy

const e1 = 1;
const e2 = e1 + 2;
const e3 = e2 + e1 + 4;

console.log(e3);


//Side effect and pure function
var naame = '';
var age = '';
class person {
    constructor(naame , age){
        this.naame = naame ;
        this.age = age;
    }

    changeAge (value) {
        this.age = value;
    }
}

const p = new person('Zaiste' , 18);
p.changeAge(21);
console.log(p);

//slice is pure function and splice is unpure

const arr = [0,1,2,3,4,5];
const r = arr.slice(2,5);
console.log(r);

//splice 

const arr1 = [0,1,2,3,4,5];
arr1.splice(0,1)
arr1.splice(0,1)

console.log(arr1)

//date built-in function is unpure
const today = () => new Date();
console.log(today);

//Memomization

const memoized = (a , b) => {
    return a+ b;
}
console.log(memoized(1,2));
console.log(memoized(1,2)); // pulled from cache

// Higher order function

function multiplyBy(multiplier) {
    return function result(num) {
        return num * multiplier
    }
}
multiplyByThree = multiplyBy(3)
console.log(multiplyByThree(4));

//filter 
const ages = [32, 33, 16, 40];

ages.filter(checkAdult)    // Returns [32, 33, 40]

function checkAdult(age) {
  return age >= 18;
}

//map
//Returning new array
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newArr)