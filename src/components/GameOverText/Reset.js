import React from 'react';

export default ({ children, reset, className }) => {
    return (
        //    <button onClick={reset} className=""><a>{children}</a></button>
        <a onClick={reset} href='#' className={className || ""}>{children}</a>
    );
};