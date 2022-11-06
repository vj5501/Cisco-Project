import React from "react";
import './style.css'

const CardTeamTemplate = ({image, sname, domain, github, linkedin, instagram}) =>{
    return(
        <div className="member">
            <div className="member-img">
                <img src = {image} className="img-fluid" alt="" />
            </div>
            <div className="member-info">
                <h4>{sname}</h4>
                <span>{domain}</span>
                <div className="social-links">
                    <a href={github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href={instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default CardTeamTemplate;