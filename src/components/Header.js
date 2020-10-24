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
        el.style.color = "yellow"
    }

    mouseOut(id) {
        var el = document.getElementById(id)
        el.style.color = "black"
    }

    render() {
        return (
            <div className="header">
                <div className="name">Austin Asbury</div>
                <button 
                    className="navbar-button"
                    onMouseEnter={() => this.mouse("home")} 
                    onMouseLeave={() => this.mouseOut("home")} 
                    id={"home"}>
                    Home
                </button>
                <button 
                    className="navbar-button"
                    onMouseEnter={() => this.mouse("about-myself")} 
                    onMouseLeave={() => this.mouseOut("about-myself")} 
                    id={"about-myself"}>
                    About Myself
                </button>
                <button 
                    className="navbar-button"
                    onMouseEnter={() => this.mouse("skills")} 
                    onMouseLeave={() => this.mouseOut("skills")} 
                    id={"skills"}>
                    Skills
                </button>
                <button 
                    className="navbar-button"
                    onMouseEnter={() => this.mouse("projects")} 
                    onMouseLeave={() => this.mouseOut("projects")} 
                    id={"projects"}>
                    Projects
                </button>
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