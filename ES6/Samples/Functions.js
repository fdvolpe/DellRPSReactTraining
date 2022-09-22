//javascript
function f1(){
    console.log('Simple syntax');
}
f1();
///
var f2 = function(){
    console.log('Function using variable syntax');
}
f2();
///
let obj = {
    of1: function(){
        console.log("Function as value of an object");
    },
    of2: function(){
        console.log("Another function as value of an object");
    }
}

obj.of1();
obj.of2();
///
// =>

var af1 = () => console.log('Simple single-line arrow function');
var af2 = () => {
                    for(let i=0; i<5; i++)
                    {
                        console.log(i);
                    }
                }

//Addition using arrow function
var add = (num1,num2) => num1 + num2;
var square = (x) => x ** 2;
var square = (x) => { return x ** 2;}
///Call above arrow funcions
af1();
af2();
let sum = add(100,200);
let sq = square(25);
console.log(sum);
console.log(sq);