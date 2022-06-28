const koordinatlar = [120, 100, -100, 220, 330];
//kac tane poz kac neg sayı var
let neg = 0;
let poz = 0;
/*
for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0 ? neg++ : poz++;
}*/
for (let i in koordinatlar) {
  koordinatlar[i] < 0 ? neg++ : poz++;
}
console.log(
  `negatif koordinat sayisi : ${neg} pozitif koordinat sayisi ${poz}`
);
//-------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğu
//  ana programa döndürecek fonksiyonu yazınız. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.
//--------------------------------------------------------
/*const hayvanlar = ["fil", "deve", "kuş", "deve", "fare", "kedi", "deve"];
const ara = prompt("aramak istedigin hayvanın ismini giriniz : ");
const bulDondur = function (ara) {
  let hayvanSayisi = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara.toLowerCase()) {
      hayvanSayisi++;
    }
  }
  return hayvanSayisi;
};
const sayi = bulDondur(ara);
sayi == 0
  ? console.log("aradıgınız hayvan bulunamadi")
  : console.log(`aradıginiz ${ara} den ${sayi} adet bulunmaktadır`); //template literal*/
//isimler dizisinin her elemanını buyuk harf olark saklayalım
const isimler = ["ahmet", "emine", "mustafa", "burhan"];
const buyukisimler = isimler.map((x) => x.toUpperCase());
buyukisimler.forEach((x) => console.log(x)); // altalta yazdi
//dolar,euro fiyat
tlFiyatlar = [120, 340, 550, 245, 322.5, 789];
const dolarKur = document.querySelector(".dolar");
const euroKur = document.querySelector(".euro");
const dolar = document.querySelector(".dolar-fiyat");
const euro = document.querySelector(".euro-fiyat");

dolarKur.onchange = function () {
  const dolarFiyatlar = tlFiyatlar.map((x) => Math.round(x / dolarKur.value));
  const euroFiyatlar = tlFiyatlar.map((x) => Math.round(x / euroKur.value));
  dolar.innerHTML = dolarFiyatlar;
};
euroKur.onchange = function () {
  const dolarFiyatlar = tlFiyatlar.map((x) => Math.round(x / dolarKur.value));
  const euroFiyatlar = tlFiyatlar.map((x) => Math.round(x / euroKur.value));
  euro.innerHTML = euroFiyatlar;
};

//sayfanın render edilmesi !!!!!!!!!!!
//tlfiyatlar dizisindeki urun fiyatlarının 250 tl
// altında olanlarına %10 zam,ustunde olanlarına %20zam yapılmak isteniyor
const zamliTlFiyatlar = tlFiyatlar.map((deger, indis) => {
  if (deger < 250) {
    return `${indis + 1}. urunun zamli fiyati : ${deger * 1.1} <br>`; // alta atmak icin br kulllandık
  } else {
    return `${indis + 1}. urunun zamli fiyati : ${deger * 1.2} <br>`;
  }
});
const strzamli = zamliTlFiyatlar.join(""); //varolan virgülleri kaldırdık , JOIN i hatırla
//DIZIYI STRINGLESTIRMEK ICIN JOIN KULLANDIK
document.querySelector(".zamli-fiyat").innerHTML = strzamli;
console.log(strzamli);
//urunler icinde fiyatı 250 tl den az olanları ayrı bir diziye sakla
const kucuk250 = tlFiyatlar.filter((d) => d < 250);
console.log(kucuk250);
tlFiyatlar.filter((d) => d < 350).forEach((x) => console.log(x));
//filter map gibi dizi dondurur,filter secerek dondurur
//buyukten kucuge sıralama
console.log(tlFiyatlar.sort((a, b) => b - a));
//PIPELINE
const maaslar = [3000, 5000, 4000, 6000, 6500];
//maasi 4000den dusuk olanlara %50 zam yap
const zamlimaas = maaslar
  .filter((x) => x <= 4000)
  .map((x) => (x * 1.5).toFixed(2));
console.log(zamlimaas);
const adlar = [
  "Ahmet",
  "emine",
  "hakkı",
  "mehmet",
  "Emrullah",
  "Bilal",
  "Ali",
  "Meryem",
];
const harfBul = (h) => {
  h = h.toUpperCase();
  adlar.filter((x) => x.startsWith(h)).forEach((x) => console.log(x));
  //boyle yazilirsa tek tek yazdirir
};
harfBul("a");
//foreach iterasyon yapacagı yerde calisir,
//foreach ve reduce termainal operatoru
const tmaas = maaslar.reduce((x, y, i) => {
  console.log(`${i}.iterasyon : ${x}`);
  return x + y;
  //arrow func da suslu parantez kullanıldıgında return kullanmak zorunlu
});
console.log(tmaas);

//maasi 4000den fazla olanların toplamını bulunuz
console.log(maaslar.filter((x) => x > 4000).reduce((x, y) => x + y, 0));
//maasi ort altında olanlara %20zam ustunda olanlara %10 zam yapılmak isteniyor
const ortalama = maaslar.reduce((x, y) => x + y, 0) / maaslar.length;
const yenimaas = maaslar.map((x) => (x > ortalama ? x * 1.1 : x * 1.2));
console.log(yenimaas);
