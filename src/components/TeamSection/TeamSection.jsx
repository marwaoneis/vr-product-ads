import React from "react";
import "./style.css";

import oliviaImage from "../../assets/olivia.png";
import jacobImage from "../../assets/jacob.png";
import brendanImage from "../../assets/brendan.png";
import tauraImage from "../../assets/taura.png";

const teamMembers = [
  { name: "Olivia Butler", role: "General Manager", img: oliviaImage },
  { name: "Jacob Nelson", role: "System Administrator", img: jacobImage },
  { name: "Brendan Burns", role: "QA Engineer", img: brendanImage },
  { name: "Taura Higa", role: "Game Designer", img: tauraImage },
];

const TeamSection = () => {
  return (
    <section id="team">
      <div className="team-section">
        <h2>OUR TEAM</h2>
        <div className="team-ball"></div>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.name}>
              <div className="member-image-box">
                <img
                  src={member.img}
                  alt={member.name}
                  className={
                    member.name === "Olivia Butler" ? "oliviaImage" : ""
                  }
                />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
