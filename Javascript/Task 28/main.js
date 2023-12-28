// let balance = 1000;
// balance -= 500;
// console.log(balance);
// balance -= 10;
// console.log(balance);
// balance -= 200;
// console.log(balance);

// let balance = 1000;
// function getBalance() {
//     console.log(balance);
// }
// balance -= 500;
// getBalance()
// balance -= 10;
// getBalance()
// balance -= 200;
// getBalance()

// let startVal = 0;
// let endValue = 20;
// startVal += 1;
// console.log(startVal);
// startVal += 1;
// console.log(startVal);
// startVal += 1;
// console.log(startVal);

// let startVal = 0;
// let endValue = 20;
// function customLoop() {
//     startVal += 1;
//     console.log(startVal);
// }
// customLoop()
// customLoop()
// customLoop()

// let startVal = 0;
// let endValue = 20;
// function customLoop() {
//     startVal += 1;
//     console.log(startVal);
//     customLoop()
// }
// customLoop()

// let startVal = 0;
// let endValue = 100;
// function customLoop() {
//     if (startVal < endValue) {
//         startVal += 1;
//         console.log(startVal);
//         customLoop()
//     }
// }
// customLoop()

// let startVal = 0;
// let endValue = 100;
// function customLoop() {
//     if (startVal < endValue) {
//         startVal += 1;
//         if (startVal % 2 === 0) {
//             console.log(startVal);
//         }
//         customLoop()
//     }
// }
// customLoop()

// let startVal = 0;
// let endValue = 100;
// function customLoop() {
//     if (startVal < endValue) {
//         startVal += 1;
//         if (startVal % 2 === 0) {
//             console.log(startVal);
//         }
//         customLoop()
//     }
// }
// customLoop()

// let startVal = 0;
// const endValue = 100;
// while (startVal < endValue) {
//     startVal += 1;
//     if (startVal % 2 === 0) {
//         console.log(startVal);
//     }
// }

// let start = 0
// let end = 100
// while (start < end) {
//     start++;
//     console.log(start);
// }

// let val = "hello world"
// let i = 0
// while (i < val.length) {
//     console.log(i)
//     i++;
// }

// let val = "hello world";
// let i = 0;
// while (i < val.length) {
//     console.log(val[i])
//     i++;
// }

// let val = "hello world";
// let i = val.length;
// while (i >= 0) {
//     console.log(val[i]);
//     i--;
// }

// let val = "hello world";
// let result = ""
// let i = val.length -1;
// while (i >= 0) {
//     // result = result +val[i]
//     result += val[i]
//     i--;
// }
// console.log(result);

// while (true) {
//     let val = +prompt("5 + 5 = how much will be?");
//     if (val === 10) {
//         alert("Correct Answer")
//         break;
//     } 
//     else {
//         alert("Wrong Answer")
//         continue;
//     }
// }

// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// function printNumbers(i) {
//     if (i < 10) {
//         console.log(i);
//         printNumbers(i + 1); 
//     }
// }
// printNumbers(0);

// function printNumbers(i) {
//     if (i < 10) {
//         console.log(i);
//         i++;
//         printNumbers(i);
//     }
// }
// printNumbers(0);

// let number = 20;
// let num = number;
// let i = 0;
// while (i < num) {
//     if (10 % i === 0 && i !==1 && i !== number) {
//         console.log(i)
//     }
//     i++;
// }

// let n = 42;
// let i = n;
// while (i >= 1) {
//     if (i !== 1 && prime(i)) {
//         console.log(i);
//     }
//     i--;
// }
// function prime(num) {
//     let i = 2;
//     while (i <= num ** 0.5) {
//         if (num % i === 0) {
//             return false;
//         }
//         i++;
//     }
//     return true;
// }






// let num = 15;

// while (num > 1) {

//     let i = num;
//     let count = 0;
//     while (i > 0) {
//         if (num % i === 0) {
//             count += 1;
//         }
//         i--;
//     }
//     if (count === 2) {
//         console.log(num, "sadedir");
//     }
//     num--;
// }



// Task-1
// Task-2
// Task-3
// Task-4
// Task-5
// Task-6
// Task-7
// Task-8
// Task-9
// Task-10