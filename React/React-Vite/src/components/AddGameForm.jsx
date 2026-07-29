function AddGameForm()
{
    return(
        <section className="form-card">
            <h2>Add New Game</h2>

            <form>
                <input type="text" placeholder="Game Title"/>

                <input type="text" placeholder="Genre"/>

                <select>
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