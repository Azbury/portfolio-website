import React, { Component } from 'react'
import MyComponent from "react-lite-button"

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h2 className="skills-title">Skills</h2>
                    <div className="skills-list">
                        <div className="ruby-btn">
                            <MyComponent width={200}>Ruby</MyComponent>
                        </div>
                        <div className="rails-btn">
                            <MyComponent width={"15%"}>Ruby on Rails</MyComponent>
                        </div>
                        <div className="react-btn">
                            <MyComponent>React</MyComponent>
                        </div>
                        <div className="javascript-btn">
                            <MyComponent>Javascript</MyComponent>
                        </div>
                        <div className="html-btn">
                            <MyComponent>HTML</MyComponent>
                        </div>
                        <div className="css">
                            <MyComponent>CSS</MyComponent>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Skills