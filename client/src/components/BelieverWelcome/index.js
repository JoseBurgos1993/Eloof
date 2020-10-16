import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';


class BelieverWelcome extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
 

    render(){
        return(

            <div>
                <p>Santa has made his list and he is checking it twice. Answer the following questions to determine if you've been naughty or nice!</p>
            
    
                <Button onClick={this.saveAndContinue}> Continue </Button>

            </div>
        )
    }
}

export default BelieverWelcome;

