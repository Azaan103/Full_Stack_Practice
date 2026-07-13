let increasebtn = document.querySelector(".increase")
let decreasebtn = document.querySelector(".decrease")
let resetbtn = document.querySelector(".reset")
let display = document.querySelector(".display")
let counter = 0;

display.textContent= counter

increasebtn.addEventListener('click',function(){
    counter++
    display.textContent = counter
})

decreasebtn.addEventListener('click',function(){
    counter--
    display.textContent = counter
})

resetbtn.addEventListener('click',function(){
    counter = 0 
    display.textContent = counter
})
