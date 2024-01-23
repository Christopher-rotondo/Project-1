import "../css/JoinedMenu.css"
import supabase from "../../supabase.js"

function WaitMenu(props) {
    return (
        <div>
            
            <h1>WaitMenu</h1>
            {props.isHost
            ?   <button onClick={() => props.setCurPage("GameStart")}>
                    Start Game
                </button> 
            :   null}
        </div>
    )
}

export default WaitMenu