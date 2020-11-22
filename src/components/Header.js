import React, { Component } from 'react'

//Header
//Component used for header section with a fixed position that will move down the page except for the name

class Header extends Component {

    //creating reference for scrolling to the top of the page
    constructor() {
        super()
        this.homeRef = React.createRef()
    }

    //will scroll to contact section via click
    handleContactClick(e) {
        e.preventDefault()
        this.props.footerScrollReference.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    //will scroll to about me section via click
    handleAboutMeClick(e) {
        e.preventDefault()
        this.props.aboutMeScrollReference.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    //will scroll to experience section via click
    handleExperienceClick(e) {
        e.preventDefault()
        this.props.experienceScrollReference.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    //will scroll to top of the page via click
    handleHomeClick(e) {
        e.preventDefault()
        this.homeRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    //will scroll to the skills section via click
    handleSkillsClick(e) {
        e.preventDefault()
        this.props.skillsScrollReference.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    //will scroll to the projects section via click
    handleProjectsClick(e) {
        e.preventDefault()
        this.props.projectsScrollReference.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    //will change color of text when hovering over a button in the header
    mouse(id) {
        var el = document.getElementById(id)
        el.style.color = "#F08080"
    }

    //will change color of text back to black when the mouse leaves the button
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
                        onMouseEnter={() => this.mouse("experience")}
                        onMouseLeave={() => this.mouseOut("experience")}
                        onClick={(event) => this.handleExperienceClick(event)}
                        id={"experience"}>
                        Experience
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