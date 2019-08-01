import React, { Component } from 'react';

export default class CreateUser extends Component{

    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(ev){
        ev.preventDefault();

        // add functions here to execute on submit

        // reset the form after submit:
        this.setState({     
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    handleChange(ev){
        ev.preventDefault();
        this.setState({
            [ev.target.name] : ev.target.value
        })
    }

    render() {
        return (    
            <form onSubmit = {this.handleSubmit}>
                 <label>First Name:</label>
                    <input type = 'text' name = 'firstName' value = {this.state.firstName} onChange = {this.handleChange}/><br/>
                 <label>Last Name:</label>
                    <input type = 'text' name = 'lastName' value = {this.state.lastName} onChange = {this.handleChange}/><br/>
                 <label>Email:</label>
                    <input type = 'text' name = 'email' value = {this.state.email} onChange = {this.handleChange}/><br/>
                 <label>Create Password (Minimum 8 characters):</label>
                    <input type="password" name="password" value = {this.state.password} minLength="8" required onChange={this.handleChange}/><br/>
                <button type = 'submit'>Create New User</button> 
            </form>
        )
    }

}

