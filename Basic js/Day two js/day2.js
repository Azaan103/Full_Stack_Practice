let fruits=["Orange","Orange","Orange"]
console.log(fruits[2])
fruits.push("Apple")
console.log(fruits[3])
fruits.pop()
console.log(fruits[2])

let num =[3,4,5]
let square = num.map(function(number)
{
return number*2
})
console.log(square)
let age=[12,15,18,19,22,84]
let agechecker = age.filter(function(age)
{
    if(age>=18)
    return age
})
console.log(agechecker)
