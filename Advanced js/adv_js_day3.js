const person = {
    name: "Ali",
    age: 22
};

let {name,age} = person

console.log(name,age)

const student = {
    id: 241160,
    name: "Azaan",
    marks: 95
};

let {id,name,marks} = student

console.log(name +"scored"+ marks +"marks")

const person = {
    name: "Sara"
};

let { age = 18} = person
console.log(age)

const employee = {
    name: "Ali",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

let { address: {city,country} 
} = employee
console.log(city,country)

const colors = ["Red", "Blue", "Green"];

const [c1,c2,c3] = colors
console.log(c1,c2,c3)