let btn = document.getElementById("btn");
let body = document.querySelector("body");
const menu = document.querySelector(".menu");
const txt = document.querySelector("span");
main = document.querySelector(".con");
hed = document.querySelector(".hed");
span = document.querySelector(".cat-label");
text = document.querySelectorAll("span");
i1 = document.querySelector(".bi-brightness-high-fill");
i2 = document.querySelector(".bi-moon-stars-fill");
btn.addEventListener("click",function darklight(e){
span.classList.toggle("active");
  btn.classList.toggle("active");
  body.classList.toggle("active");
  menu.classList.toggle("active");
  txt.classList.toggle("active");
  main.classList.toggle("active");
  hed.classList.toggle("active");
  i1.classList.toggle("active");
  i2.classList.toggle("active");
  for (let i = 0; i < text.length; i++) {
    text[i].classList.toggle("active");
  }
});
console.log(text.length);
