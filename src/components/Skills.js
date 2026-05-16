import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "C++", "Java"];

export default function Skills() {
    return (
        <div className="skills fade-in" id="skills">
            <h2>My Skills</h2>
            <div className="skill-list">
                {skills.map((skill, i) => (
                    <div key={i} className="skill">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}
