let name = document.getElementById('name')
let input = document.getElementById('input')
let btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    let user_input = input.value
    localStorage.setItem("name",user_input)
    let getname = localStorage.getItem("name")
    name.innerText = getname

})

window.addEventListener('load', ()=>{
    let getname = localStorage.getItem("name")
    name.innerText = getname
})

