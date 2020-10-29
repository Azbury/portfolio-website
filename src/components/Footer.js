import React, { Component } from 'react'
import GithubLogo from "../pictures/github-small-logo.png"
import LinkedIn from "../pictures/LinkedIn-Logo-500x500.png"

//Footer
//Component used for the Footer section with my contact info

class Footer extends Component {

    //will open new tab with my github account page
    handleGithubClick(e) {
        e.preventDefault()
        window.open('https://github.com/Azbury', "_blank")
    }

    //will open new tab with linkedin account page
    handleLinkedInClick(e) {
        e.preventDefault()
        window.open('https://www.linkedin.com/in/austin-asbury/', "_blank")
    }

    render() {
        return (
            //reference used for the header to allow scrolling to this section via click
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