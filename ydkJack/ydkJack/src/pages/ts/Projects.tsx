import Nav from "../../components/ts/Nav.tsx"
import "../css/projects.css"

function Projects(props) {
    return (
        <div>
            <h1>Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel beatae repellendus vitae ipsa fugit quibusdam totam perferendis soluta deserunt dignissimos odit modi, eligendi facere deleniti iste aliquam sequi eos.</p>
            <button onClick={() => props.setCurPage("About")}>
                About
            </button>
        </div>
    )
}

export default Projects