// BelieverForm.jsx
import React, { Component } from 'react';
import BelieverConfirmation from '../BelieverConfirmation';
import BelieverWelcome from '../BelieverWelcome';
import BelieverName from '../BelieverName';
import BelieverAge from '../BelieverAge';
import BelieverGrade from '../BelieverGrade';
import BelieverLocation from '../BelieverLocation';
import BelieverWishlist from '../BelieverWishlist';
import BelieverRegistration from '../BelieverRegistration';



class BelieverForm extends Component {
    state = {
        step: 1,
        beilever: '',
        childName: '',
        childAge: '',
        childGrade: '',
        childLocation: '',
        childWishlist: []
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { childName, childAge, childGrade, childLocation, childWishlist } = this.state;
        const values = { childName, childAge, childGrade, childLocation, childWishlist };
        switch(step) {
        case 1:
            return <BelieverWelcome
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <BelieverName
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <BelieverAge
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />

        case 4:
            return <BelieverGrade
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange = {this.handleChange}
            values={values}
            />
        
        case 5:
            return <BelieverLocation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
                />
        
        case 6:
            return <BelieverWishlist
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
                />

        case 7:
            return <BelieverRegistration
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange = {this.handleChange}
            values={values}
            />

        case 8:
            return <BelieverConfirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange = {this.handleChange}
            />
        

        default:
            return <BelieverWelcome />
        }    
    }
}

export default BelieverForm;