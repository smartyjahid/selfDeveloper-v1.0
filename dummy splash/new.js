const slides = document.querySelector(".slider").children; 
console.log(slides);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;


prev.addEventListener("click",function(){
prevslide();
resetTimer();
})


next.addEventListener("click", function () {
   nextslide();
   resetTimer();
})

function prevslide(){
    if(index== 0){
        index = slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}

function nextslide(){
if(index == slides.length-1){
    index =0;
}else{
    index++;
}
changeSlide();
}

function changeSlide(){
    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoplay,4000);
}

function autoplay(){
    nextslide();
}
let timer = setInterval(autoplay,4000);