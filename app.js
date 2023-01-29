const surface = document.querySelector(".surface");
const vehicle = document.querySelector("img");
const car = document.querySelector(".car")
const bus = ["./assets/Img_05.png", "./assets/Img_06.png"];
let flag = true;

window.addEventListener("keypress", (e)=>{
    if(e.keyCode===32){
        surface.classList.toggle("moveRight");
        car.classList.toggle("suspension");
    }
})
window.addEventListener("keypress", (e)=>{
        if(e.keyCode === 13){
            if(flag){
                flag = false;
                vehicle.setAttribute("src", bus[1]); 
            }
            else{
                flag = true;
                vehicle.setAttribute("src", bus[0]);
            }
        }
})
