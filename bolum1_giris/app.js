console.log("hello dunya");
console.log("javascript java dan kolay bir dil");
console.error("bu bir hatadır");
console.warn("bu bir uyaridir");
//alert("dikkat");
var pi = 3.14;
console.log(pi);
console.log(typeof pi); //number
pi = "3";
console.log(pi);
pi = true;
console.log(typeof pi); //boolean
isim = "ahmet";
console.log(isim);
console.log(typeof isim);
isim = 4;
//var global bir degisken gibi dusunuluyor o yuzden modern js kullanımı azaldı
//const ve let yeni degisken tanımlama keywordleridir

const sayi = 0; // const baslangıcta degeri atanabilr sonrasında degeri degistirilemez
// baslangic degeri atanmak zorundadir yoksa hata verir
//sayi=5;
//console.log(sayi); konsolda hata verir const deger old icin,non-primitiveler haric

//!let var ın local halidir
//let block scope bir degiskendir var ise global scope bir tanımlamadır
//block scope sadece tanımlı old alanda gecerlidir
let fiyat;
console.log(fiyat); //undefined
fiyat = 5.36;
console.log(typeof fiyat);
//2.video
//js de null bir object ama java da degildi
const ad = "mesut";
const yas = 55;
console.log(`benim adım ${ad} ve yasim ${yas}`);
console.log("yas" + yas - yas); //NaN not a number hatası alırız parantez icinde yazılmalı cıkarma islemi
//ternary
const name = prompt("isminizi giriniz");
const age = Number(prompt("yasinizi giriniz")); //string kabul eder basina +,number koyarsak number alır
console.log(`yasiniz ${age}`);
console.log(age > 18 ? "ehliyet alabilirsiniz" : "ehliyet alamazsiniz");
age >= 18
  ? console.log(`${name} ehliyet alabilirsin`)
  : console.log(`${name} ehliyet alamazsin`);
