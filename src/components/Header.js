import React, { Component } from 'react'

class Header extends Component {

    handleContactClick(e) {
        e.preventDefault()
        this.props.footerScrollReference.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    handleAboutMeClick(e) {
        e.preventDefault()
        this.props.aboutMeScrollReference.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    mouse(id) {
        var el = document.getElementById(id)
        el.style.color = "#F08080"
    }

    mouseOut(id) {
        var el = document.getElementById(id)
        el.style.color = "black"
    }

    render() {
        return (
            <div className="header">
                <div className="navbar">
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
                        onClick={(event) => this.handleAboutMeClick(event)}
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
                <div className="name">Austin Asbury</div>
            </div>
        )
    }
}

export default Header