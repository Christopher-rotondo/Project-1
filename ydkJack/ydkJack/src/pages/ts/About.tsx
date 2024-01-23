import Nav from "../../components/ts/Nav.tsx"
import "../css/about.css"

function About(props) {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel beatae repellendus vitae ipsa fugit quibusdam totam perferendis soluta deserunt dignissimos odit modi, eligendi facere deleniti iste aliquam sequi eos.</p>
            <button onClick={() => props.setCurPage("Home")}>
                About
            </button>
        </div>
    )
}

export default About