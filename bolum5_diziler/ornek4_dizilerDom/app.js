const maaslar = [4000, 5000, 3500, 4200, 2850];
const liste = document.createElement("ul");
liste.className = "liste";
document.querySelector(".liste-div").appendChild(liste);

const listeyeEkle = function (satir) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(satir));
  liste.appendChild(li);
};
const diziyiListeyeEkle = function () {
  for (let i in maaslar) {
    listeyeEkle(maaslar[i]);
  }
};
const aciklamaGuncelle = function (dizi) {
  const aciklama = document.querySelector(".aciklama");

  aciklama.innerHTML = `Maaslar : ${dizi.join(" ")} <br>
  Toplam Maas : ${dizi.reduce((x, y) => x + y, 0)}`;
};

diziyiListeyeEkle();
aciklamaGuncelle(maaslar);
document.querySelector(".ekle").onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (!satir.value) {
    alert("lutfen veri girisi yapınız");
  } else {
    //inputtan gelen veriyi diziye kaydet
    maaslar.push(Number(satir.value));
    //inputtan gelen veriyi listeye yazdir
    listeyeEkle(satir.value);
    //inputta kalan veriyi sil
    satir.value = "";
    aciklamaGuncelle(maaslar);
  }
};
document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("silinecek oge kalmadi");
  } else {
    maaslar.pop();
    const liste = document.querySelector(".liste");
    liste.removeChild(liste.lastElementChild);
    aciklamaGuncelle(maaslar);
  }
};
document.querySelector(".ara").onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (!satir.value) {
    alert("Aranacak maas limitini giriniz");
  } else {
    const filtreli = maaslar.filter((x) => x <= satir.value);
    if (filtreli.length == 0) {
      alert("aradiginiz kriterlerde maas bulunamadi");
    } else {
      aciklamaGuncelle(filtreli);
    }
  }
  satir.value = "";
};
document.querySelector(".input-liste").onkeydown = function (e) {
  console.log(e);
  if (e.keyCode == 13) {
    //enter tusuna basildi ise
    document.querySelector(".ekle").onclick();
  } else if (e.keyCode === 46) {
    document.querySelector(".sil").onclick();
  }
};
