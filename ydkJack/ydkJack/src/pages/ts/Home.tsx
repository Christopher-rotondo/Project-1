import "../css/home.css"

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vel beatae repellendus vitae ipsa fugit quibusdam totam perferendis soluta deserunt dignissimos odit modi, eligendi facere deleniti iste aliquam sequi eos.</p>
            <button onClick={() => props.setCurPage("About")}>
                About
            </button>
        </div>
    )
}

export default Home