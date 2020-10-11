import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-red.css";

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h2 className="skills-title">Skills</h2>
                    <div className="skills-list">
                        <div className="ruby-btn">
                            <AwesomeButton className="button" type="primary">Ruby</AwesomeButton>
                        </div>
                        <div className="rails-btn">
                            <AwesomeButton type="primary">Ruby on Rails</AwesomeButton>
                        </div>
                        <AwesomeButton type="primary">React</AwesomeButton>
                        <div>JavaScript</div>
                        <div>HTML</div>
                        <div>CSS</div>
                    </div>
            </div>
        )
    }
}

export default Skills