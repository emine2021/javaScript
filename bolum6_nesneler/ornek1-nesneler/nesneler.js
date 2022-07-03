//sıralı structred belleklerde dizi kullanmak mantıklıdır
//eger veriler kompleks ise dizilerde erisim guclugu ortaya cıkar
//!obje tanımlama  key-value(property-value) yapısı kullanılır
//object literal
const insan = {
  adi: "can",
  soyad: "yılmaz",
  yas: 30,
  meslek: "developer",
  diller: ["java", "js", "c++", "sql", "phyton"],
};
//js prototype-based bir dildir java class-based bir dildir
console.log(insan.adi);
console.log(insan["adi"]);
const yazi = "Adim";
console.log(`${yazi} ${insan.adi} ve yasim ${insan.yas}`);
const bilgiSecimi = prompt(
  "insan hakkında ne bilmek istersin ? Seciminizi giriniz : adi,soyad,yas,meslek ,diller"
);
//prompt String kabul eder
//insan.${bilgiSecimi} ,koseli parantez yontemi en mantıklısı
if (insan[bilgiSecimi]) {
  //bilgiSecimi degiskendir key degildir oyüzden .dot notasyonu kullanılamıyor
  console.log(insan[bilgiSecimi]);
} else {
  console.log("yanlis secim,adi,soyad,yas,meslek,diller");
}
insan.konum = "turkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1990; // tırnak icinde yazılmazsa degisken olark algılıyor
console.log(insan);
//NESNE METHODLARI
const kisi = {
  ad: "ahmet",
  soyad: "can",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenium",
  ehliyet: true,
  yasHesapla: function () {
    //arrow funct ve lambda ifadeleri icinde this kullanılamaz
    console.log(this);
    return new Date().getFullYear() - this.dogumTarihi; //date objesi
    //objenin icinde isek this kullanmak gerekir
  },
  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir meslegi ${
      this.meslek
    } liktir`;
  },
};
const tarih = new Date();
console.log(tarih.getMonth());
console.log(kisi.yasHesapla());
console.log(kisi.ozet());
//NESNE ITERASYON ORNEKLERI
const kisiler = [
  {
    ad: "mustafa",
    soyad: "can",
    meslek: "developer",
    yas: 24,
  },
  {
    ad: "ayse",
    soyad: "yilmaz",
    meslek: "tester",
    yas: 25,
  },
  {
    ad: "ali",
    soyad: "veli",
    meslek: "team lead",
    yas: 26,
  },
];
//SADECE YAZDIRMAKSA AMAC FOREACH ILE OLUR AMA DIZIYE KAYDETSIN ISTERSEK MAP KULLANILMALI

console.log(kisiler);
//ornek1 : kisiler dizisindeki meslekleri konsola yazdiralim
kisiler.forEach((x) => console.log(x.meslek));
//ornek2 : kisiler dizisindeki tum bireylerin yasini bir artırarak yeni bir diziye saklayalım
const yaslar = kisiler.map((x) => x.yas + 1);
console.log(yaslar);
//ornek3 : kisiler dizisindeki kisilerin isimlerini buyuk harf olarak degistiren
// ve yaslarini 5 artırarak yeni bir nesne olusturan kodu yazalim
const buyukHarf = kisiler.map((x) => {
  return {
    ad: x.ad.toUpperCase(),
    yas: x.yas + 5,
    soyad: x.soyad,
  };
});
console.log(buyukHarf);
//ornek4:yasi 25 e esit veya kucuk olanların adlarini yazdiran kodu yaziniz
kisiler.filter((x) => x.yas >= 25).forEach((x) => console.log(x.ad));
//ornek5: meslegi developer olanlarin  isim ve yaslarini bir diziye kaydediniz
const developer = kisiler
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return { ad: x.ad, yas: x.yas };
  });
console.log(developer);
//ornek6:kisilerin ortalama yasini hesaplayiniz
console.log(kisiler.reduce((x, y) => x + y.yas, 0) / kisiler.length);
