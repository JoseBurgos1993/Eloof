import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

const gradeOptions = [
    {
        key: 'K',
        text: 'K',
        value: 'K',
    },
    {
        key: '1',
        text: '1',
        value: '1',
    },
    {
        key: '2',
        text: '2',
        value: '2',
    },
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
];

class BelieverGrade extends Component{

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
                    options={gradeOptions}
                    placeholder='Your grade'
                    onChange={this.props.handleChange('childGrade')}
                    defaultValue={values.childGrade}
                />
               
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default BelieverGrade;

