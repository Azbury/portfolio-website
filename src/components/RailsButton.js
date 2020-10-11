import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/themes/theme-red.css"

class RailsButton extends Component {
    render() {
        return (
            <div className="ruby-btn">
                <AwesomeButton type="primary">Rails</AwesomeButton>
            </div>
        )
    }
}

export default RailsButton