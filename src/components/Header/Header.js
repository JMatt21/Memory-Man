import React from "react";
import HeaderBar from "./HeaderBar";
import HeaderImage from "./HeaderImage";
import "./HeaderImage.css";

const Header = ({ score, reset }) => (
    <div className="mb-5">
        <HeaderBar reset={reset} />
        <HeaderImage>
            <div className="centered p-3">
                <p className="">See how many images you can guess</p>
                <p className="">Without clicking the same image twice!</p>
                <p className="">Your score is: {score}</p>
            </div>
        </HeaderImage>
    </div>
)

export default Header;