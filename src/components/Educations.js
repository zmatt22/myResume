import React, { Component } from 'react'

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6><strong>EDUCATION</strong></h6>
            <div className="row">
              <div className="col s12 m4 l4 xl4">
                <p className="teal year_exp white-text">
                  September 2013 - May 2017
                </p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote>
                  <h6>
                    <strong>"Kölcsey Ferenc" High School</strong>
                  </h6>
                  <span>Mathematics-Informatics, Advanced English class</span>
                  <p></p>
                </blockquote>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4 l4 xl4">
                <p className="teal year_exp white-text">
                  October 2017 - Present
                </p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote>
                  <h6>
                    <strong>"Babes-Bolyai" University</strong>
                  </h6>
                  <span>Computer Science</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}