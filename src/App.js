import React, { Component } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import SkillsContainer from './containers/SkillsContainer'

class App extends Component {
    render () {
        return (
          <div className="App">
              <Header/>
              <AboutMe/>
              <SkillsContainer/>
              <Projects/>
              <Footer/>
          </div>
        )
    }
}

export default App
