import React, { Component } from 'react'
import "react-awesome-button/dist/themes/theme-red.css"
import RailsButton from '../components/RailsButton'
import RubyButton from '../components/RubyButton'
import ReactButton from '../components/ReactButton'

class SkillsContainer extends Component {
    render() {
        return (
            <div className="skills">
                <h2 className="skills-title">Skills</h2>
                    <div className="skills-list">
                        <RubyButton/>
                        <RailsButton/>
                        <ReactButton/>
                        <div>JavaScript</div>
                        <div>HTML</div>
                        <div>CSS</div>
                    </div>
            </div>
        )
    }
}

export default SkillsContainer