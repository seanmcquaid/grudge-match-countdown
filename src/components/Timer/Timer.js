import React, {useState, useEffect} from "react";

const Timer = props => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [isGameTime, setIsGameTime] = useState(false);
    const targetDateTime = new Date("October 12, 2019 19:00:00 GMT");

    useEffect(() => {
        let interval;
        if(currentDateTime < targetDateTime){
            interval = setInterval(()=>{
                setCurrentDateTime(new Date());
            }, 1000)
        } else {
            setIsGameTime(true);
        }
        return () => clearInterval(interval);
    }, [currentDateTime, isGameTime])

    return(
        <div>
            TIMER
        </div>
    )
}

export default Timer;