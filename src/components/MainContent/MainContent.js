import React from "react";
import styles from "./MainContent.module.css";
import Timer from "../Timer/Timer";
import SectionHeader from "../UI/SectionHeader/SectionHeader";

const MainContent = props => {
    return (
        <div className={styles.mainContentContainer}>
            <SectionHeader 
                titleText="TSPowerline Grudge Match 2019" 
                subTitleText="KrispyKreme vs Caiserxs"
            />
            <Timer />
        </div>
    )
}
export default MainContent;