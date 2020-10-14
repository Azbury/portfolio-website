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