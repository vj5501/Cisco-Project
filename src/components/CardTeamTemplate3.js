import React from "react";
import './style.css'
const CardTeamTemplate2 = ({ image, sname, domain, github, linkedin, instagram }) => {
    return (
        <div class="profile-card">
            <div class="img">
                <img src={image} alt="" />
            </div>
            <div class="caption">
                <div className="team-content">
                    <h3 className="name">{sname}</h3>
                    <h6 className="title">{domain}</h6>
                </div>
                <div class="social-links">
                    <a href={github}><i class="fab fa-github"></i></a>
                    <a href={linkedin}><i class="fab fa-linkedin"></i></a>
                    <a href={instagram}><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CardTeamTemplate2;