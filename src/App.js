import React, { Component } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import HarrisburgSkyline from './components/HarrisburgSkyline'
import Experience from './components/Experience'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#DEB887',
        dark: '#002884',
        contrastText: '#000000',
      },
      secondary: {
        light: '#ff7961',
        main: '#000000',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

class App extends Component {

    //creates the references for different components to allow scrolling when clicking on the buttons on the header
    constructor() {
        super()
        this.footerRef = React.createRef()
        this.aboutMeRef = React.createRef()
        this.skillsRef = React.createRef()
        this.projectsRef = React.createRef()
        this.experienceRef = React.createRef()
        this.homeRef = React.createRef()
    }

    render () {
        return (
          <div className="App">
            <ThemeProvider theme={theme}>
              <Header footerScrollReference={this.footerRef}
                      aboutMeScrollReference={this.aboutMeRef}
                      skillsScrollReference={this.skillsRef} 
                      projectsScrollReference={this.projectsRef}
                      experienceScrollReference={this.experienceRef}
                      homeScrollReference={this.homeRef}/>
              <HarrisburgSkyline scrollReference={this.homeRef}/>
              <AboutMe scrollReference={this.aboutMeRef}/>
              <Experience scrollReference={this.experienceRef}/>
              <Skills scrollReference={this.skillsRef}/>
              <Projects scrollReference={this.projectsRef}/>
              <Footer scrollReference={this.footerRef}/>
            </ThemeProvider>
          </div>
        )
    }
}

export default App
