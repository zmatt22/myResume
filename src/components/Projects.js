import React, {Component} from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6><strong>PERSONAL PROJECTS</strong></h6>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                October 2018 - February 2019
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote>
                                    <h6>
                                        <strong>Java game developing</strong>
                                    </h6>
                                    <p> 
                                        The scope of this project was to fully understand the structure of object-oriented programming. I chose Minesweeper, a personal favorite of mine. I implemented my own version of the game, which resulted in passing the Object-oriented programming course.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                March 2019 - June 2019
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote>
                                    <h6>
                                        <strong>Website of a railway company</strong>
                                    </h6>
                                    <p>
                                        In this project I had to plan and develop both the back-end and front-end side of a functional train company web application, with the purpose of learning and experiencing different web-development technologies such as Node.js, JavaScript, HTML5.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4 xl4">
                                <p className="teal year_exp white-text">
                                    October 2019 - February 2020
                                </p>
                            </div>
                            <div className="col s12 m8 l8 xl8">
                                <blockquote>
                                    <h6>
                                        <strong>Open Library</strong>
                                    </h6>
                                   <p>
                                        Working in a team, we developed a book borrowing social media platform. Personally, I worked on the front-end using React.
                                   </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  
}