// Task-01
// Konsola doğum tarixini çıxarın.
// Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (name, gender, birthday).
// Konsola doğum tarixini çıxarın.

// const user = {
//     fullName: "Name",
//     gender: "Gender",
//     birthday: "Birthday"
// }
// console.log("Dogum gunu:", user.birthday);
// console.log(`Dogum gunu: ${user.birthday}`);

// Task-02
// Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.
// Alınmış obyekti konsola çıxarın.


// Task-03
// Obyektə metodlar əlavə edin.
//   setAge — istifadəçi yaşını dəyişdirən metoddur.
//   getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
//  qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.

// let user = {
//     name: "John",
//     age: 30,
//     getYearsBeforeRetirement: 65,
//     setAge: function(newAge) {
//       this.age = newAge;
//     },
//     getYearsBeforeRetirement: function() {
//       let yearsLeft = this.getYearsBeforeRetirement - this.age;
//       return yearsLeft > 0
//     }
//   };
//   user.setAge (35);
//   let yearsLeftUntilRetirement = user.getYearsBeforeRetirement();
//   console.log(`Adi: ${user.name}, Yasi: ${user.age}, Years until retirement: ${yearsLeftUntilRetirement}`);
  
// Task-04

// Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın.
// Müştərinin hesabı haqqında əsas məlumatları və onunla işləmə metodlarını əhatə edən client obyekti yaradın.
//     =>client obyekti yaradın.
//     Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:
//     - Tam adı müştərinin (fullName).
//     - Kredit limiti (creditLimit).
//     - Cari balans (balans).
//     - Minimum ödənişin faizi (precentOfMinPayment).
//     =>Cari balans əldə etmək üçün getBalance metodu əlavə edin.
//     getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.
//     Metodun çağırılma nümunəsi:
//     console.log(client.getBalance()).
//     Mesaj nümunələri:
//     «Balansınız 3000»,
//     «Borcunuz 2000».
//      =>Minimum ödəniş məbləği üçün getMinPaymant metodunu əlavə edin.
//     getMinPaymant metodu borc məbləği və minimum ödəniş faizinə əsasən formalaşan minimum
//     ödəniş məbləği haqqında mesaj qaytarır.
//     Əgər borc yoxdursa, metod müvafiq mesajı qaytarır.
//     Metodun çağırılma nümunəsi:
//     console.log(client.getMinPaymant()).
//     Mesaj nümunələri:
//     «Minimum ödənişiniz 240»,
//     «Sizin borcunuz yoxdur».
//      =>Hesabdan pul silmək üçün withdraw metodu əlavə edin.
//     withdraw metodu cari balansı parametr kimi ötürülən pul məbləği qədər azaldır.
//     Mövcud vəsait kifayət deyilsə (cari balans və kredit limitinin cəmi), metod konsola müvafiq mesajı çıxarır.
// client.widthdraw(900)
//      =>Hesaba pul əlavə etmək üçün refill metodu əlavə edin.
//     refill metodu parametr kimi qəbul edilən məbləğ qədər balansı artırır.

// Task-05
// Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
//     - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.
//     Metodlar parametr kimi 2 ədəd götürür və bu ədədlər üzərində müvafiq əməliyyatın nəticəsini qaytarır.
//     Yaddaşla işləmək imkanı əlavə edin.
//     - Obyektə dəyəri saxlamaq üçün özəllik əlavə edin. Onunla işləmək üçün metodlar yaradın:
//     dəyərin yaddaşda saxlanması, yaddaşın təmizlənməsi, yaddaşdan dəyərin oxunması.