import React, { Component } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import HarrisburgSkyline from './components/HarrisburgSkyline'

class App extends Component {

    //creates the references for different components to allow scrolling when clicking on the buttons on the header
    constructor() {
        super()
        this.footerRef = React.createRef()
        this.aboutMeRef = React.createRef()
        this.skillsRef = React.createRef()
        this.projectsRef = React.createRef()
    }

    render () {
        return (
          <div className="App">
              <Header footerScrollReference={this.footerRef} aboutMeScrollReference={this.aboutMeRef} skillsScrollReference={this.skillsRef} projectsScrollReference={this.projectsRef}/>
              <HarrisburgSkyline/>
              <AboutMe scrollReference={this.aboutMeRef}/>
              <Skills scrollReference={this.skillsRef}/>
              <Projects scrollReference={this.projectsRef}/>
              <Footer scrollReference={this.footerRef}/>
          </div>
        )
    }
}

export default App
