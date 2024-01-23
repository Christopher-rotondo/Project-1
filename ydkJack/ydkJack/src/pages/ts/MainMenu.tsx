import "../css/MainMenu.css"

function MainMenu(props) {
    return (
        <div>
            <h1>You Don't Know Jack!</h1>
            <button onClick={() => props.setCurPage("HostMenu")}>
                Start Game
            </button>
            <button onClick={() => props.setCurPage("JoiningMenu")}>
                Join Game
            </button>
        </div>
    )
}

export default MainMenu