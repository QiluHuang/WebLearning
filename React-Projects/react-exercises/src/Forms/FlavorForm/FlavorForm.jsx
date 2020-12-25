import React, { Component } from 'react';

class FlavorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'count'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("Your favorite favor is: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Please select your favorite flavor:
                    <slect value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">grape fruit</option>
                        <option value="lime">lime</option>
                        <option value="coconut">coconut</option>
                        <option value="mango">mango</option>
                    </slect>
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export default FlavorForm;

