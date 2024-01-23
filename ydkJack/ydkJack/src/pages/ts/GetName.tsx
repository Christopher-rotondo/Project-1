import "../css/GetName.css"

function GetName(props) {
    return (
        <div>
            <h1>GetName</h1>
            <button onClick={() => props.setCurPage("About")}>
                About
            </button>
        </div>
    )
}

export default GetName