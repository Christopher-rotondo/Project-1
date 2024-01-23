import "../css/GameQuestion.css"
import supabase from "../../supabase.js"

function GameQuestion(props) {
    return (
        <div>
            <h1>GameQuestion</h1>
            <button onClick={() => props.setCurPage("About")}>
                
            </button>
        </div>
    )
}

export default GameQuestion