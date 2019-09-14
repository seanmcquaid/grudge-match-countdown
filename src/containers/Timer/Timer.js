import React, {Component} from "react";

class Timer extends Component {
    state = {
        time : new Date()
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                time : new Date()
            })
        }, 1000);
    }

    render(){
        console.log(this.state.time)
        return(
            <div>
                Timer here
            </div>
        )
    }
}

export default Timer;