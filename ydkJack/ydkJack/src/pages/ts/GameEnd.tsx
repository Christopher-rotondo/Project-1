import "../css/GameEnd.css"
import supabase from "../../supabase.js"

function GameEnd(props) {
    return (
        <div>
            <h1>GameEnd</h1>
            <button onClick={() => props.setCurPage("About")}>
                
            </button>
        </div>
    )
}

export default GameEnd