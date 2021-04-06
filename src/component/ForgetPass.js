import React, { Component } from 'react'

class ForgetPass extends Component {
    render() {
        return (
            <form>
                <h3>Forget Password</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        placeholder="Enter email" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit Code</button>

            </form>
        )
    }
}

export default ForgetPass
