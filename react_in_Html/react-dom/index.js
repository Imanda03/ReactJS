 import React from "react"
 import ReactDOM from "react-dom"


const page = (
    <div>
        <h1>Collection of fruits</h1>
        <h3>My favourite</h3>
        <ol>
            <li>Mango</li>
            <li>Banana</li>
            <li>Orange</li>
            <li>Apple</li>
        </ol>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))