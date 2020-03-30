import React from "react";
import MovementInput from "./MovementInput";
import Result from "./Result";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squat: 0,
            benchPress: 0,
            deadLift: 0,
            bodyWeight: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <MovementInput id="squat" label="Squat"  value={this.state.squat} setValue={this.handleChange}/>
                    <MovementInput id="benchPress" label="Bench Press" value={this.state.benchPress} setValue={this.handleChange}/>
                    <MovementInput id="deadLift" label="Deadlift" value={this.state.deadLift} setValue={this.handleChange}/>
                    <MovementInput id="bodyWeight" label="Body Weight" value={this.state.bodyWeight} setValue={this.handleChange}/>
                </form>
                <Result squat={this.state.squat} benchPress={this.state.benchPress} deadLift={this.state.deadLift} bodyWeight={this.state.bodyWeight}/>
            </div>
        );
    }
}

export default FormInput;