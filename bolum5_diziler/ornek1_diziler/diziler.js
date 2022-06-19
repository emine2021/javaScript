const h1 = document.getElementById("meyveler");
let meyveler = ["elma", "armut", "erik"];

meyveler.push("cilek", false);
//push eleman ekler ve son eleman sayısını döndürür ve diziyi degistirir.
console.log(meyveler.unshift("ayva")); // 0.indexine eleman ekler

meyveler.splice(1, 0, "Ardıç"); // 1- baslangıc noktası , 0- silme yapmadan ekleme yap
meyveler.splice(4, 1, "mango"); // 4.elemanı siler ve ekleme yapar
meyveler.sort();
//yukarıdakiler diziyi degistirir ama diziyi degistirmeyen methodlar da var

h1.innerHTML = meyveler;
console.log(meyveler);
