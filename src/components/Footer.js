import React, { Component } from 'react'
import MyComponent from "react-lite-button"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h1>Contact Info</h1>
                <ul>
                    <li>570-624-1138</li>
                    <li>acasbury25@aol.com</li>
                </ul>
                <div className="footer-github-btn">
                    <MyComponent colors={["#000000" , "#808080"]} width={200}>Github</MyComponent>
                </div>
                <div className="footer-linkedin-btn">
                    <MyComponent colors={["#00008B" , "#87CEFA"]} width={200}>LinkedIn</MyComponent>
                </div>
            </div>
        )
    }
}

export default Footer