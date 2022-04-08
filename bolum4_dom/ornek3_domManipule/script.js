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
document.querySelector(".resim").onmouseout = function () {
  document.querySelector(".resim").src = "img/indir (1).png";
};
