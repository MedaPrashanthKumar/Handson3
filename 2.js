//sum of two numbers
/*

let first=prompt("enter first number");

let second=prompt("enter second number");
let sum =(+first ) + (+second);
alert(sum)
let result=confirm("would like difference?")
let diff=(+first ) - (+second);
result?alert(diff):console.log(); */


// switch statement

/*
let choice=prompt("enter operation");
let first,second;
switch(choice)
{
    case add :  first=prompt("enter first number");

               second=prompt("enter second number");
              console.log((+first ) + (+second));
              break;

    case sub :  first=prompt("enter first number");

               second=prompt("enter second number");
              console.log((+first ) - (+second));
              break;

    case mul :  first=prompt("enter first number");

               second=prompt("enter second number");
              console.log((+first ) * (+second));
              break;

    default:console.log("Invalid Operation");

} */

 
export function subOfTwo(a,b)
{
    return a-b;
}