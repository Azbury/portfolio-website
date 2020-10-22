import React, { Component } from 'react'
import MyComponent from "react-lite-button"

class Skills extends Component {

    state = {
        hideRubyProjects: true,
        hideRailsProjects: true
    }

    handleRubyClick(e) {
        e.preventDefault()
        this.setState({hideRubyProjects: !this.state.hideRubyProjects})
    }

    handleRailsClick(e) {
        e.preventDefault()
        this.setState({hideRailsProjects: !this.state.hideRailsProjects})
    }

    render() {
        return (
            <div className="skills">
                <h2 className="skills-title">Skills</h2>
                    <div className="skills-list">
                        <div className="ruby-btn">
                            <MyComponent onClick={(event) => this.handleRubyClick(event)} colors={["#B22222" , "#8B0000"]} width={200}>Ruby</MyComponent>
                            <p className={this.state.hideRubyProjects === true ? "hidden" : "projects-list"}></p>
                        </div>
                        <div className="rails-btn">
                            <MyComponent onClick={(event) => this.handleRailsClick(event)} colors={["#B22222" , "#8B0000"]} width={200}>Ruby on Rails</MyComponent>
                            <p className={this.state.hideRailsProjects === true ? "hidden" : "projects-list"}></p>
                        </div>
                        <div className="react-btn">
                            <MyComponent colors={["#00CED1" , "#00BFFF"]} width={200} textColor={"black"}>React</MyComponent>
                        </div>
                        <div className="javascript-btn">
                            <MyComponent colors={["#FFD700" , "#DAA520"]} width={200} textColor={"black"}>Javascript</MyComponent>
                        </div>
                        <div className="html-btn">
                            <MyComponent colors={["#FF4500" , "#FFA500"]}width={200}>HTML</MyComponent>
                        </div>
                        <div className="css">
                            <MyComponent colors={["#000080" , "#191970"]}width={200}>CSS</MyComponent>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Skills