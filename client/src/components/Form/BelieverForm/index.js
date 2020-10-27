// BelieverForm.jsx
import React, { Component } from 'react';
import BelieverWelcome from '../BelieverWelcome';
import BelieverName from '../BelieverName';
import BelieverAge from '../BelieverAge';
import BelieverLocation from '../BelieverLocation';
import BelieverLanguage from '../BelieverLanguage';
import SantaNote from '../SantaNote';
import BelieverEmail from "../BelieverEmail";
import BelieverRegistration from '../BelieverRegistration';
import BelieverConfirmation from '../BelieverConfirmation';

class BelieverForm extends Component {
    state = {
        step: 1,
        beilever: '',
        childName: '',
        childAge: '',
        childLocation: '',
        childLanguage: '',
        santaNote:'',
        childEmail:'',
        childPassword:'',
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

    handleChange = name => event => {
        this.setState({ [name] : event.target.value })
    }

    handleSelectChange = name => (event, data) => {
        this.setState({ [name] : data.value })
    }

    render(){
        const {step} = this.state;
        const { childName, childAge, childLocation, childLanguage, santaNote, childEmail, childPassword } = this.state;
        const values = { childName, childAge, childLocation, childLanguage, santaNote, childEmail, childPassword  };
        
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
                    handleChange = {this.handleSelectChange}
                    values={values}
                    />

        case 4:
            return <BelieverLocation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        
        case 5:
            return <BelieverLanguage
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleSelectChange}
                    values={values}
                    />
        case 6:
            return <SantaNote
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        
        case 7:
            return (
                <BelieverEmail
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            

        case 8:
            return <BelieverRegistration
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />

        case 9:
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