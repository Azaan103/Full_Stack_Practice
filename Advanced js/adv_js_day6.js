async function getData() {
    console.log("1");

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    console.log("2");
    console.log("4")
}

console.log("Start");

getData();

console.log("End");