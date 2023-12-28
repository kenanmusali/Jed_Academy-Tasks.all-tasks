// task-01
// console.log("my name is Tom");
 

// task-02//
// let name = "Tommy";
// console.log(name);
 

// task-03
// 2user, person, console, $add
 

// task-04
// let bookPrice = 750;
// let bookAmount = 14;
// let totalValue = bookPrice * bookAmount;
// console.log("The total value of all books: " + totalValue + "AZN");
 

// task-05
// let kmhSpeed = 75;
// const conversionFactor = 1 / 3.6;
// let lastName = "Turing";
// let result = "Sizin adınız " + firstName + " " + lastName + " Tanışlığımıza çox şadam!";
// console.log(result);
 

// task-09
// let firstName = prompt ("Enter your Name: ");
// let lastName = prompt ("Enter your Last Name: ");
// let promptMessage = "Sizi bir daha görməyimizə şadıq, ";
// let result = promptMessage + firstName + " " + lastName;
// console.log(result);
 

// task-10
// let fullName = "Murad Orucov"
// let letterCount = fullName.replace(/ /g, '').length;
// console.log("Number of letters in the name: " + letterCount);
 

// task-11
// let fullName = prompt("Enter your full name: ");
// let names = fullName.split();
// let firstNameInitial = names[0].charAt(0);
// let lastNameInitial = names[names.length - 1].charAt(0);
// console.log("Letters: " + firstNameInitial + lastNameInitial);
 

// task-12
// let firstName = prompt ("Enter your Name: ");
// let lastName = prompt ("Enter your Last Name: ");
// let result = lastName + " " + firstName;
// console.log(result);
 
// task-13
// let firstName = prompt ("Enter your Name: ");
// let result = ("Salam, ") + firstName;

// task-14
// let number1 = prompt("Enter the first number: ");
// let number2 = prompt("Enter the second number: ");
// strings to numbers
// let parsedNumber1 = parseFloat(number1);
// let parsedNumber2 = parseFloat(number2);
// Addition
// let addition = parsedNumber1 + parsedNumber2
// console.log(addition);
// Subtraction
// let subtraction = parsedNumber1 - parsedNumber2
// console.log(subtraction);
//  Multiplication
// let multiplication = parsedNumber1 * parsedNumber2
// console.log(multiplication);
//  Division
// let division = parsedNumber1 / parsedNumber2
// console.log(division);

// task-15
// let num1 = 12345
// let num2 = 98765
// let result = (num1 - num2) / 6
// console.log(result);

// task-16
// let result = "" + 1 + 0; console.log(result);
// let result = "" - 1 + 0; console.log(result);
// let result = true - false; console.log(result);
// let result = 6 / "3"; console.log(result);
// let result = 4 + 5 + "px"; console.log(result);
// let result = "$" + 4 + 5; console.log(result);
// let result = "4" - 2; console.log(result);
// let result = "4px" - 2 + "px"; console.log(result);
// let result = 7 / 0; console.log(result);
// let result = "-9" + 5; console.log(result);
// let result = "-9" - 5; console.log(result);
// let result = null + 1; console.log(result);
// let result = undefined + 1; console.log(result);

// task-17
// let a = +prompt("Enter the number: ")
// let b = +prompt("Enter the number: ")
// let c = +prompt("Enter the number: ")
// let d = +prompt("Enter the number: ")
// console.log(a + b + c + d)

// task-18
// let fullName = prompt("Enter your full name")
// let result = ("Salam " + fullName + "!")
// let fullName = prompt("Enter your full name");
// let result = ("Salam " + fullName + "!");
// console.log(result);

// task-19
// let income = +prompt("In Come Money >> ")
// let income = +prompt("In Come Money >> ");
// let left = 530;
// let right = 90;
// let a = parseInt(income)
// let b = l(income.tofixed(2))
// console.log(b + " manat")
// let a = parseInt(income);
// let b = l(income.tofixed(2));
// console.log(b + " manat");

// task-20
//
// let value = prompt("daxili edin!", "530.90");
// let arr = value.split(".");
// console.log(`${arr[0]} manat ${arr[1]} qepik`);

//task-21
//
// let value = 1350;
// console.log(value - (value * 13 / 100));

//task-22
//
// let fullName = "Ivan Pyotor Sergeevich";
// let arr = fullname.split(" ");
// let lastName = arr[0];
// let firstNameFirstletter = arr[1][0];
// let FatherNameFirstletter = arr[2][0];
// console.log(`${lastName} ${firstNameFirstletter}. ${FatherNameFirstletter}`);

//task-25
// let value = prompt("number", "45 46 47");
// let value = prompt("Enter three number", "45 46 47");
// let numberList = value.split(" ")
// let num1 = numberList[0];
// let num2 = numberList[1];
// let num3 = numberList[2];
// if (num2 > num1 && num2 < num3) {
//     console.log(` Ortancil eded ${num2}-dir, imput:${value} `)
// }
// else if (num2 < num1 && num2 > num3) {
//     console.log(` Ortancil eded ${num2}-dir, imput:${value} `)
// }
// else if (num1 < num2 && num1 > num3) {
//     console.log(` Ortancil eded ${num1}-dir, imput:${value} `)
// }
// else if (num1 > num2 && num1 > num3) {
//     console.log(` Ortancil eded ${num1}-dir, imput:${value} `)
// }
// else if (num3 > num2 && num3 < num2) {
//     console.log(` Ortancil eded ${num3}-dir, imput:${value} `)
// }
// else if (num3 > num2 && num3 < num2) {
//     console.log(` Ortancil eded ${num3}-dir, imput:${value} `)
// }
// else if (num3 < num2 && num3 > num1) {
//     console.log(` Ortancil eded ${num3}-dir, imput:${value} `)
// if (numberList.length === 3) {
//     if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
//         console.log(` Ortancil eded ${num2}-dir, imput:${value} `);
//     }
//     else if (num1 < num2 && num1 > num3 || num1 > num2 && num1 < num3) {
//         console.log(` Ortancil eded ${num1}-dir, imput:${value} `);
//     }
//     else if (num3 > num2 && num3 < num2 || num3 < num2 && num3 > num1) {
//         console.log(` Ortancil eded ${num3}-dir, imput:${value} `);
//     }
// }
// else {
//     consolo.log(`Yalnish deyer`)
//     consolo.log(`Yalnish deyer:`);
// }

//task-26
//

//task-27
//
// let id = prompt('Enter product id:');
// switch (id) {
//   case '1':
//     alert('Available 10 pcs.');
//     break;
//   case '2':
//     alert('Available 256 pcs.');
//     break;
//   case '3':
//     alert('Available 53 pcs.');
//     break;
//   case '4':
//     alert('There are 3 available.');
//     break;
//   default:
//     alert('Out of stock');
//     break;
// }

//task-28
//
// let genderId = prompt(`Enter your gender id`);
// switch (genderId) {
//     case 'M':
//         alert('Male');
//         break;
//     case 'm':
//         alert('Male');
//         break;
//     case 'Male':
//         alert('Male');
//         break;
//     case 'male':
//         alert('Male');
//         break;
//     case 'MALE':
//         alert('Male');
//         break;
//         case 'F':
//         alert('Female');
//         break;
//     case 'f':
//         alert('Female');
//         break;
//     case 'Female':
//         alert('Female');
//         break;
//     case 'female':
//         alert('Female');
//         break;
//     case 'FEMALE':
//         alert('Female');
//         break;
//     default:
//         alert('Please type correct id');
//         break;
// }

// let genderId = prompt('Enter your gender id');
// if (genderId === 'M' || genderId === 'm' || genderId === 'Male' || genderId === 'male' || genderId === 'MALE') {
//     alert('Male');
// } else if (genderId === 'F' || genderId === 'f' || genderId === 'Female' || genderId === 'female' || genderId === 'FEMALE') {
//     alert('Female');
// } else {
//     alert('Please type correct id');
// }

//task-29
//
// let month = prompt('Enter month number:');
// switch (month) {
//     case '1':
//     case '01':
//         alert('January.');
//         break;
//     case '2':
//     case '02':
//         alert('February.');
//         break;
//     case '3':
//     case '03':
//         alert('March.');
//         break;
//     case '4':
//     case '04':
//         alert('April.');
//         break;
//     case '5':
//     case '05':
//         alert('May.');
//         break;
//     case '6':
//     case '06':
//         alert('June.');
//         break;
//     case '7':
//     case '07':
//         alert('July.');
//         break;
//     case '8':
//     case '08':
//         alert('August.');
//         break;
//     case '9':
//     case '09':
//         alert('September.');
//         break;
//     case '10':
//     case '010':
//         alert('October.');
//         break;
//     case '11':
//     case '011':
//         alert('November.');
//         break;
//     case '12':
//     case '012':
//         alert('December.');
//         break;
//     default:
//         alert('Enter correct Month number');
//         break;
// }

// let month = prompt("Enter month number:");
// if (month === "1" || month === "01") {
//     alert("January.");
// } else if (month === "2" || month === "02") {
//     alert("February.");
// } else if (month === "3" || month === "03") {
//     alert("March.");
// } else if (month === "4" || month === "04") {
//     alert("April.");
// } else if (month === "5" || month === "05") {
//     alert("May.");
// } else if (month === "6" || month === "06") {
//     alert("June.");
// } else if (month === "7" || month === "07") {
//     alert("July.");
// } else if (month === "8" || month === "08") {
//     alert("August.");
// } else if (month === "9" || month === "09") {
//     alert("September.");
// } else if (month === "10" || month === "010") {
//     alert("October.");
// } else if (month === "11" || month === "011") {
//     alert("November.");
// } else if (month === "12" || month === "012") {
//     alert("December.");
// } else {
//     alert("Enter correct Month number");
// }

//task-30
//
// let userInput = prompt("Enter the date in the format 'YYYY.MM.DD':");

// if (userInput.length === 10 && userInput[4] === '.' && userInput[7] === '.') {
//     let [year, month, day] = userInput.split(".");
//     month = parseInt(month, 10);

//     const months = [
//         "January", "February", "March", "April",
//         "May", "June", "July", "August",
//         "September", "October", "November", "December"
//     ];

//     if (month >= 1 && month <= 12) {
//         const monthName = months[month - 1];
//         alert(`${monthName} ${parseInt(day, 10)}, ${year}`);
//     } else {
//         alert("Invalid month entered.");
//     }
// } else {
//     alert("Invalid value entered. Please use the format 'YYYY.MM.DD'.");
// }