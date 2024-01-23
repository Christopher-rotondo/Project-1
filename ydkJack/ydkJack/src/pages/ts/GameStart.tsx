import "../css/GameStart.css"

function GameStart(props) {
    return (
        <div>
            <h1>GameStart</h1>
            <button onClick={() => props.setCurPage("About")}>
                About
            </button>
        </div>
    )
}

export default GameStart