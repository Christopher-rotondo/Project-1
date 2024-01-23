import "../css/JoiningMenu.css"
import supabase from "../../supabase.js"

function JoiningMenu(props) {
    return (
        <div>
            <h1>JoiningMenu</h1>
            <label htmlFor="name">Code:</label>
            <input type="text" id="name" placeholder="Enter code here" />
            <button onClick={async () => {
                await supabase
                .from('Games')
                .select('*')
                .eq('GameCode', document.getElementById("name")!.innerHTML)
                .then(({ data }) => {
                    if (data.length == 0) {
                        document.getElementById("invalid")!.innerHTML = "Invalid Code! Try Again"
                    } else {
                        props.setGameID(data[0].id)
                        props.setCurPage('GetName')
                    }
                })
            }}>
                Submit
            </button>
            <p id="invalid"></p>
        </div>
    )
}

export default JoiningMenu