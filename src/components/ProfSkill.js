import React, { Component } from 'react'

export default class ProfSkill extends Component {
    render() {
        let skillLevel = { width: this.props.skillLevel}
        return(
            <div>
                <p>
                    <strong>{this.props.skillName} </strong>
                </p>
                <div className="progress">
                    <div 
                        className="determinate"
                        style={skillLevel}
                    ></div>
                </div>
            </div>
        )
    }
}