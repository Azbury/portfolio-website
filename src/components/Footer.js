import React, { Component } from 'react'
import GithubLogo from "../pictures/github-small-logo.png"
import LinkedIn from "../pictures/linkedin-logo.jpg"

class Footer extends Component {

    handleGithubClick(e) {
        e.preventDefault()
        window.open('https://github.com/Azbury', "_blank")
    }

    handleLinkedInClick(e) {
        e.preventDefault()
        window.open('https://www.linkedin.com/in/austin-asbury/', "_blank")
    }

    render() {
        return (
            <div ref={this.props.scrollReference} className="footer">
                <h1>Contact Info</h1>
                <ul>
                    <li>570-624-1138</li>
                    <li>acasbury25@aol.com</li>
                </ul>
                <div className="footer-github-btn">
                    <button className={"footer-btn"} onClick={(event) => this.handleGithubClick(event)}><img className={"footer-img"} src={GithubLogo} alt={"github"}/></button>
                </div>
                <div className="footer-linkedin-btn">
                    <button className={"footer-btn"} onClick={(event) => this.handleLinkedInClick(event)}><img className={"footer-img"} src={LinkedIn} alt={"github"}/></button>
                </div>
            </div>
        )
    }
}

export default Footer