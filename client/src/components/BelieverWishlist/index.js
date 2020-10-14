import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class BelieverWishlist extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">What would you like to get for Chritmas?</h1>
                <Form.Field>
                    <label></label>
                    <input
                    placeholder='Your wishlist'
                    onChange={this.props.handleChange('childWishlist')}
                    defaultValue={values.childWishlist}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default BelieverWishlist;
