import "../css/nav.css"
import { useState } from "react"
import GameAnswer from "../../pages/ts/GameAnswer"
import GameEnd from "../../pages/ts/GameEnd"
import GameQuestion from "../../pages/ts/GameQuestion"
import GameStart from "../../pages/ts/GameStart"
import GetName from "../../pages/ts/GetName"
import HostMenu from "../../pages/ts/HostMenu"
import JoinedMenu from "../../pages/ts/JoinedMenu"
import JoiningMenu from "../../pages/ts/JoiningMenu"
import MainMenu from "../../pages/ts/MainMenu"

function Nav() {
    const [curPage, setCurPage] = useState("MainMenu")
    const [isHost, setHost] = useState(undefined)

    return (
        <div>
            <div>
                {curPage === "GameAnswer" ? < GameAnswer setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "GameEnd" ? < GameEnd setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "GameQuestion" ? < GameQuestion setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "GameStart" ? < GameStart setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "GetName" ? < GetName setCurPage={setCurPage} isHost={isHost}/> : null}
            </div>
            <div>
                {curPage === "HostMenu" ? < HostMenu setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "JoinedMenu" ? < JoinedMenu setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "JoiningMenu" ? < JoiningMenu setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "MainMenu" ? < MainMenu setCurPage={setCurPage}/> : null}
            </div>
        </div>
    )
}

export default Nav