import React, { Component } from "react";
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passError: '',
        }
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
        const { email, password } = this.state
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const pe=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{7,}$/
        if (!re.test(email)){
            this.setState({
                emailError:"email invalid"
            })
        }
        if (!pe.test(password)) {
                this.setState({
                    passError:"password invalid"
                })
            }

    }
    
    render() {
        const { email, password, emailError, passError } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.handleEmail}
                        value={email}
                    />
                    {emailError ? <div style={{ color: "red" }}>{emailError}</div> : null}

                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={this.handlePass}
                        value={password}
                    />
                    {passError ? <div style={{ color: "red" }}>{passError}</div> : null}

                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <a href="/forget">Forgot Password</a>
                </p>
            </form>
        );
    }
}