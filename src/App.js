import React, { Component } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'

class App extends Component {
    render () {
        return (
          <div className="App">
              <Header/>
              <AboutMe/>
          </div>
        )
    }
}

export default App
