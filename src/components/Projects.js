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
                    </div>
                    <div className="aim-game">
                        <h3>Creeper Aim Practice</h3>
                        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=SiYIpxfAwmU"/>
                    </div>
                </div>
                <div className="second-two-projects">
                    <div className="home-remedy-website">
                        <h3>Home Remedy Website</h3>
                        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=x-FUyiKhJHE"/>
                    </div>
                    <div className="online-marketplace-listings">
                        <h3>Online Marketplace Listings</h3>
                        <ReactPlayer className="video" url="https://www.youtube.com/watch?v=-tfIOoW3AjQ"/>
                    </div>
                </div>
                <h3>Top 10 Hiking Spots in PA CLI</h3>
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=WrHwM3LK9sE"/>
            </div>
        )
    }
}

export default Projects