let box = document.querySelectorAll(".box") ;

box.forEach((el) => {

    el.addEventListener("click" , ()=> {

        removeActiveClasses() ;
        el.classList.add("active") ;
        el.firstElementChild.classList.add("enable") ;

    })

})

function removeActiveClasses(){

    box.forEach((el) => {

        el.classList.remove("active") ;
        el.firstElementChild.classList.remove("enable") ;

    })

}

// View Image 

let viewSec = document.querySelector(".viewImgSec") ;
let setImg = document.querySelector(".setImg img") ;
let allImg = document.querySelectorAll(".imgSec .boxImg img") ;
let counter = document.querySelector(".counter h3") ;
let current = 0;

function closeBtn(){
    viewSec.style.display = "none" ;
}

function viewImg(idx){
    current = idx ;
    setImg.src = allImg[current].src ;
    viewSec.style.display = "flex" ;
    updateCount() ;
}

function updateCount(){

    counter.textContent = `${current+1} / ${allImg.length}` ;
}

function updateImage(acTion){

    if(current < allImg.length ){

        current = current + acTion ;
        viewImg(current) ;
    }
}