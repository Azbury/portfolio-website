import React, { Component } from 'react'
import Ruby from "../pictures/ruby.jpg"
import Rails from "../pictures/rails.png"
import ReactPic from "../pictures/react.jpg"
import JavaScript from "../pictures/javascript.png"
import HTML from "../pictures/html.png"
import CSS from "../pictures/css.jpg"

//Skills
//Component used for displaying the buttons of the skills I posses and list of the projects that use those skills

class Skills extends Component {

    //state used to change the css class of the paragraphs under the buttons that are displayed when clicked
    state = {
        hideRubyProjects: true,
        hideRailsProjects: true,
        hideReactProjects: true,
        hideJavaScriptProjects: true,
        hideHTMLProjects: true,
        hideCSSProjects: true
    }

    //will display ruby projects created when clicked
    handleRubyClick(e) {
        e.preventDefault()
        this.setState({hideRubyProjects: !this.state.hideRubyProjects})
    }

    //will display rails projects created when clicked
    handleRailsClick(e) {
        e.preventDefault()
        this.setState({hideRailsProjects: !this.state.hideRailsProjects})
    }

    //will display react projects created when clicked
    handleReactClick(e) {
        e.preventDefault()
        this.setState({hideReactProjects: !this.state.hideReactProjects})
    }

    //will display javascript projects creacted when clicked
    handleJavaScriptClick(e) {
        e.preventDefault()
        this.setState({hideJavaScriptProjects: !this.state.hideJavaScriptProjects})
    }

    //will display html projects created when clicked
    handleHTMLClick(e) {
        e.preventDefault()
        this.setState({hideHTMLProjects: !this.state.hideHTMLProjects})
    }

    //will display css projects created when clicked
    handleCSSClick(e) {
        e.preventDefault()
        this.setState({hideCSSProjects: !this.state.hideCSSProjects})
    }

    render() {
        return (
            //scroll reference for the skill section
            <div ref={this.props.scrollReference}>
                <div className="skills">
                    <h2 className="skills-title">Skills</h2>
                        <div className="skills-list">
                            <div className="skills-btn-divider">
                                <button className={"skills-btn"} onClick={(event) => this.handleRubyClick(event)}><img className={"skills-img"} src={Ruby} alt={"ruby"}/></button>
                                <p className={this.state.hideRubyProjects === true ? "hidden" : "projects-list"}>
                                    <ul className={this.state.hideRubyProjects === true ? "hidden" : "skills-project-list"}>
                                        <li className={this.state.hideRubyProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/Top-10-Hiking-Spots-In-PA-CLI" target="_blank" rel="noopener noreferrer">Top 10 Hiking Spots in PA CLI</a>
                                        </li>
                                        <li className={this.state.hideRubyProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/online-marketplace-listings" target="_blank" rel="noopener noreferrer">Online Marketplace Listings</a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="skills-btn-divider">
                                <button className={"skills-btn"} onClick={(event) => this.handleRailsClick(event)}><img className={"skills-img"} src={Rails} alt={"rails"}/></button>
                                <p className={this.state.hideRailsProjects === true ? "hidden" : "projects-list"}>
                                    <ul className={this.state.hideRailsProjects === true ? "hidden" : "skills-project-list"}>
                                        <li className={this.state.hideRailsProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/home-remedy-website" target="_blank" rel="noopener noreferrer">Home Remedy Website</a>
                                        </li>
                                        <li className={this.state.hideRailsProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/aim-practice-game" target="_blank" rel="noopener noreferrer">Creeper Aim Practice</a>
                                        </li>
                                        <li className={this.state.hideRailsProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/iq-card-memory-game" target="_blank" rel="noopener noreferrer">IQ Card Memory Game</a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="skills-btn-divider">
                                <button className={"skills-btn"} onClick={(event) => this.handleReactClick(event)}><img className={"skills-img"} src={ReactPic} alt={"react"}/></button>
                                <p className={this.state.hideReactProjects === true ? "hidden" : "projects-list"}>
                                    <ul className={this.state.hideReactProjects === true ? "hidden" : "skills-project-list"}>
                                        <li className={this.state.hideReactProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/iq-card-memory-game" target="_blank" rel="noopener noreferrer">IQ Card Memory Game</a>
                                        </li>
                                        <li className={this.state.hideReactProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/portfolio-website" target="_blank" rel="noopener noreferrer">Portfolio Website</a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="skills-btn-divider">
                                <button className={"skills-btn"} onClick={(event) => this.handleJavaScriptClick(event)}><img className={"skills-img"} src={JavaScript} alt={"javascript"}/></button>
                                <p className={this.state.hideJavaScriptProjects === true ? "hidden" : "projects-list"}>
                                    <ul className={this.state.hideJavaScriptProjects === true ? "hidden" : "skills-project-list"}>
                                        <li className={this.state.hideJavaScriptProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/aim-practice-game" target="_blank" rel="noopener noreferrer">Creeper Aim Practice</a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="skills-btn-divider">
                                <button className={"skills-btn"} onClick={(event) => this.handleHTMLClick(event)}><img className={"skills-img"} src={HTML} alt={"html"}/></button>
                                <p className={this.state.hideHTMLProjects === true ? "hidden" : "projects-list"}>
                                    <ul className={this.state.hideHTMLProjects === true ? "hidden" : "skills-project-list"}>
                                        <li className={this.state.hideHTMLProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/aim-practice-game" target="_blank" rel="noopener noreferrer">Creeper Aim Practice</a>
                                        </li>
                                        <li className={this.state.hideHTMLProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/home-remedy-website" target="_blank" rel="noopener noreferrer">Home Remedy Website</a>
                                        </li>
                                        <li className={this.state.hideHTMLProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/online-marketplace-listings" target="_blank" rel="noopener noreferrer">Online Marketplace Listings</a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="skills-btn-divider">
                                <button className={"skills-btn"} onClick={(event) => this.handleCSSClick(event)}><img className={"skills-img"} src={CSS} alt={"css"}/></button>
                                <p className={this.state.hideCSSProjects === true ? "hidden" : "projects-list"}>
                                    <ul className={this.state.hideCSSProjects === true ? "hidden" : "skills-project-list"}>
                                        <li className={this.state.hideCSSProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/iq-card-memory-game" target="_blank" rel="noopener noreferrer">IQ Card Memory Game</a>
                                        </li>
                                        <li className={this.state.hideCSSProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/aim-practice-game" target="_blank" rel="noopener noreferrer">Creeper Aim Practice</a>
                                        </li>
                                        <li className={this.state.hideCSSProjects === true ? "hidden" : "none"}>
                                            <a href="https://github.com/Azbury/portfolio-website" target="_blank" rel="noopener noreferrer">Portfolio Website</a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Skills