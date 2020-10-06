import React, { Component } from 'react'
import ProfilePic from '../pictures/About-Me-Pic.JPG'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Flatiron from '../pictures/flatironschool.png'

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <div className="about-myself-box">
                    <div className="about-me-title">About Myself</div>
                    <div className="pic">
                        <img className="profile-pic" src={ProfilePic} alt={'profile pic'}/>
                    </div>
                    <div className="paragraph">
                        <p className="about-me-description">My name is Austin Asbury and I recently graduated from the Flatiron School for Software Engineering Bootcamp.
                        I chose the self-paced program because I had prior experience coding from the University of Maryland located in College Park, MD where I majored in Computer Science.
                        Completing the self-paced program meant I had no one to monitor my progress through the course work so I had to learn how to manage my time properly to complete the school
                        work and meet deadlines that I set for myself while working full-time. This gave me a ton of practice for what it would be like to be working at a job with minimal supervision
                        and prepared me to become a developer that meets and exceeds deadlines given to them. I will do whatever it takes to make sure a project is completed on time, without
                        compromising on quality.
                        </p>
                    </div>
                </div>
                <div className="slide-container">
                    <Slide autoplay={false}>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${Flatiron})`, 'height': '50px'}}>
                                <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div>
                                <span>Slide 2</span>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default AboutMe