import React from "react";
import styles from "./Footer.module.css";
import Text from "../UI/Text/Text";

const Footer = props => {
    return(
        <div className={styles.footerContainer}>
            <Text> © TSPowerline 2019</Text>
        </div>
    )
}

export default Footer;