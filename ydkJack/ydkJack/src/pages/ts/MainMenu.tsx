import "../css/MainMenu.css"
import supabase from "../../supabase.js"

function MainMenu(props) {
    return (
        <div>
            <h1>You Don't Know Jack!</h1>
            <button onClick={() => {
                props.setHost(true)
                supabase.
                props.setCurPage("GetName")
            }}>
                Start Game
            </button>
            <button onClick={() => {
                props.setHost(false)
                props.setCurPage("GetName")
            }}>
                Join Game
            </button>
        </div>
    )
}

export default MainMenu