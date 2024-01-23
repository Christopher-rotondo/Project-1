import "../css/nav.css"
import { useState } from "react"
import GameAnswer from "../../pages/ts/GameAnswer"
import GameEnd from "../../pages/ts/GameEnd"
import GameQuestion from "../../pages/ts/GameQuestion"
import GameStart from "../../pages/ts/GameStart"
import GetName from "../../pages/ts/GetName"
import HostMenu from "../../pages/ts/HostMenu"
import JoinedMenu from "../../pages/ts/WaitMenu"
import JoiningMenu from "../../pages/ts/GuestJoin"
import MainMenu from "../../pages/ts/MainMenu"

function Nav() {
    const [curPage, setCurPage] = useState("MainMenu")
    const [isHost, setHost] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [code, setCode] = useState(undefined)

    return (
        <div>
            <div>
                {curPage === "GameAnswer" ? < GameAnswer setCurPage={setCurPage} name={name}/> code={code}: null}
            </div>
            <div>
                {curPage === "GameEnd" ? < GameEnd setCurPage={setCurPage} name={name}/> code={code}: null}
            </div>
            <div>
                {curPage === "GameQuestion" ? < GameQuestion setCurPage={setCurPage} name={name}/> code={code}: null}
            </div>
            <div>
                {curPage === "GameStart" ? < GameStart setCurPage={setCurPage} name={name}/> code={code}: null}
            </div>
            <div>
                {curPage === "GetName" ? < GetName setCurPage={setCurPage} isHost={isHost} setName={setName} setCode={setCode}/> : null}
            </div>
            <div>
                {curPage === "HostMenu" ? < HostMenu setCurPage={setCurPage} name={name}/> code={code}: null}
            </div>
            <div>
                {curPage === "JoinedMenu" ? < JoinedMenu setCurPage={setCurPage} name={name}/> code={code}: null}
            </div>
            <div>
                {curPage === "JoiningMenu" ? < JoiningMenu setCurPage={setCurPage} name={name} setCode={setCode}/> : null}
            </div>
            <div>
                {curPage === "MainMenu" ? < MainMenu setCurPage={setCurPage} setHost={setHost}/> : null}
            </div>
        </div>
    )
}

export default Nav