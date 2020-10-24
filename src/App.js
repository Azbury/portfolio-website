import React, { Component } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import HarrisburgSkyline from './components/HarrisburgSkyline'

class App extends Component {

    constructor() {
        super()
        this.footerRef = React.createRef()
        this.aboutMeRef = React.createRef()
    }

    render () {
        return (
          <div className="App">
              <Header footerScrollReference={this.footerRef} aboutMeScrollReference={this.aboutMeRef}/>
              <HarrisburgSkyline/>
              <AboutMe scrollReference={this.aboutMeRef}/>
              <Skills/>
              <Projects/>
              <Footer scrollReference={this.footerRef}/>
          </div>
        )
    }
}

export default App
