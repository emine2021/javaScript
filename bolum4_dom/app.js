//console.log(r);
//console.log(h);

function hesapla() {
  const r = document.getElementById("r").value;
  const h = document.querySelector("#h").value;
  const hacim = document.querySelector(".hacim");
  const sonuc = Math.PI * r * r * h;
  console.log(sonuc, r, h);
  hacim.innerHTML = sonuc.toFixed(2);
}
const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "pink";
