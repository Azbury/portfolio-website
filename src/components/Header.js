import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="name">Austin Asbury</div>
                <h2 className="navbar-link">Home</h2>
                <h2 className="navbar-link">About Myself</h2>
                <h2 className="navbar-link">Skills</h2>
                <h2 className="navbar-link">Projects</h2>
                <h2 className="navbar-link">Contact Info</h2>
            </div>
        )
    }
}

export default Header