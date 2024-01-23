import "../css/GetName.css"
import supabase from "../../supabase.js"

function GetName(props) {
    const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length)
    return (
        <div>
            <h1>GetName</h1>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
            <button onClick={async () => {
                if ( props.isHost ) {
                    let code;
                    for (;;) {
                        code = generateRandomString()
                        const { data } = await supabase
                            .from('Games')
                            .select('GameCode')
                            .eq('GameCode', code)
                        if (data.length == 0) {
                            break
                        }
                    }
                    await supabase
                        .from('Games')
                        .insert([
                            { GameVariant: 1 },
                            { Join_Code: code },
                            { p1: props.name }
                        ])
                    props.setGameID(code)
                    props.setCurPage('GuestMenu')
                } else {
                    const { data } = await supabase
                        .from('Games')
                        .select()
                        .eq('Join_Code', props.gameID)
                    if (data[0].p1 == props.name || data[0].p2 == props.name || data[0].p3 == props.name || data[0].p4 == props.name) {
                        document.getElementById('invalid')!.innerHTML = "Name already taken! Try Again"
                        return
                    } 
                    if (data[0].p2 != null && data[0].p3 != null && data[0].p4 != null) {
                        document.getElementById('invalid')!.innerHTML = "Game Full!"
                        return
                    }
                    let playerNum = 'p2'
                    if (data[0].p2 != null) {
                        playerNum = 'p3'
                    }
                    if (data[0].p3 != null) {
                        playerNum = 'p4'
                    }
                    await supabase
                        .from('Games')
                        .update({ [playerNum]: props.name })
                        .eq('Join_Code', props.gameID)
                    
                    props.setCurPage('GuestMenu')
                }
            }}>
                Submit
            </button>
            <p id="invalid"></p>
        </div>
    )
}

export default GetName