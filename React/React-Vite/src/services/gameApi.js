const BASE_URL = "https://www.freetogame.com/api";

export async function getGames(){
    const response = await fetch(`${BASE_URL}/games`);

        if(!response.ok)
        {
            throw new Error("API not found ")
        }

    const data = await response.json()
    return data;

}
