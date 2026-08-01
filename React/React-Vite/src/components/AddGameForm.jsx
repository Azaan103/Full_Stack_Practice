import { useState } from "react";
function AddGameForm()
{       

    const [title, setTitle] = useState("");   
    const [genre,setGenre] = useState("");
    const [status,setStatus] = useState("Status");

    console.log(title);
    console.log(genre);
    console.log(status)
    return(
        <section className="form-card">
            <h2>Add New Game</h2>

            <form>
                <input type="text" 
                placeholder="Game Title"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
                />
                
                <input type="text"
                 placeholder="Genre"
                 value = {genre}
                 onChange={(event)=> 
                    {
                        setGenre(event.target.value) 
                    }}
                 />

                <select value={status}
                    onChange = {(event)=>{
                        setStatus(event.target.value)
                    }}>
                    

                    <option>Status</option>
                    <option>Playing</option>
                    <option>Completed</option>
                    <option>Wishlist</option>
                </select>

                <button type="button" className="add-btn">
                    Add Game
                </button>
            </form>
        </section>
    )
}

export default AddGameForm