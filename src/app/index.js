let button = document.querySelector("a");
let sign = document.querySelector("span");
button.addEventListener("click",()=>{
    sign.style.display = "block";

    setTimeout(()=>{
        sign.style.transform = "translate(-50%,-100vh)";
    },1500);
    sign.style.transform = "translate(-50%,-50%)";
});