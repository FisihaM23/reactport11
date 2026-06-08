import React from "react";
import atmImg from "../assets/system.jpg";
import libraryImg from "../assets/library.png";
import atmPdf from "../assets/atm.pdf";
import javaPdf from "../assets/java.pdf";

const projects = [
    {
        title: "ATM Transaction System",
        description:
            "A C++ project implementing deposit, withdrawal, fund transfer, balance checking, and transaction history features.",
        img: atmImg,
        icon: "fa-credit-card",
        link: "https://github.com/FisihaM23/ATM-System",
        pdfLink: atmPdf,
    },
    {
        title: "Library Management System",
        description:
            "A Java-based system allowing book and magazine management, member registration, and transaction tracking.",
        img: libraryImg,
        icon: "fa-book",
        link: "https://github.com/FisihaM23/Library-System",
        pdfLink: javaPdf,
    },
    {
        title: "Portfolio Website",
        description:
            "Responsive portfolio website showcasing my skills, projects, and contact information.",
        img: null,
        icon: "fa-laptop-code",
        link: "#",
        pdfLink: null,
    },
];

export default function Projects() {
    return (
        <div className="projects fade-in" id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((p, i) => (
                    <div key={i} className="project-card">
                        {p.img ? (
                            <div className="project-image">
                                <img src={p.img} alt={p.title} />
                            </div>
                        ) : (
                            <div className="project-icon">
                                <i className={`fas ${p.icon}`}></i>
                            </div>
                        )}
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <div className="project-buttons">
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                View Code
                            </a>
                            {p.pdfLink && (
                                <a
                                    href={p.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    <i className="fas fa-file-pdf"></i> View PDF
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
