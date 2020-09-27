import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="name">Austin Asbury</h1>
                <h2 className="home">Home</h2>
                <h2 className="about">About Me</h2>
                <h2 className="projects">Projects</h2>
            </div>
        )
    }
}

export default Header