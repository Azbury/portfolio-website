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
                <h2 onClick={(event) => this.handleHomeClick(event)}className="navbar-link">Home</h2>
                <h2 className="navbar-link">About Myself</h2>
                <h2 className="navbar-link">Skills</h2>
                <h2 className="navbar-link">Projects</h2>
                <h2 onMouseEnter={() => this.mouse("contact-info")} onMouseLeave={() => this.mouseOut("contact-info")} onClick={(event) => this.handleContactClick(event)} className="navbar-link" id={"contact-info"}>Contact Info</h2>
            </div>
        )
    }
}

export default Header