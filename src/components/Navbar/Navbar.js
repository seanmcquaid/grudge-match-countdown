import React from "react";
import styles from "./Navbar.module.css";
import Text from "../UI/Text/Text";

const Navbar = props => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navLeft}>
                <Text>Left</Text>
            </div>
            <div className={styles.navRight}>
                <Text>Right</Text>
            </div>
        </div>
    )
}

export default Navbar;