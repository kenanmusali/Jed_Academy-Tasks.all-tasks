// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın. İstifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin. Funksiyanı 3 müxtəlif ad üçün çağırın.

// let name = "Tom Cruise";
// let result = name;
// function user() {
//     result = result + " is active now";
// }
// user();
// console.log(result);

// Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin. Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin. Fərqli arqumentlərlə funksiyanı üç dəfə çağırın

// function largeNum(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }
// function displayLargest(num1, num2, num3) {
//     const largest = largeNum(num1, num2, num3);
//     console.log(`En boyuk edded ${num1}, ${num2}, ${num3} Cavab: ${largest}`);
// }
// displayLargest(10, 20, 30);


//Task-03
//Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin. Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin cəmin rublla göstərən funksiya yazın. Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var. Bir dollar üçün məzənnə 75 rubl təşkil edir. Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.

// let dollar = 20
// let ruble = dollar * 90.93;
// let fees = ruble - 75
// console.log("Bütün depozitlər üzrə məbləğ: " + fees.toFixed(2))

// function calculateFees() {
//     const dollar = 1;
//     const ruble = dollar * 90.93;
//     const fees = ruble - 75;
//     return (fees.toFixed(2));
// }
// console.log(calculateFees());