import React from "react";
import styles from "./Text.module.css";

const Text = props => {
    const navBarText = props.leftNav ? styles.leftNavTextContainer : styles.rightNavTextContainer; 
    // finish this navbar styling tomorrow
    return(
        <div className={props.navBarText ? navBarText : styles.textContainer}>
            <p className={props.specialText ? styles.specialText : styles.text}>{props.children}</p>
        </div>
    )
}

export default Text;