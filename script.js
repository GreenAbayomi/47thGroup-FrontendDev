var hambuger = document.querySelector(".hambuger");
var mobilenav = document.querySelector(".menu-items");

hambuger.style.opacity = 1;

hambuger.onclick = function(){
    if(mobilenav.style.display == "none"){
        mobilenav.style.display = "block";
        hambuger.style.opacity = 0.5;
    }
    else{
        mobilenav.style.display = "none";
        hambuger.style.opacity = 1;
    }
};