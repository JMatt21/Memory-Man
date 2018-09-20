import React from "react";

const Wrapper = ({ children }) => {
    return (
        <div className="container overflow-hidden mb-5">
            <div className="row justify-content-between">
                {children}
            </div>
        </div>
    )
}

export default Wrapper;