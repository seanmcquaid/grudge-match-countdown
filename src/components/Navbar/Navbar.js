import React from "react";
import styles from "./Navbar.module.css";

const Navbar = props => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navLeft}>
                Left
            </div>
            <div className={styles.navRight}>
                Right
            </div>
        </div>
    )
}

export default Navbar;