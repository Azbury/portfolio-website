import React, { Component } from 'react'
import ProfilePic from '../pictures/About-Me-Pic.JPG'

//AboutMe
//Component used for the AboutMe section

class AboutMe extends Component {
    render() {
        return (
            //reference used for the header to allow scrolling to this section via click
            <div ref={this.props.scrollReference} className="about-me">
                <div className="divider"></div>
                <div className="about-myself-box">
                    <div className="about-me-title">About Myself</div>
                    <img className="profile-pic" src={ProfilePic} alt={'profile pic'}/>
                    <div className="paragraph">
                        <p className="about-me-description">My name is Austin Asbury and I am a Jr. UX/ UI Developer at Ritter Insurance Marketing.
                        I studied computer science at the University of Maryland as well as completed the Flatiron School for Software Engineering bootcamp.
                        Skiing and video games are by far my two favorites hobbies and if I am not coding you will either see me on the slopes, or in a
                        competitive video game. I am a competitive person, so I will always be striving the be the best at anything I do in life.
                        Working from home with my two cats Momo and Yuumi has been an experience that I have been looking forward to since I first started studying
                        computer science back in college. I am an extremely motivated and hard working individual who requires minimal supervision to complete work
                        at a high level. It feels amazing to be able to wake up everyday and get to do something I love and enjoy.
                        </p>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        )
    }
}

export default AboutMe