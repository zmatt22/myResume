import React, {Component} from 'react'
import Skill from './ProfSkill';
export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>PROFESSIONAL SKILLS</strong>
                        </h6>
                        <div className="row mt-top">
                            <div className="col s6">
                                <Skill skillName="HTML" skillLevel= "80%" />
                                <Skill skillName="CSS" skillLevel= "65%" />
                                <Skill skillName="Javascript" skillLevel= "65%" />
                                <Skill skillName="React" skillLevel= "60%" />
                            </div>
                            <div className="col s6">
                                <Skill skillName="Node.js" skillLevel= "75%" />
                                <Skill skillName="Git" skillLevel= "65%" />
                                <Skill skillName="Databases (MySQL, MongoDB)" skillLevel="60%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  
}