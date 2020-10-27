import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';


class BelieverWelcome extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
 

    render(){
        return(

            <div>
                <Container textAlign='center'>
                <p style={{ marginBottom: '1em' }}>Santa has made his list and he is checking it twice. Answer the following questions to determine if you've been naughty or nice!</p>
                <Button onClick={this.saveAndContinue}> Continue </Button>
                </Container>
            </div>
        )
    }
}

export default BelieverWelcome;

