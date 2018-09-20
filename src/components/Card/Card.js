import React from "react";
import "./Card.css";
const Card = ({ image, handleClickEvent }) => {

    const bgImageStyle = {
        backgroundImage: `url('./images/${image}.png')`, 
    }

    return (
        <div className="col-3 bgImage border rounded" onClick={handleClickEvent}
            style={bgImageStyle}
            image={image} />

        // <img className="col-3" onClick = {handleClickEvent} style={{ backgroundImage: `url('./images/${image}')`, height: 150}} image={image}/>
    );
}

export default Card;