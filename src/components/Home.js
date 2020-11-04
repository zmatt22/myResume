import React, {Component} from 'react'
import Profile from './Profile'
import Skills from './Skills'
import Educations from './Educations'
import Projects from './Projects'
import About from './About'
import Experiences from './Experiences'

export default class Home extends Component {
    render() {
        return(
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <Profile />
                        </div>
                        <div className="col s12 m8 l9">
                            <About /> 
                            <Skills />
                            <Educations />
                            <Projects />
                            <Experiences />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}