import "../css/JoiningMenu.css"

function JoiningMenu(props) {
    return (
        <div>
            <h1>JoiningMenu</h1>
            <button onClick={() => props.setCurPage("About")}>
                
            </button>
        </div>
    )
}

export default JoiningMenu