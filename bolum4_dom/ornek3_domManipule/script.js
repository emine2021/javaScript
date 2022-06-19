//ac butonuna her tıklandıgında calisir
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "img/indir(2).jpg";
};
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "img/indir (1).png";
};
document.querySelector(".resim").onmouseover = function () {
  document.querySelector(".resim").src = "img/indir(2).jpg";
};
document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "img/indir (1).png";
});
document.querySelector(".resim").onmouseout = function () {
  document.querySelector(".resim").src = "img/indir (1).png";
};
//klavyeden herbir tusa basıldıginda tetiklenecek
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};
const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programlama Dilleri");
h1.appendChild(yazi);
sonDiv.after(h1);
h1.className = "yeni-h1";

document.querySelector(".ekle").onclick = function () {
  //ekleme yapılacak listeyi al
  const liste = document.querySelector(".liste");
  //input elemanına girilen yeni satirin degerini al
  const satir = document.querySelector(".dil").value;
  //yeni girilen satiri saklamak icin bir li olustur
  const yeniLi = document.createElement("li");
  //yeni li icin textnode olustur
  const textNode = document.createTextNode(satir);
  //olusturdugumuz textnode u yeni li ye bagladik
  yeniLi.appendChild(textNode);
  //yeni eklenen satiri var olan listeye bagladik
  liste.appendChild(yeniLi);
};
document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  liste.removeChild(liste.lastElementChild);
};
