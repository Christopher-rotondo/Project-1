import "../css/GameAnswer.css"

function GameAnswer(props) {
    return (
        <div>
            <h1>GameAnswer</h1>
            <button onClick={() => props.setCurPage("About")}>
                
            </button>
        </div>
    )
}

export default GameAnswer