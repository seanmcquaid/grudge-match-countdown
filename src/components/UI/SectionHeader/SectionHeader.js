import React from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = props => {
    const subTitle = props.subTitleText ? <h4 className={styles.subTitleText}>{props.subTitleText}</h4> : null;
    return(
        <div className={styles.sectionHeaderContainer}>
            <h1 className={styles.titleText}>{props.titleText}</h1>
            {subTitle}
        </div>
    )
}

export default SectionHeader;