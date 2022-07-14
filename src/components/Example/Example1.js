import React, { Component } from 'react';
import ChildComponent from "./ChildComponent";

class Example1 extends Component {

    state = {
        firstName: '',
        lastName: '',
    }

    handleChangeFirstName = (event) => {
        this.setState({ 
            firstName: event.target.value 
        });
    }

    handleChangeLastName = (event) => {
        this.setState({ 
            lastName: event.target.value 
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log('>>> check data input', this.state)
    }

    render() {
        console.log('>>> call render', this.state)
        return (
            <div>
                <h1>Login Form</h1>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input 
                        type="text"  
                        value={this.state.firstName} 
                        onChange={(event) =>this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input 
                        type="text"  
                        value={this.state.lastName} 
                        onChange={(event) =>this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input 
                        type="submit" 
                         value="send"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent  
                    name={'child one'}
                    age = {'30'}
                />

            </div>
        );
    }
}

export default Example1;
