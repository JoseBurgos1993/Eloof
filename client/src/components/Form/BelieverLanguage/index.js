import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

const languageOptions = [
    {
        key: 'English',
        text: 'English',
        value: 'English',
    },
    {
        key: 'Spanish',
        text: 'Spanish',
        value: 'Spanish',
    },
];

class BelieverLanguage extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form>
                <h1 className="ui centered">What language do you like to speak?</h1>
                <Form.Field 
                    control={Form.Select} 
                    options={languageOptions}
                    placeholder='Your language'
                    onChange={this.props.handleChange('childLanguage')}
                    defaultValue={values.childLanguage}
                />
               
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default BelieverLanguage;
