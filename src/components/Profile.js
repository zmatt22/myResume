import React, {Component} from 'react'
import ProfileImage from '../images/resume_profile_picture.jpg'
export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={ProfileImage} alt="profile"/>
                     </div>
                     <div className="card-content">
                         <span className="card-title activator grey-text text-darken-4 profile-text">
                             Zolcsák Mátyás
                         </span>
                         <p className="profile-text">Student</p>
                     </div>
                </div>
            </div>
        )
    }
  
}