import React, { Component } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
class Countdown extends Component {
    render() {
        return (
            <FlipCountdown
            hideYear
            size='medium' 
            theme='light'
            titlePosition='bottom'
            endAt={'2020-12-25 00:00:00'} 
            />
        );
    }
}
export default Countdown;