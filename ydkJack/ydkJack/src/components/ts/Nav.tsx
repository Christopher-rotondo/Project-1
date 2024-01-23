import "../css/nav.css"
import { useState } from "react"
import Home from "../../pages/ts/Home"
import About from "../../pages/ts/About"
import Projects from "../../pages/ts/Projects"
import Contact from "../../pages/ts/Contact"

function Nav() {
    const [curPage, setCurPage] = useState("Home")
    return (
        <div>
            <div>
                {curPage === "Home" ? < Home setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "About" ? < About setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "Projects" ? < Projects setCurPage={setCurPage}/> : null}
            </div>
            <div>
                {curPage === "Contacts" ? < Contact setCurPage={setCurPage}/> : null}
            </div>
        </div>
    )
}

export default Nav