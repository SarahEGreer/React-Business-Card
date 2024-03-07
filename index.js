import React from "react";
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Footer from "./Footer"

function App() {
    return (
        <div>
            <Info />
            <About />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))

