import React from "react";
import Profile from "../Assets/profile.jpg"

function Avatar(props) {
    const { height, width } = props;
    const dimension = {
        height:`${height}rem`,
        width:`${width}rem`
    }

    const classes = `rounded-full  overflow-hidden bg-gray-300`
    return (
        <div className={classes} style={dimension}>
            <img src={Profile} alt="DP" />
        </div>
    );
}

export default Avatar;