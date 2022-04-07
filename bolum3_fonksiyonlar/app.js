function yazdir() {
  console.log("emine");
}
yazdir();
function yazdirr(ad, yas) {
  console.log(`adiniz : ${ad}, yasiniz : ${yas}`);
}
yazdirr("mustafa", 21);
//?function decleration **********
//!bu yontemde fonk nun tanımlanması cagrilmasindan once veya sonra olabilir
let sayi = +prompt("bir sayi giriniz ");
function tekcift(sayi) {
  let flag = "tektir";
  if (sayi % 2 == 0) {
    flag = "cifttir";
  }
  return `girdiginiz ${sayi} sayisi ${flag}`;
}
console.log(tekcift());
//?2.yontem : function expression***************
//*burada once tanımlama yapmak gerekir yoksa cagrilamaz
const tekmicift = function (sayi) {
  return sayi % 2 ? "tek" : "cift";
};
console.log(tekmicift(sayi));
//sayılardan buyuk olanı bulma
const buyuk = function (x, y, z) {
  let enbuyuk;
  if (x > y && x > z) {
    enbuyuk = x;
  } else if (y > x && y > z) {
    enbuyuk = y;
  } else {
    enbuyuk = z;
  }
  return enbuyuk;
};
console.log("en buyuk " + buyuk(11, 3, 8));
//! 3.yontem:arrow fonksiyonları
//3 sayinin toplamı fonk
let topla = (a, b, c) => a + b + c; // suslu parantez yoksa kendi return yapıyor yazmaya gerek yok
console.log(topla(1, 2, 3));

const bilgiVer = (i, s, d) => {
  const bilgi = `Adim ${i}, Soyadim ${s}, yasim ise ${2022 - d}`;
  return bilgi;
};
console.log(bilgiVer("emine", "keles", 1988));
//ondalıklı sayılarda istenilen basamagi soylemek icin tofixed methodu var
