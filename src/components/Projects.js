import React, { Component } from 'react'
import ReactPlayer from "react-player"

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h2>Projects</h2>
                <h3>IQ Card Memory Game</h3>
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=FtUPbcKe2Eg"/>
                <h3>Creeper Aim Practice</h3>
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=SiYIpxfAwmU"/>
                <h3>Home Remedy Website</h3>
                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=x-FUyiKhJHE"/>
                <h3>Online Marketplace Listings</h3>
                <h3>Top 10 Hiking Spots in PA CLI</h3>
            </div>
        )
    }
}

export default Projects