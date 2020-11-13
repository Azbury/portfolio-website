import React, { Component } from 'react'
import RIM from '../pictures/rim.png'

class Experience extends Component {
    render() {
        return(
            <div className="experience">
                <div className="divider"/>
                <div className="about-myself-box">
                    <h2 id="experience-title">Experience</h2>
                    <h3 id="rim-title">Ritter Insurance Marketing</h3>
                    <img id="rim" src={RIM} alt='rim'/>
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
                <div className="divider"/>
            </div>
        )
    }
}

export default Experience