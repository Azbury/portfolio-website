import React, { Component } from 'react'

class Header extends Component {

    handleContactClick(e) {
        e.preventDefault()
        this.props.footerScrollReference.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    mouse(id) {
        var el = document.getElementById(id)
        el.style.color = "red"
    }

    mouseOut(id) {
        var el = document.getElementById(id)
        el.style.color = "black"
    }

    render() {
        return (
            <div className="header">
                <div className="name">Austin Asbury</div>
                <button onClick={(event) => this.handleHomeClick(event)} className="navbar-button">Home</button>
                <button className="navbar-button">About Myself</button>
                <button className="navbar-button">Skills</button>
                <button className="navbar-button">Projects</button>
                <button
                    className="navbar-button" 
                    onMouseEnter={() => this.mouse("contact-info")} 
                    onMouseLeave={() => this.mouseOut("contact-info")} 
                    onClick={(event) => this.handleContactClick(event)} 
                    id={"contact-info"}>
                    Contact Info
                </button>
            </div>
        )
    }
}

export default Header