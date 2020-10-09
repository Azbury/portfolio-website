import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button";
import "../theme-ruby.css";

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h2 className="skills-title">Skills</h2>
                <ul>
                    <AwesomeButton type="primary" size="large">Ruby</AwesomeButton>
                    <li>Ruby on Rails</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
        )
    }
}

export default Skills