// Task-01
// Massiv elementinin dəyərini dəyişin. Üç addan ibarət massiv yaradın. Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin. Massivi konsola çıxarın.

// let names = ["John", "Alice", "Bob"];
// names[1] = "Classified";
// console.log(names);

// Task-02
// Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın. Massiv elementlərin düzün.
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// Episode 4: New Hope
// Episode 5: Empire strikes back
// Episode 6: Return of the Jdi

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 's', 'q', 's'];
// for (let i = 0; i < arr.length; i++) {
//     console.log('Episode ' + (i + 4) + ': ' + arr[i]);
// }

// Task-03

// Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.
// Şöbədə müxtəlif maaşlarla 10 nəfər çalışır. Şöbə işçilərinin əmək haqlarını təhlil etmək üçün proqram tərtib edin.
//  - Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
// salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran getAnnualSalary() funksiyasını yazın.
// - Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
// Ayın nömrəsini parametr kimi qəbul edən və salary massivindən həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.
// Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.
// - Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
// Parametr kimi rübün rəqəmini (1, 2, 3 və ya 4) qəbul edən və salary massivi əsasında həmin rüb üçün şöbənin bütün
// işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın.
//  Rüb - 3 aylıq bir müddətdir.

// let salary = [
//    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]];

// function getTotalSalary() {
//     let totalSalary = 0;
//     for (let i = 0; i < salary.length; i++) {
//         let user = salary[i]
//         for (let j = 0; j < user.length; j++) {
//             totalSalary += user[j]
//         }
//     }
//     console.log(totalSalary);
// }
// getTotalSalary()

// function getMonthlySalary(num) {
//     let monthlySalary = [];
//     for (let i = 0; i < salary.length; i++) {
//         let user = salary[i]
//      monthlySalary.push(user[num -1]);
//     }
//     return monthlySalary;
// }
// console.log(getMonthlySalary(1))

// function getQuarterTotalSalary(quarter) {
//     let quarterTotal = 0;
//     let quarterStart = (quarter - 1) * 3;
//     let quarterEnd = quarterStart + 3;
//     for (let i = 0; i < salary.length; i++) {
//         for (let j = quarterStart; j < quarterEnd; j++) {
//             quarterTotal += salary[i][j];
//         }
//     }
//     return quarterTotal;
// }
// let result = getQuarterTotalSalary(4);
// console.log(result);

// Task-04
// İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın. İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massilə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.(Split)

// let userInput = "2, 5, 8, 6, 7, 9, 0, -1";
// let numbers = userInput.split(",");
// let numberArray = numbers.map(Number);
// const smallestNumber = Math.min(...numberArray);
// console.log("Kicik eded:", smallestNumber);


// Task-05
//Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.(split,join)(replaceAll(",",";")) '32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden sitifade ederek)

// let text = '32, 31, 34, 36, 31';
// let array = text.split(', ');
// let result = array.join('; ');
// console.log(result);

