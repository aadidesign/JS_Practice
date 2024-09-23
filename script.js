

// let a = 300; // Outer variable 'a'
// if (true) {
//     let a = 10;  // This 'a' is block-scoped to the 'if' block
//     const b = 20; // 'b' is also block-scoped to the 'if' block
//     console.log("INNER:", a);  // Logs the inner 'a', which is 10
// }
// console.log("OUTER:", a);  // Logs the outer 'a', which is 300

// o/p-
// INNER: 10
// OUTER: 300







// var c = 300
// if (true){
//     let a=10;
//     const b=20;
//     c=30
// }
// console.log(c)

// o/p-
// 30












// const user = {
//     username: "aadi",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username} Welcome to Website`);
//         console.log(this); // Logs the entire user object
//     },
// };
// // To invoke the welcomeMessage function:
// user.welcomeMessage();

// o/p-
// aadi Welcome to Website
// {
//   username: 'aadi',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }











// let myArray = ["a","b","c"]
// console.log(myArray.length);
// for (let index=0; index<myArray.length; index++){
//     const element = myArray[index];
//     console.log(element);
// }

// o/p-
// 3
// a
// b
// c










// let i = 5;
// let j = 3;
// console.log(i + '*' + j + '=' + (i * j));

// o/p-
// 5*3=15











// VIMP
// for (let i=0 ; i<=10 ; i++){
//     console.log(`Outer loop value: ${i}`);
//     for (let j=0; j<=10; j++){
//         console.log(`Inner loop value ${j}`);
//     }
// }

// o/p-
// Outer loop value: 0
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 1
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 2
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 3
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 4
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 5
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 6
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 7
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 8
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 9
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10
// Outer loop value: 10
// Inner loop value 0
// Inner loop value 1
// Inner loop value 2
// Inner loop value 3
// Inner loop value 4
// Inner loop value 5
// Inner loop value 6
// Inner loop value 7
// Inner loop value 8
// Inner loop value 9
// Inner loop value 10










// for (let i=0; i<=10 ; i++){
//     const element=i;
//     console.log(element);
// }

// o/p-
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10










// Do While Loop--
// let Score=10;
// do{
//     console.log(`Score is ${Score}`);
//     Score++;
// }
// while(Score<=10);

// o/p-
// Score is 10







//While loop--
// let myArray = ['a','b','c']
// let arr=0
// while (arr<myArray.length){
//     console.log(`Value is ${myArray[arr]}`);
//     arr=arr+1
// }

// o/p-
// Value is a
// Value is b
// Value is c








// const shoppingCart = [{
//     itemName: "js course",
//     price: "2999"
// }];
// const priceToPay = shoppingCart.reduce((acc, item) => acc + Number(item.price), 0);
// console.log(priceToPay);

// o/p -
// 2999











// const myNums = [1,2,3]
// const myTotal = myNums.reduce(
//     (acc,curr)=>acc+curr, 0 )
// console.log(myTotal);

// o/p - 
// 6









// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc:${acc} , currval:${currval}`);
// return acc+currval
// } , 0 )
// console.log(myTotal);

// o/p-
// acc:0 , currval:1
// acc:1 , currval:2
// acc:3 , currval:3
// 6








// VIMP - (Use of Filter instead of map)
// const myNumbers= [1,2,3,4,5,6,7,8,9,10]
// const newNums= myNumbers
// .map ((num)=>num*10)
// .map ((num)=>num+1)
// .filter ((num)=>num>=40);
// console.log(newNums)

// o/p -
//      [
//      41, 51,  61, 71,
//      81, 91, 101
//      ]














// const myNumbers= [1,2,3,4,5,6,7,8,9,10]
// const newNums= myNumbers.map((num)=>{return num+10})
// console.log(newNums)
// 
// o/p - [
//        11, 12, 13, 14, 15,
//        16, 17, 18, 19, 20
//        ]








// VIMP
// const books = [
//     {
//         title: 'Book one',
//         genre: 'Fiction',
//         publish: 1981,
//         edition: 2004
//     }
// ];
// // Declare userBooks outside the array
// let userBooks = books.filter((bk) => bk.genre === 'Fiction');
// userBooks = books.filter((bk) => {
//     return bk.publish >= 1981 && bk.genre === 'Fiction';
// });
// console.log(userBooks);

// o/p-
//     [
//     { title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004 }
//     ] 








// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

// o/p-(6) [5, 6, 7, 8, 9, 10]







// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter(
//     (num) => num>4
// )
// console.log (newNums);

// o/p - (6) [5, 6, 7, 8, 9, 10]















// VIMP
// Accumulator & Current Value Code

// const array=[1,2,3,4];
// const initialValue=0;
// const sumWithInitial = array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, initialValue);
//     console.log(sumWithInitial);

// o/p -
// 10










// const programming= ["js","cpp"]
// for (const key in programming ){
//     console.log(programming[key]);
// }

// o/p-
// js
// cpp







// const myObj = {
//     js:'javascript',
//     cpp:'C++'
// }
// for (const key in myObj){
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }

// o/p-
// js shortcut is for javascript
// cpp shortcut is for C++







// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States');
// map.set('Fr', 'France');
// console.log(map);

// o/p-
// Map(3) { 'IN' => 'India', 'USA' => 'United States', 'Fr' => 'France' }





// const greetings = "Hello World!";
// for (const greet of greetings){
//     console.log (`Each char is ${greet}`)
// }
 
// o/p-
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !





// for(let index=1; index<=20; index++){
//     if (index==5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`)
// }

// o/p-
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5

