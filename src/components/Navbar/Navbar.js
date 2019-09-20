import React from "react";
import styles from "./Navbar.module.css";
import Text from "../UI/Text/Text";

const Navbar = props => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navLeft}>
                <Text navBarText={true} leftNav={true}>Left</Text>
            </div>
            <div className={styles.navRight}>
                <Text navBarText={true} rightNav={true}>Right</Text>
            </div>
        </div>
    )
}

export default Navbar;