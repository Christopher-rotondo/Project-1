import "../css/GameQuestion.css"

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