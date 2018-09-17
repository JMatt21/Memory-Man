import React from "react";


const Card = ({ image, handleClickEvent}) => (
    <div className="col-3 ml-3 mr-3" onClick = {handleClickEvent} style={{ backgroundColor: image || 'red', height: 150}} image={image}/>
);

export default Card;