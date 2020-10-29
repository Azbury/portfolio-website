import React, { Component } from 'react'
import ReactPlayer from "react-player"
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import GithubLogo from "../pictures/github-logo.jpg"

//Projects
//Component used to display the projects in a slideshow

class Projects extends Component {

    //will take the user to github repository of the iq game via click
    handleIQClick(e) {
        e.preventDefault()
        window.open('https://github.com/Azbury/iq-card-memory-game', "_blank")
    }

    //will take the user to github repository of the aim game via click
    handleAimClick(e) {
        e.preventDefault()
        window.open('https://github.com/Azbury/aim-practice-game', "_blank")
    }

    //will take the user to github repository of the remedy webstie via click
    handleRemedyClick(e) {
        e.preventDefault()
        window.open('https://github.com/Azbury/home-remedy-website', "_blank")
    }

    //will take the user to github repository of the market website via click
    handleMarketClick(e) {
        e.preventDefault()
        window.open('https://github.com/Azbury/online-marketplace-listings', "_blank")
    }

    //will take the user to github repository of the cli program via click
    handleCLIClick(e) {
        e.preventDefault()
        window.open('https://github.com/Azbury/Top-10-Hiking-Spots-In-PA-CLI', "_blank")
    }

    render() {
        return (
            //scroll reference for the project section
            <div ref={this.props.scrollReference} className="projects">
                <div className="divider"></div>
                <h2 className="projects-title">Projects</h2>
                <div className="slideshow-container">
                    <Slide autoplay={false}>
                        <div className="each-slide">
                            <div className="video-wrapper">
                                <ReactPlayer width="100%" height="100%" className="react-player" url="https://www.youtube.com/watch?v=FtUPbcKe2Eg"/>
                            </div>
                            <h3 className="project-title">IQ Card Memory Game</h3>
                            <p className="project-description">
                                This is a game built using React.js, HTML, CSS, with a Ruby on Rails API for the
                                backend. The game allows a user to enter a username and take them to their user page. 
                                They can they either start a new game or view the leaderboard page for the game. The 
                                game is an card memory matching game where they are given the time view the position 
                                of cards and then they have to flip them over and match them from their memory. A user 
                                gains 10 points for every correct answer, and loses 10 points for every wrong answer.
                            </p>
                            <div className="github-btn">
                                <button className={"skills-btn"} onClick={(event) => this.handleIQClick(event)}><img className={"github-logo-img"} src={GithubLogo} alt={"github"}/></button>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="video-wrapper">
                                <ReactPlayer width="100%" height="100%" className="react-player" url="https://www.youtube.com/watch?v=SiYIpxfAwmU"/>
                            </div>
                            <h3 className="project-title">Creeper Aim Practice</h3>
                            <p className="project-description">
                                This is a game built using JavaScript, HTML, CSS, with a Ruby on Rails API for the backend. 
                                The game allows a user to enter a username and then start a new game where they click on creepers 
                                to gain points and practice their aim for shooting video games. The program will keep track of their 
                                scores and will display their top 5 score to them in order. The user has one second click each creeper
                                that appears on the screen before it dissapears.
                            </p>
                            <div className="github-btn">
                                <button className={"skills-btn"} onClick={(event) => this.handleAimClick(event)}><img className={"github-logo-img"} src={GithubLogo} alt={"github"}/></button>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="video-wrapper">
                                <ReactPlayer width="100%" height="100%" className="react-player" url="https://www.youtube.com/watch?v=x-FUyiKhJHE"/>
                            </div>
                            <h3 className="project-title">Home Remedy Website</h3>
                            <p className="project-description">
                                This Ruby on Rails Program creates a website that allows you to perform all user account features
                                as well as sign in and make an account through GitHub OAuth. A user can then view the listings
                                of all remedies, post their own home remedies for everyone to see, and comment on others post
                                to let them know how they work.
                            </p>
                            <div className="github-btn">
                                <button className={"skills-btn"} onClick={(event) => this.handleRemedyClick(event)}><img className={"github-logo-img"} src={GithubLogo} alt={"github"}/></button>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="video-wrapper">
                                <ReactPlayer width="100%" height="100%" className="react-player" url="https://www.youtube.com/watch?v=-tfIOoW3AjQ"/>
                            </div>
                            <h3 className="project-title">Online Marketplace Listings</h3>
                            <p className="project-description">
                                This Ruby Program creates a website that allows you to signup for an account and login/ signout. 
                                A user can then view the listings of all users, make/ modify their own listings, and views other user's accounts.
                                A user can list items with a title, description, and a price for the other users of the website to view.
                                A user passwords are encrypted using the has_secure_password method from ActiveRecord.
                            </p>
                            <div className="github-btn">
                                <button className={"skills-btn"} onClick={(event) => this.handleMarketClick(event)}><img className={"github-logo-img"} src={GithubLogo} alt={"github"}/></button>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="video-wrapper">
                                <ReactPlayer width="100%" height="100%" className="react-player" url="https://www.youtube.com/watch?v=WrHwM3LK9sE"/>
                            </div>
                            <h3 className="project-title">Top 10 Hiking Spots in PA CLI</h3>
                            <p className="project-description">
                                This Ruby Program provides a CLI to view the top 10 hiking spots in PA from the website onlyinyourstate based on article from 2015.
                            </p>
                            <div className="github-btn">
                                <button className={"skills-btn"} onClick={(event) => this.handleCLIClick(event)}><img className={"github-logo-img"} src={GithubLogo} alt={"github"}/></button>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default Projects