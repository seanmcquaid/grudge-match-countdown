import React, {useState, useEffect} from "react";
import styles from "./Timer.module.css";
import Text from "../UI/Text/Text";

const Timer = props => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [isGameTime, setIsGameTime] = useState(false);
    const targetDateTime = new Date("October 12, 2019 17:00:00 EST");

    useEffect(() => {
        let interval;
        if(currentDateTime.getTime() < targetDateTime.getTime()){
            interval = setInterval(() => {
                setCurrentDateTime(new Date());
            }, 999)
        } else {
            setIsGameTime(true);
        }
        return () => clearInterval(interval);
    }, [currentDateTime, isGameTime, targetDateTime])

    const currentDateTimeInMilliseconds = currentDateTime.getTime();
    const targetDateTimeInMilliseconds = targetDateTime.getTime();

    const milliSecondsUntilMatch = targetDateTimeInMilliseconds - currentDateTimeInMilliseconds;
    const secondsUntilMatch = Math.floor(milliSecondsUntilMatch / 1000);
    const minutesUntilMatch = Math.floor(secondsUntilMatch / 60);
    const hoursUntilMatch = Math.floor(minutesUntilMatch / 60);
    const daysUntilMatch = Math.floor(hoursUntilMatch / 24);

    const formattedSecondsUntilMatch = secondsUntilMatch % 60;
    const formattedMinutesUntilMatch = minutesUntilMatch % 60;
    const formattedHoursUntilMatch = hoursUntilMatch % 24;

    const timeString = daysUntilMatch + 
        " : " + (formattedHoursUntilMatch.toString().length === 1 ? "0" : "") + formattedHoursUntilMatch + 
        " : " + (formattedMinutesUntilMatch.toString().length === 1 ? "0" : "") + formattedMinutesUntilMatch + 
        " : " + (formattedSecondsUntilMatch.toString().length === 1 ? "0" : "") +formattedSecondsUntilMatch;

    const beforeGameTimeContent = <Text specialText={true}>{timeString}</Text>;
    const afterGameTimeContent = <iframe className={styles.youtubeVideo} title="Stream Link" src="https://www.youtube.com/watch?v=BRo7v3VTz7g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
    
    const gameTimeContainerStyles = isGameTime ? styles.afterGameTimeContainer : styles.beforeGameTimeContainer;
    
    return(
        <div className={gameTimeContainerStyles}>
            {currentDateTime.getTime() < targetDateTime.getTime() ? beforeGameTimeContent : afterGameTimeContent}
        </div>
    )
}

export default Timer;