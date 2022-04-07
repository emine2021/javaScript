/*const sayi1 = Number(prompt("Birinci sayi: "));
const islem = prompt("islemi giriniz :");
const sayi2 = +prompt("Ikinci sayi: "); //number old soylemek icin + da kullanılır
let sonuc = 0;

if (islem == "+") {
  sonuc = sayi2 + sayi1;
} else if (islem == "-") {
  sonuc = sayi1 - sayi2;
} else if (islem == "*") {
  sonuc = sayi2 * sayi1;
} else if (islem == "/") {
    if(!sayi2){   //sayi2 0,null,NaN gibi false degerler mi 
        console.log("sayiyi 0 a bolemezsiniz")
    }else{
        sonuc = sayi1 / sayi2;
    }
  
} else {
  alert("yanlis islem yaptiniz ..");
}
console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc}`);*/
/*const age = prompt("yasinizi giriniz : ");
const healt = prompt("saglikli misiniz e/h");
alert(age > 18 && healt == "e" ? "askere gidebilirsin" : "askere gidemezsin");*/

/*const maas = prompt("maas : ");
const calismaSure = prompt("calisma sureniz : ");
const yeniMaas =
  calismaSure < 11 ? (calismaSure <= 5 ? maas * 1.1 : maas * 1.2) : maas * 1.5;
console.log(`yeni maasiniz : ${yeniMaas}`);*/

/*   donguler     */
/*for (let i = 1; i <= 10; i++) {
  console.log(`${i} mehmet`);
}*/
//asal sayi tespiti
/*
const sayi = +prompt("sayiyi giriniz :");
let asal = true;
for (let i = 2; i < sayi; i++) {
  if (sayi % i == 0) {
    asal = false;
    break;
  }
  asal = true;
}
console.log(asal ? "sayi asaldir" : "sayi asal degildir");*/
/*
let not;
not = +prompt("1-100 arasında bir not giriniz : ");
while (not < 0 || not > 100) {
  console.error("girilen not 0-100 arasında olmalıdır");
  not = +prompt("1-100 arasında bir not giriniz : ");
}
console.log("girdiginiz not 0-100 arasındadır");*/

//not girisi yapılacak q ya basılana kadar not girisi devam edilecek
let not;
let i = 0;
while (true) {
  i++;
  not = prompt(i + ". kisinin notunu giriniz : ");
  not = not.toLocaleLowerCase();
  if (not == "q") {
    break;
  }
  console.log(+not);
}
