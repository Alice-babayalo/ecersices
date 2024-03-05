


// JavaScript Practice Questions
const number1 = 10;
const number2 =90;
// 1.    Create a function that returns the sum of 2 numbers
const sumOf2Numbers =(num1, num2)=>num1+num2;
console.log(number1+"+"+number2+"="+sumOf2Numbers(number1, number2));
// 2.    Create a function that returns the product of 2 numbers
const productOf2Numbers =(num1, num2)=>num1*num2;
console.log(number1+"*"+number2+"="+productOf2Numbers(number1, number2));
// 3.    Create a function that returns the difference of 2 numbers
const differenceOf2Numbers =(num1, num2)=>Math.abs(num1-num2);
console.log("The differnce between "+number1+" and "+number2+" is "+differenceOf2Numbers(number1, number2));
// 4.    Create a function that returns the division of 2 numbers. 
const divisionOf2Numbers =(num1, num2)=> num1/num2;
console.log(number1+"/"+number2+"="+divisionOf2Numbers(number1, number2));
//An array of numbers
const arr=[1,2,5,69,89,14,63,32,47];
console.log("The array of numbers is "+arr);
// 5.    Create a function that receives an array and returns the sum of all the elements inside that array.
function sumOfArrayNumbers(a){
  sum=0;
  for (let i=0; i<a.length; i++){
    sum+=a[i];
  }
  return sum;
}
console.log("The sum of elements in the array is "+sumOfArrayNumbers(arr));
// 6.    Create a function that receives an array and returns the greatest value inside that array
const Maxnumber=arr.reduce((a,b)=>Math.max(a,b));
console.log("The maximum number in the array is "+Maxnumber);
// 7.    Create a function that receives an array and returns the smallest number from that array
const Minnumber=arr.reduce((a,b)=>Math.min(a,b));
console.log("The minimum number in the array is "+Minnumber);
// 8.    Create a function that receives an array of numbers and returns the average of the numbers
const AverageOfNumber=(a)=>{
  return sumOfArrayNumbers(a)/a.length;
}
console.log("The average number in the array is "+AverageOfNumber(arr));
// 9.    Create a function that combines two arrays into one single array. 
//     Use the following arrays:
//     arrange = [a,b,c,d]
//     array to = [e,f,g]
let arrange = ['a','b','c','d'];
let arrayto = ['e','f','g'];
const combineArrays=arrange.concat(arrayto);
console.log("The combined arrays follow as "+combineArrays);
// 10.    Create a function that displays a pattern like this:
// * * * * *
// * * * * *
// * * * * *
// * * * * *
let im='';
const star=()=>{
  for (let j=0;j<5;j++){
   for(i=0;i<5;i++){
    im+='* ';
   }
   im+='\n';
  }
  console.log(im);;
}
console.log("The first pattern:");
star();
// 11.    Create a function that displays a pattern like this:
// 1 1 1 1 
// 1 1 1
// 1 1 
// 1
let example="";
const pattern1=()=>{
  for(j=4;j>0;j--){
    for (let k=j;k>0;k--){
      example += '1 ';
    }
    example += '\n';
  }
  console.log(example);
}
console.log("The second pettern:");
pattern1();
// 12.    Create a function that displays a pattern like this:
// 1 1 1 1 
// 1 1 1 0  
// 1 1 0 0  
// 1 0 0 0  
let strr='';
const pattern2 =()=>{
  for (let i=0; i<4;i++){
      for (let j=4; j>i; j--){
          strr += '1 ';
      }
      if(i>0){
          for (let l=1;l<=i; l++){
              strr += '0 ';
          }
      }
      strr +='\n';
  }
  console.log(strr);
}
console.log("The third pattern:");
pattern2();
// 13.    Create a function that displays a pattern like this:
// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1
let strrr='';
const patter3=()=>{
  for(j=0;j<6;j++){
    for(k=0;k<6;k++){
      if(j==0||j==5){
        strrr+="1 ";
      }
      else{
        if(k==0||k==5){
          strrr += "1 ";
        }
        else {
          strrr += "0 ";
        }
      }
    }
    strrr+='\n';
  }
  console.log(strrr);
}
console.log("The fourth pattern:");
patter3();
// 14.    Create a function that displays a pattern like this:
//       1 
//     1
//   1 
// 1
let sttr='';
const pattern4=()=>{
  for(j=0;j<4;j++){
    for(k=3;k>j;k--){
      sttr+="  ";
    }
    sttr+='1 '+'\n';
  }
  console.log(sttr);
}
console.log("The fifth pattern:");
pattern4();
// 15.    Given an array like this:
// var array = [1,3,4,3,7,8,0,12,19];    
// Create a function to reverse the order of the elements inside the given array.
var array = [1,3,4,3,7,8,0,12,19];
const reverseOrder=(a)=>{
  console.log(a.reverse());
}
console.log("The order of the array before: "+array);
console.log("After reversing: "+reverseOrder(array));
// 16.    Given an array like this: 
// var some numbers = [3,4,8,2,1,2,2,6,3,4];
// a.    Create a function to sort and arrange these elements of the array in ascending order.
// b.    Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted arra//
/// c.    From the same sorted array, also display the first 3 numbers.
var somenumbers = [3,4,8,2,1,2,2,6,3,4];
let ans=a=>{
  let b=a.sort();
  return b;
}
console.log(somenumbers);
console.log(ans(somenumbers));
console.log(somenumbers.length);
const a1=somenumbers.slice(7,10);ans(somenumbers);
const a4=ans(somenumbers).slice(0,3);
const a3=a1.concat(a4);
console.log(a3);
// 17.    Create a function that determines the age classification of people:
// Bellow are classifications according to specific conditions:
 
//     MIMICRY:             0 - 12
//     SELF-DISCOVERY:     13 - 19
//     COMMITMENT:         20 - 45
//     LEGACY:            46 - Above
function ageClassification(a){
let classification='';
if(a>=0&&a<=12){
  classification='MIMICRY';
}
else if (a>12&&a<=19){
  classification='SELF-DISCOVERY';
}
else if (a>19&&a<=45){
  classification='COMMITMENT';
}
else if (a>45){
  classification='LEGACY';
}
else {
  console.log("Please enter a valid age!");
}
return classification;
}
const age=45;
console.log("The age is "+age+", thus the classification is "+ageClassification(age));
// 18.    Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
//     How to calculate Body Mass Index:
//     BMI = weight(kg) / (height(m) x height(m))

//19.    Create a function that counts the number of characters that make up a string.
// N.B: Add conditions that will make sure that spaces will not be counted in the number of characters.
// Example:
// For the string: “Hello World”
// The number of characters is 10
const sss="   Umuhozawase Alice";
const countNonspace = a =>{
  let countString=0;
  for (i=0;i<a.length;i++){
    if (a[i] === ' '){
      continue;
    }
    countString=countString+1;
  }
  return countString;
}
console.log("The number of letters in '"+sss+"' is "+countNonspace(sss));
console.log("The number of characters in 'Hello World' is "+countNonspace('Hello world'));
// 20.    Create a function that displays an even number between 1 and 100
console.log("Even numbers between 1 and 100 are: ")
const evenNumber =()=>{
  for (i=1; i<=100; i++){
    if(i%2==0){
      console.log(i);
    }
  }
}
evenNumber();
// 21.    Write a function that calculates the square of a number.
const squareNumber =a=>a*a;
const number=10;
console.log("the square of a given number is "+squareNumber(number));
// 22.    Write a function that checks if a number is even.
const checkEven=a=>{
  if (a%2==0){
    console.log("It is an even number");
  }
  else {
    console.log("The number us not even");
  }
}
checkEven(number);
// 23.    Write a function that checks if a number is odd.
const checkOdd=a=>{
  if (a%2==1){
    console.log("It is an Odd number");
  }
  else {
    console.log("The number us not Odd");
  }
}
checkOdd(number);
// 24.    Write a function that returns the maximum of two numbers.
const maxOfTwoNUmbers=(a,b)=>{
  if(a>b){
    console.log("The maximum is "+a);
  }
  else if(b>a){
    console.log("The maximum is "+b);
  }
  else {
    console.log("The two numbers are equal! Make sure the two numbers are different!")
  }
}
let n1=56;
let n2=65;
maxOfTwoNUmbers(n1,n2);
// 25.    Write a function that returns the minimum of two numbers.
const minOfTwoNUmbers=(a,b)=>{
  if(a<b){
    console.log("The minimum is "+a);
  }
  else if(b<a){
    console.log("The minimum is "+b);
  }
  else {
    console.log("The two numbers are equal! Make sure the two numbers are different!")
  }
}
n1=56;
n2=5;
minOfTwoNUmbers(n1,n2);
// 26.    Write a function that calculates the factorial of a number.
const factorial=(n)=>{
  let product=1;
  for(i=1;i<=n;i++){
    product =product *i;
  }
  return product;
}
console.log("The factorial of "+4+" is "+factorial(4));
///////////////////////////////////////////////////////////////////////////////////////////////// 27.    Write a function that reverses a string

///////////////////////////////////////////////////////////////////////////////////////////////// 28.    Write a function that checks if a string is a palindrome.
// 29.    Create a function that displays odd numbers between 1 and 100
console.log("odd numbers between 1 and 100 are: ")
const oddNumber =()=>{
  for (i=1; i<=100; i++){
    if(i%2==0){
      console.log(i);
    }
  }
}
oddNumber();
// 30.    Create a function that displays multiples of 5
console.log("Multiples of 5 between 1 and 100 are: ")
const multiplesOf5 =()=>{
  for (i=1; i<=100; i++){
    if(i%5==0){
      console.log(i);
    }
  }
}
multiplesOf5();
// 31.    Create a function that returns the square root of a given number.
const squareRoot=(a)=>{
  return Math.sqrt(a)
}
console.log("The square root of "+ 225+ " is "+squareRoot(225));
// 32.    Create a function that receives two numbers and returns the bigger number.
maxOfTwoNUmbers(45,85);
// 33.    Create a function that receives a string and changes it into capital letters.
let straw="umuntu muto";
const CapitalLetters=a=>{
  console.log(a.toUpperCase());
}
CapitalLetters(straw);
// 34.    Create a function called “stringModifier”. This function allows a user to provide a string,
// and then provide the position they want to modify, and a character to replace the modified one from the string.
// This function will receive 3 arguments the first argument will be a string, the second will be the position of a
// specific.

// 35.    Write a function that counts the number of vowels in a string.
const countVo=(a)=>{
  let count=0;
  for(i=0;i<a.length;i++){
    if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){
      count+=1;
    }
  }
  return count;
}
let ex='Umuhozawase Alice';
let exa=ex.toLowerCase();
console.log("The number of vowels in Umuhozawase is " + countVo(exa));
// function findVowel(name){
//   var arrayName= name.split();
//   var vowel=['a','e','i','u','o','A',"E",'U',"O","I"];
//   let number=0
//   for(let i=0; i<arrayName.length;i++){
//    if(arrayName.includes(vowel)){
//     number++;
//   }
//   }
//   return number;
// }
// const nameV="Umuhozawase";
// console.log("The number of vowerls in "+nameV+" is "+findVowel(nameV));
// 36.    Write a function that counts the number of consonants in a string.
const countCons=(a)=>{
  let count=0;
  for(i=0;i<a.length;i++){
    if(a[i]=='b'||a[i]=='c'||a[i]=='d'||a[i]=='f'||a[i]=='g'||
    a[i]=='h'||a[i]=='j'||a[i]=='k'||a[i]=='l'||a[i]=='m'||
    a[i]=='n'||a[i]=='p'||a[i]=='q'||a[i]=='r'||a[i]=='s'||
    a[i]=='t'||a[i]=='v'||a[i]=='w'||a[i]=='x'||a[i]=='y'||a[i]=='z'){
      count+=1;
    }
    else if(a[i]==' ') {
     continue;
    }
  }
  return count;
}
let exy='Umuhozawase Alice';
let exay=exy.toLowerCase();
console.log("The number of vowels in Umuhozawase is " + countCons(exay));
// 37.    Write a function that finds the index of a given character in a string.
// 38.    Write a function that removes duplicates from an array.
// 39.    Write a function that checks if a given value is present in an array.
// 40.    Write a function that squares each element of an array.
// 41.    Write a function that returns the first n elements of an array.
// 42.    Write a function that removes the last element from an array.
// 43.    Write a function that sorts an array of numbers in ascending order.
// 44.    Write a function that checks if all elements in an array are positive.
// 45.    Write a function that calculates the sum of the even numbers in an array.
// 46.    Write a function that converts an array of strings to uppercase.
// 47.    Write a function that generates a random number between a given range.
// 48.    Write a function that returns the reverse of an array.
// 49.    Write a function that calculates the Fibonacci sequence up to n numbers.
// 50.    Write a function that checks if an array is sorted in ascending order.
// 51.    Write a function that filters out negative numbers from an array.
// 52.    Write a function that calculates the square root of a number.
// 53.    Write a function that finds the median of an array of numbers.
// 54.    Write a function that capitalizes the first letter of each word in a sentence.
// 55.    Write a function that checks if a given year is a leap year.
// 56.    Write a function that finds the intersection of two arrays.
// 57.    Write a function that checks if a number is prime.
// 58.    Write a function that returns the power of a number (base, exponent).
// 59.    Write a function that calculates the area of a rectangle.
// 60.    Write a function that calculates the perimeter of a rectangle.
// 61.    Write a function that checks if a given string contains only digits.
// 62.    Write a function that counts the number of words in a sentence.
// 63.    Write a function that converts a temperature from Celsius to Fahrenheit.
// 64.    Write a function that generates a pyramid pattern of a given height.
// 65.    Switch Case:
// a.    Calculator Switch:
// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.
//I am going to make a calculator which add, subtract, devide and multiply using swicth control structure
const numA=96;
const numB=3;
const operator="*";
operator?console.log("You choose "+operator):console.log("Please choose an operator");
let operation;
switch(operator){
    case '+':
        operation=numA+numB;
        break;
    case '-':
        operation=numA-numB;
        break;
    case '*':
        operation=numA*numB;
        break;
    case '/':
        operation=numA/numB;
        break;
    default:
        console.log("Please choose an arthimetic operator!");
        break;
}
console.log(numA+operator+numB+"="+operation);
console.log("Thank you!")
// Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.
const day=1;
const daysOfTheWeek=(a)=>{
  switch (a){
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
    break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
    console.log("A day of the week has seven days make sure you entered an integer ranging from one to seven inclusvely");
  }
  
}
console.log("According to the number entered, It is  "+daysOfTheWeek(day));
// c.    Grade System:
// Design a grading system that takes a student's score as input and returns the corresponding grade using a switch case.
const marks=88;
let ama;
if (marks>=80&&marks<=100){
  ama=1;
}
else if (marks<80&&marks>=60){
  ama=2;
}
else if (marks>=50&&marks<60){
  ama=3;
}
else if(marks<50&&marks>=40){
  ama=4;
}
else if (marks<40&&marks>=20){
  ama=5;
}
else if (marks<20&&marks>=0){
  ama=6;
}
else{
  console.log("Enter valid marks out of 100");
}
const StudentGRade=(a)=>{
  let grade='';
  switch(a){
    case 1:
      grade='A';
      break;
    case 2:
      grade='B';
      break;
    case 3:
      grade='C';
      break;
    case 4:
      grade='D';
      break;
    case 5:
      grade='E';
      break;
    case 6:
      grade='F';
      break;
    default:
      console.log("Invalid grade ranking!");
      break;
  }
  return grade;
}
console.log("With the marks "+marks+", your grade is "+StudentGRade(ama));

// d.    Traffic Light:
// Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, and 3 for green).

// e.    Month Name:
// Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.

// f.    Simple Menu:
// Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.

// g.    Currency Converter:
// Build a currency converter that converts between different currencies using a switch case. Users should input the amount, source currency, and target currency.

// h.    Shape Area:
// Write a program that calculates and outputs the area of different shapes (circle, square, triangle) based on user input using a switch case.

// i.    Season Detector:
// Create a program that takes a month as input and outputs the corresponding season (spring, summer, fall, winter) using a switch case.

// 66.    Loops on Arrays:
// a.    Array Sum:
// Write a function that calculates the sum of all elements in an array.

// b.    Even Numbers:
// Create a program that prints all even numbers from an array.

// c.    Array Reverse:
// Implement a function to reverse the elements of an array.

// d.    Array Filter:
// Write a program that filters out all elements less than 10 from an array.

// e.    Array Average:
// Calculate and print the average of elements in an array.

// f.    Array Search:
// Implement a function that searches for a specific element in an array and returns its index.

// g.    Duplicate Elements:
// Write a program to find and print duplicate elements in an array.

// h.    Array Sorting:
// Sort an array of numbers in ascending order using any sorting algorithm.

// 67.    Loops on Objects:
// a.    Object Properties:
// Write a program to print all the properties of an object.
// function objectfunction(){
//   const objExam=[
//     {
//       name:'Alice Umuhozawase',
//       age: 20,
//       session: 'BACKEND',
//       opt: 'Debate'
//     },
//     {
//       name: 'Sandrine Irakoze',
//       age: 25,
//       session: 'BACKEND',
//       opt: 'UI project'
//     },
//     {
//       name:'Esperance Uwicyeza',
//       age: 22,
//       session: 'FRONTEND',
//       opt: 'Bckend project'
//     },
//     {
//       name:'Queen Umuvandimwe',
//       age: 19,
//       session: 'BACKEND',
//       opt: 'Debate'
//     },
//     {
//       name:'Charity Ikirezi',
//       age: 23,
//       session: 'FRONTEND',
//       opt: 'Essay writing'
//     },
//     {
//       name:'Rosine Uwumukiza',
//       age: 31,
//       session: 'FRONTEND',
//       opt: 'Essay writing'
//     }
//   ]
// }

// // b.    Object Values:
// // Create a function that prints all the values of an object.

// function displayFunction(){
//   let a=objectfunction.objExam.length;
//   console.log(a);
//   for (let i=0;i<a;i++){
//     console.log(objectfunction.objExam[i])
//   }
// }
// displayFunction();
// c.    Object Key Search:
// Implement a function that searches for a specific key in an object.

// d.    Object Manipulation:
// Write a program that modifies the values of an object based on certain conditions.

// e.    Object Filtering:
// Create a function that filters out key-value pairs from an object based on a condition.

// f.    Object Merging:
// Combine two objects into a single object.

// g.    Object Size:
// Write a program that calculates and prints the number of key-value pairs in an object.

// h.    Nested Object:
// Access and print values from a nested object.

// i.    Object Sorting:
// Sort the keys of an object in alphabetical order.

// j.    Object Transformation:
// Create a function that transforms the values of an object (e.g., convert all values to uppercase).

// 68.    Functions Programming:
// a.    Power Function:
// Implement a function to calculate the power of a number.

// b.    Array Max and Min:
// Write a function that finds the maximum and minimum values in an array.

// c.    The sum of Digits:
// Calculate the sum of digits of a given number using a function.

// d.    GCD (Greatest Common Divisor):
// Write a function to find the greatest common divisor of two numbers.

// e.    Random Number Generator:
// Create a function that generates a random number within a specified range.

 

// Download JavaScript QuestionsDownload Download JavaScript Questions


