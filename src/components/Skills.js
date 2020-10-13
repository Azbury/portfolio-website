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
                        <MyComponent width={"15%"}>Ruby on Rails</MyComponent>
                        <MyComponent>React</MyComponent>
                        <div>JavaScript</div>
                        <div>HTML</div>
                        <div>CSS</div>
                    </div>
            </div>
        )
    }
}

export default Skills