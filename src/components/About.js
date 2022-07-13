import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-bottom">
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p>
                            MSc student, who is eager to learn, gain experience and work in the field of front-end development.
                        </p>
                    </div>
                    <div className="card-action">
                        <h6 className="mt-bottom">
                            <strong>PERSONAL INFORMATION</strong>
                        </h6>
                        <div className="row mt">
                            <div className="col s12 m6 l6 xl6">
                                <p><strong>Email address: </strong>zolcsak.matyas@gmail.com</p>
                                <p><strong>Phone number: </strong>(+40) 745015167</p>
                                <p><strong>Location: </strong>Cluj-Napoca, Romania</p>
                                <p>
                                    <strong>LinkedIn profile: </strong>
                                    <a className="blue-text darken-4" href="https://www.linkedin.com/in/matyas-zolcsak-9a2490186/">Matyas Zolcsak</a>
                                </p>
                            </div>
                            <div className="col s12 m6 l6 xl6">
                                <p><strong>Main Language - </strong>Hungarian</p>
                                <p><strong>Second Language - </strong>Romanian</p>
                                <p><strong>Third Language - </strong>English</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}