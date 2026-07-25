let joke = document.querySelector('.joke')

async function getdata() {
    let response = await fetch('https://official-joke-api.appspot.com/random_joke')
    let data = await response.json()

    joke.textContent=data.setup + "" + data.punchline
    console.log(data)
    
        
    return 200
}

getdata()