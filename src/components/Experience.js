import React, { Component } from 'react'
import RIM from '../pictures/rim.png'

class Experience extends Component {
    render() {
        return(
            <div ref={this.props.scrollReference} className="experience">
                <div className="experience-box">
                    <h2 id="experience-title">Experience</h2>
                    <h2 id="rim-title">Ritter Insurance Marketing</h2>
                    <img id="rim" src={RIM} alt='rim'/>
                    <h2 id="rim-position-title">Jr. UX/UI Developer</h2>
                    <h2>November 2020 - Present</h2>
                    <ul className="job-duties">
                        <li>Designing, testing, and modifying websites and digital media within a team environment.</li>
                        <li>Assumes responsibility for all website testing and design modification.</li>
                        <li>Develop all applicable unit testing and documentation to ensure expected functionality.</li>
                        <li>Ensure compatibility across all supported browser versions.</li>
                        <li>Participate in code reviews.</li>
                        <li>Recommend and implement improvements to existing web applications and components.</li>
                        <li>Assumes responsibility for understanding current and new web technologies.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Experience