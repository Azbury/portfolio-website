import React, { Component } from 'react'
import Ruby from '../pictures/ruby-programming-language.png'

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <h2 className="skills-title">Skills</h2>
                <ul>
                    <button><img className="ruby" src={Ruby} alt="ruby" onClick={this.myfunction} /></button>
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