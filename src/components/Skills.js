import React, { Component } from 'react'
import MyComponent from "react-lite-button"
import Ruby from "../pictures/ruby-programming-language.png"

class Skills extends Component {

    state = {
        hideRubyProjects: true,
        hideRailsProjects: true,
        hideReactProjects: true,
        hideJavaScriptProjects: true,
        hideHTMLProjects: true,
        hideCSSProjects: true
    }

    handleRubyClick(e) {
        e.preventDefault()
        this.setState({hideRubyProjects: !this.state.hideRubyProjects})
    }

    handleRailsClick(e) {
        e.preventDefault()
        this.setState({hideRailsProjects: !this.state.hideRailsProjects})
    }

    handleReactClick(e) {
        e.preventDefault()
        this.setState({hideReactProjects: !this.state.hideReactProjects})
    }

    handleJavaScriptClick(e) {
        e.preventDefault()
        this.setState({hideJavaScriptProjects: !this.state.hideJavaScriptProjects})
    }

    handleHTMLClick(e) {
        e.preventDefault()
        this.setState({hideHTMLProjects: !this.state.hideHTMLProjects})
    }

    handleCSSClick(e) {
        e.preventDefault()
        this.setState({hideCSSProjects: !this.state.hideCSSProjects})
    }

    render() {
        return (
            <div ref={this.props.scrollReference} className="skills">
                <div className="about-me-divider"></div>
                <h2 className="skills-title">Skills</h2>
                    <div className="skills-list">
                        <div className="ruby-btn">
                            <button id={"ruby-btn"} onClick={(event) => this.handleRubyClick(event)}><img id={"ruby-img"} src={Ruby} alt={"ruby"}/></button>
                            <p className={this.state.hideRubyProjects === true ? "hidden" : "projects-list"}></p>
                        </div>
                        <div className="rails-btn">
                            <MyComponent onClick={(event) => this.handleRailsClick(event)} colors={["#B22222" , "#8B0000"]} width={200}>Ruby on Rails</MyComponent>
                            <p className={this.state.hideRailsProjects === true ? "hidden" : "projects-list"}></p>
                        </div>
                        <div className="react-btn">
                            <MyComponent onClick={(event) => this.handleReactClick(event)} colors={["#00CED1" , "#00BFFF"]} width={200} textColor={"black"}>React</MyComponent>
                            <p className={this.state.hideReactProjects === true ? "hidden" : "projects-list"}></p>
                        </div>
                        <div className="javascript-btn">
                            <MyComponent onClick={(event) => this.handleJavaScriptClick(event)} colors={["#FFD700" , "#DAA520"]} width={200} textColor={"black"}>Javascript</MyComponent>
                            <p className={this.state.hideJavaScriptProjects === true ? "hidden" : "projects-list"}></p>
                        </div>
                        <div className="html-btn">
                            <MyComponent onClick={(event) => this.handleHTMLClick(event)} colors={["#FF4500" , "#FFA500"]} width={200}>HTML</MyComponent>
                            <p className={this.state.hideHTMLProjects === true ? "hidden" : "projects-list"}></p>
                        </div>
                        <div className="css-btn">
                            <MyComponent onClick={(event) => this.handleCSSClick(event)} colors={["#000080" , "#191970"]} width={200}>CSS</MyComponent>
                            <p className={this.state.hideCSSProjects === true ? "hidden" : "projects-list"}></p>
                        </div>
                    </div>
                    <div className="about-me-divider"></div>
            </div>
        )
    }
}

export default Skills