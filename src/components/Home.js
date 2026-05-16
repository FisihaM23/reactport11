import React from "react";
import profileImg from "../assets/muler.jpg";

export default function Home() {
    return (
        <div className="home fade-in" id="home">
            <div className="content">
                <h1>
                    Hi, I'm <span>Mulugeta Fisiha</span>
                </h1>
                <p className="intro-text">
                    I'm a third-year Computer Science student at the University of Gondar,
                    passionate about web development . I specialize
                    in building responsive websites using HTML, CSS, JavaScript and React . Currently working
                    towards becoming a full-stack developer . I enjoy solving complex problems
                    and creating efficient, user-friendly applications.
                </p>
                <a href="#contact" className="btn">
                    Hire Me
                </a>
            </div>
            <div className="home-img">
                <img src={profileImg} alt="Mulugeta Fisiha" id="profile-img" />
            </div>
        </div>
    );
}
