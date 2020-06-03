// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
    state = {
        timesClicked: 0
    }

    increaseValue = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked + 1
        }))
    }


    render(){
        return(
        <button onClick={this.increaseValue}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker