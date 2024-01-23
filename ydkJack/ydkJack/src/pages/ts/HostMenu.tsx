import "../css/HostMenu.css"

function HostMenu(props) {
    return (
        <div>
            <h1>HostMenu</h1>
            <button onClick={() => props.setCurPage("Home")}>
                
            </button>
        </div>
    )
}

export default HostMenu