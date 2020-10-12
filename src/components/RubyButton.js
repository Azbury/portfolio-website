import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/themes/theme-red.css";
import MyComponent from "react-lite-button"

class RubyButton extends Component {
    render() {
        return (
            <div className="ruby-btn">
                <MyComponent>Ruby</MyComponent>
            </div>
        )
    }
}

export default RubyButton