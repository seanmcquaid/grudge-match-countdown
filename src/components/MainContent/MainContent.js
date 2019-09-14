import React from "react";
import styles from "./MainContent.module.css";
import Timer from "../../containers/Timer/Timer";

const MainContent = props => {
    return (
        <div className={styles.mainContentContainer}>
            <Timer />
        </div>
    )
}
export default MainContent;