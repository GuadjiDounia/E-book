const OpenNav = document.querySelector(".icon1");
const fermerNav = document.querySelector(".fermer");
const menuNav = document.querySelector(".menu");

const Positionmenu = menu.getBoundingClientRect().left;


OpenNav.addEventListener("click", () =>{
  if(Positionmenu <0){
    menu.classList.add("monter");
  }
}
)


fermerNav.addEventListener("click", () =>{
  if(Position:menu <0){
    menu.classList.remove("monter");
  }
}
)




var ProductImg = document.getElementById("ProductImg");
 var smallimg = document.getElementsByClassName("small-img");

 smallimg[0].onclick = function(){
  ProductImg.src= smallimg[0].src;
 } 
 smallimg[1].onclick = function(){
  ProductImg.src= smallimg[1].src;
 }
 smallimg[2].onclick = function(){
  ProductImg.src= smallimg[2].src;
 }