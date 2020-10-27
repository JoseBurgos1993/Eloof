import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class SantaNote extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
        
        <Form>
                <h1 className="ui centered">Write Santa a note below.</h1>
                <Form.Field>
                    <input
                    placeholder="I've been very good this year.."
                    onChange={this.props.handleChange('santaNote')}
                    defaultValue={values.santaNote}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default SantaNote;
