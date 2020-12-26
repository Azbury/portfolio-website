import React, { Component } from 'react'

//HarrisburgSkyline
//Component used for to have a background with image with text underneath the header

class HarrisburgSkyline extends Component {
    render() {
        return (
            <div>
                <div ref={this.props.scrollReference} className="name">Austin Asbury</div>
                <div className="harrisburg-skyline">
                    <p className="typewriter">Hi, I'm a UX/ UI Developer</p>
                </div>
            </div>
        )
    }
}

export default HarrisburgSkyline