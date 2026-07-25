const button = document.querySelector(".btn")
let display = document.querySelector('#disp')
let count=0

button.addEventListener("click", function()
{
    count++
    display.textContent=count
})

button.addEventListener("click", function(){
   
 button.style.color = "red";
 button.style.backgroundColor = "black";
    
})