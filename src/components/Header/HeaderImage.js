import React from "react";

const HeaderImage = props => (
    <div className="imgContainer">
        <img src="./images/jermania.png" alt='Jermania Rumble' className="img-fluid" style={{height: 400, width:'100%'}}/>
        {props.children}
    </div>
);

export default HeaderImage;
