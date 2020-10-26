import React, { Component } from 'react'

class Header extends Component {

    constructor() {
        super()
        this.homeRef = React.createRef()
    }

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

    handleHomeClick(e) {
        e.preventDefault()
        this.homeRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    handleSkillsClick(e) {
        e.preventDefault()
        this.props.skillsScrollReference.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    handleProjectsClick(e) {
        e.preventDefault()
        this.props.projectsScrollReference.current.scrollIntoView({
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
                        onClick={(event) => this.handleHomeClick(event)}
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
                        onClick={(event) => this.handleSkillsClick(event)}
                        id={"skills"}>
                        Skills
                    </button>
                    <button 
                        className="navbar-button"
                        onMouseEnter={() => this.mouse("projects")} 
                        onMouseLeave={() => this.mouseOut("projects")}
                        onClick={(event) => this.handleProjectsClick(event)}
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
                <div ref={this.homeRef} className="name">Austin Asbury</div>
            </div>
        )
    }
}

export default Header