import React from "react"

const Header = ({score}) => (
    <div className="jumbotron">
        <h1>See how many images you can remember!</h1>
        <h2>Keep clicking images that have not already appeared!</h2>
        <h3>Your Score: {score}</h3>
    </div>
)

export default Header;