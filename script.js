const OpenNav = document.querySelector(".icon1")
const fermerNav = document.querySelector(".fermer")
const menuNav = document.querySelector(".menu")

const Positionmenu = menu.getBoundingClientRect().left;


OpenNav.addEventListener("click", () =>{
  if(Positionmenu <0){
    menu.classList.add("monter")
  }
}
)


fermerNav.addEventListener("click", () =>{
  if(Position:menu <0){
    menu.classList.remove("monter")
  }
}
)
