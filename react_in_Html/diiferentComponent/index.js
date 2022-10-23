import React from "react"
import ReactDOM from "react-dom"

function Header(){
    <header>
        <nav>
            <h1>This is a header</h1>
        </nav>
    </header>
}

function MainBody(){
    return(
        
    <div>
        <h3>This is the main body</h3>
        <p>You can write anything in the body section</p>
    </div>
    )
}

function Footer(){
    return(
        
    <small>This is footer</small>
    )
}

function Page(){
    return(
        
    <div>
    <Header />
    <MainBody />
    <Footer />
    </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))