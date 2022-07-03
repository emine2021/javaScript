//DESTRUCTURING(OBJECT)
//bir dizi yada nesnenin icerisindeki elemanlar kolayca ayrıstırılıyor
const birey = {
  ad: "can",
  konum: "Samsun",
  email: "can@gmail.com",
};
//1.yontem:klasik yontem
const ad1 = birey.ad;
const konum1 = birey.konum;
console.log(ad1, konum1);
//2.YONTEM (OBJECT DESTRUCTURING)
//objedekilere ayrı ayrı ulasmak istiyorum
const { ad, konum, email } = birey; // key adlari ayni olmak zorunda
console.log(ad, konum, email);
function bilgiAl() {
  return {
    // nesne donduruyorsa suslu parantez kullanılmali
    id: "101",
    urunAdi: "Apple",
    fiyat: 15000,
  };
}
console.log(bilgiAl());
const { id, urunAdi, fiyat } = bilgiAl();
console.log(id, urunAdi);
//ARRAY AYIRMA
const isimler = ["ahmet", "can", "veli"];
const [kisi1, kisi2, kisi3] = isimler;
console.log(kisi1, kisi2);
