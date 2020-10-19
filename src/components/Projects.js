import React, { Component } from 'react'
import ReactPlayer from "react-player"

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h2 className="projects-title">Projects</h2>
                <div className="first-two-projects">
                    <div className="iq-card-memory-game">
                        <h3>IQ Card Memory Game</h3>
                        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=FtUPbcKe2Eg"/>
                        <p>
                            This is a game built using React.js, HTML, CSS, with a Ruby on Rails API for the
                            backend. The game allows a user to enter a username and take them to their user page. 
                            They can they either start a new game or view the leaderboard page for the game. The 
                            game is an card memory matching game where they are given the time view the position 
                            of cards and then they have to flip them over and match them from their memory. A user 
                            gains 10 points for every correct answer, and loses 10 points for every wrong answer.
                        </p>
                    </div>
                    <div className="aim-game">
                        <h3>Creeper Aim Practice</h3>
                        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=SiYIpxfAwmU"/>
                        <p>
                            This is a game built using JavaScript, HTML, CSS, with a Ruby on Rails API for the backend. 
                            The game allows a user to enter a username and then start a new game where they click on creepers 
                            to gain points and practice their aim for shooting video games. The program will keep track of their 
                            scores and will display their top 5 score to them in order.
                        </p>
                    </div>
                </div>
                <div className="second-two-projects">
                    <div className="home-remedy-website">
                        <h3>Home Remedy Website</h3>
                        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=x-FUyiKhJHE"/>
                        <p>
                            This Ruby on Rails Program creates a website that allows you to perform all user account features
                            as well as sign in and make an account through GitHub OAuth. A user can then view the listings
                            of all remedies, post their own home remedies for everyone to see, and comment on others post
                            to let them know how they work.
                        </p>
                    </div>
                    <div className="online-marketplace-listings">
                        <h3>Online Marketplace Listings</h3>
                        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=-tfIOoW3AjQ"/>
                        <p>
                            This Ruby Program creates a website that allows you to signup for an account and login/ signout. 
                            A user can then view the listings of all users, make/ modify their own listings, and views other user's accounts.
                        </p>
                    </div>
                </div>
                <div className="empty"></div>
                <div className="hiking-spots">
                    <h3>Top 10 Hiking Spots in PA CLI</h3>
                    <ReactPlayer className="video" url="https://www.youtube.com/watch?v=WrHwM3LK9sE"/>
                    <p>
                        This Ruby Program provides a CLI to view the top 10 hiking spots in PA from the website onlyinyourstate based on article from 2015.
                    </p>
                </div>
            </div>
        )
    }
}

export default Projects