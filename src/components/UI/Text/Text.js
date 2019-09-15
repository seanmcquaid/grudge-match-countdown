import React from "react";
import styles from "./Text.module.css";

const Text = props => {
    return(
        <div className={styles.textContainer}>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default Text;