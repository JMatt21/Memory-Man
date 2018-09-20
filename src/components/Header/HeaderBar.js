import React from "react";
import Reset from "../GameOverText/Reset";

const HeaderBar = ({reset}) => (
    <nav className="navbar navbar-expand-xl navbar-light bg-primary">
        <Reset className="navbar-brand text-light" reset={reset}>Jerma Rumble Memory Game</Reset>
        {/* <a className="navbar-brand text-light" href=''>Jerma Rumble Memory Game</a> */}
        <a className="navbar-link text-light" target="_blank" rel="noopener noreferrer" href="http://jerma-lore.wikia.com/wiki/Jerma_Rumble">Jerma Rumble Wiki</a>

    </nav>
);

export default HeaderBar;