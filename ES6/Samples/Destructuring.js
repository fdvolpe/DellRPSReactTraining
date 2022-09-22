let a = [10,202,30];
let b = {
    k1:'abc',
    k2: 100,
    k3: ['Tom','Dick','Harry'],
    k4: {sk1: 'Meena', sk2: 1001}
}

b.k1 = 'ssm';
a[1] = 20;
b.k3[1] = 'Jerry';
///
// Destructuring for easy assignment

let arr = ["Hello", "World"];
var v1 = arr[0];
var v2 = arr[1];

var [greeting, greeter] = arr;
console.log(greeting);
console.log(greeter);

//Destructuring with missing values
let colors = ["Red","Blue","Yellow","Green"];
let [r,bl,,g] = colors;
console.log(r);
console.log(bl);
console.log(g);

let random = ["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10"];

function f1(...args){
    console.log(args);
}

f1(10);
f1(10,20,30);
f1();

//Destructuring usins spread operator
let [i1,i2,i3,,,...args] = random;

console.log(i1);
console.log(i3);
console.log(args);

/// Destructuring to swap 2 values
function swap(x,y){
    console.log('Initial value: ' +x+', '+y);
    [x,y] = [y,x];
    console.log('Swapped value: '+x+', '+y);
}

swap('Flavio','Volpe');