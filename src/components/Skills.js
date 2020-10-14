import React, { Component } from 'react'
import MyComponent from "react-lite-button"

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h2 className="skills-title">Skills</h2>
                    <div className="skills-list">
                        <div className="ruby-btn">
                            <MyComponent colors={["#B22222" , "#8B0000"]} width={200}>Ruby</MyComponent>
                        </div>
                        <div className="rails-btn">
                            <MyComponent colors={["#B22222" , "#8B0000"]} width={200}>Ruby on Rails</MyComponent>
                        </div>
                        <div className="react-btn">
                            <MyComponent width={200}>React</MyComponent>
                        </div>
                        <div className="javascript-btn">
                            <MyComponent width={200}>Javascript</MyComponent>
                        </div>
                        <div className="html-btn">
                            <MyComponent width={200}>HTML</MyComponent>
                        </div>
                        <div className="css">
                            <MyComponent width={200}>CSS</MyComponent>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Skills