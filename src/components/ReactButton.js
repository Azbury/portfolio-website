import React, { Component } from 'react'
import { AwesomeButton } from "react-awesome-button"

class ReactButton extends Component {
    render() {
        return (
            <div className="ruby-btn">
                <AwesomeButton type="primary">React</AwesomeButton>
            </div>
        )
    }
}

export default ReactButton