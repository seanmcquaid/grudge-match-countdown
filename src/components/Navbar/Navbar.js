import React from "react";
import styles from "./Navbar.module.css";
import Text from "../UI/Text/Text";

const Navbar = props => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navLeft}>
                <Text navBarText={true} leftNav={true}>
                    <span>T</span><span>S</span>Powerline
                </Text>
            </div>
            <div className={styles.navRight}>
                <Text navBarText={true} rightNav={true}>
                    <a className={styles.navRightLink} rel="noopener noreferrer" href="https://www.youtube.com/channel/UC2INmP2FrP9Zv_4QfOrmKww/featured" target="_blank">Youtube</a>
                </Text>
            </div>
        </div>
    )
}

export default Navbar;