import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

const ageOptions = [
    {
        key: '3',
        text: '3',
        value: '3',
    },
    {
        key: '4',
        text: '4',
        value: '4',
    },
    {
        key: '5',
        text: '5',
        value: '5',
    },
    {
        key: '6',
        text: '6',
        value: '6',
    },
    {
        key: '7',
        text: '7',
        value: '7',
    },
    {
        key: '8',
        text: '8',
        value: '8',
    },
    {
        key: '9',
        text: '9',
        value: '9',
    },
    {
        key: '10',
        text: '10',
        value: '10',
    },
];

class BelieverAge extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form>
                <h1 className="ui centered">How old are you?</h1>
                <Form.Field 
                    control={Form.Select} 
                    options={ageOptions}
                    placeholder='Your age'
                    onChange={this.props.handleChange('childAge')}
                    defaultValue={values.childAge}
                />
               
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default BelieverAge;
