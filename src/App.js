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
    }

    render () {
        return (
          <div className="App">
              <Header footerScrollReference={this.footerRef}/>
              <HarrisburgSkyline/>
              <AboutMe/>
              <Skills/>
              <Projects/>
              <Footer scrollReference={this.footerRef}/>
          </div>
        )
    }
}

export default App
