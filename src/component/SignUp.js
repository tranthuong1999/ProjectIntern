import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            nameError: '',
            emailError: '',
            passError: ''
        }
    }
    handleUserName = (e) => {
        this.setState({
            username: e.target.value
        })

    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })

    }
    handlePass = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password,username } = this.state
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const pe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{7,}$/
        const ue=/^[a-zA-Z0-9]+$/
        if (!re.test(email)) {
            this.setState({
                emailError: "email invalid"
            })
        }
        if (!pe.test(password)) {
            this.setState({
                passError: "password invalid"
            })
        }
        if(! ue.test(username)){
            this.setState({
                nameError:'username Invalid'
            })
        }

    }

    render() {
        const { email, password, username, emailError, passError, nameError } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Register</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={this.handleUserName}
                    />
                    {nameError ? <div style={{ color: "red" }}>{nameError}</div> : null}

                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.handleEmail}
                    />
                    {emailError ? <div style={{ color: "red" }}>{emailError}</div> : null}


                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.handlePass}
                    />
                    {passError ? <div style={{ color: "red" }}>{passError}</div> : null}

                </div>

                <button type="submit" className="btn btn-primary btn-block">Register</button>
                {/* <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p> */}
            </form>
        );
    }
}