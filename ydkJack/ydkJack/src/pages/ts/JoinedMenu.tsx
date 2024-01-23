import "../css/JoinedMenu.css"

function JoinedMenu(props) {
    return (
        <div>
            <h1>JoinedMenu</h1>
            <button onClick={() => props.setCurPage("About")}>
                
            </button>
        </div>
    )
}

export default JoinedMenu