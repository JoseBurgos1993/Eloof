import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class BelieverRegistration extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { childName, childAge, childGrade, childLanguage } } = this.props;

        return(
            <div>
                <h1 className="ui centered">Confirm you letter to Santa</h1>
                <p>Click Confirm if you would like to send the following information to Santa</p>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Name: {childName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='calendar' />
                        <List.Content>Age: {childAge} years old</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Grade: {childGrade}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Language: {childLanguage}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
        )
    }
}

export default BelieverRegistration;