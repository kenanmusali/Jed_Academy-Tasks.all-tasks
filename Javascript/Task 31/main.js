//Task-01
//HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın.

// const styleElement = document.querySelector("li:first-child");
// console.log(styleElement.innerHTML);
// console.log(styleElement.innerText);
// console.log(styleElement.textContent);

//Task-02
//HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
//- Başlığı silin;
//- Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin .

// let styleElement = document.querySelector("h1");
// styleElement.remove();
// let newElement = document.createElement("h1");
// newElement.innerText = "TITAN RTX";
//
//document.body.insertAdjacentElement("afterend", newElement);
// document.body.append(newElement);

//Task-03
//HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
//- başlıq mətnini «GeForce 20 Series» -a;
//- fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.

// let styleElement = document.querySelector("h1");
// styleElement.remove();
// let newElement = document.createElement("h1");
// newElement.innerText = "-a";
// document.body.insertAdjacentElement("beforebegin", newElement);
//
// let styleElement1 = document.querySelectorAll(".primary");
// styleElement1.style.color = '#ebebeb'

//Task-04
//HTML-kodu verilib. Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın.

// let styleElement = document.querySelector("ul");
// console.log(styleElement.innerHTML);
// console.log(styleElement.innerText);
// console.log(styleElement.textContent);

//Task-05
//HTML-kod verilmişdir. Yalnız JS kodundan istifadə edərək sinifləri dəyişdirin:
//- bütün siyahı elementlərinə item sinifi əlavə edin;
//- siyahıda primary sinfi olmayan elementlərə secondary sinfi əlavə edin.




























// "beforebegin": Before the target element itself.
// "afterbegin": Just inside the target element, before its first child.
// "beforeend": Just inside the target element, after its last child.
// "afterend": After the target element itself.