import React from "react";

export default function Info() {
    return (
        <div className="info">
            <img src="./pic.png" alt="Sarah, a white femme with brown shoulder-length hair and glasses, smiles. Behind her is a light blue and lime green gradient background." className="info--photo" />
            <div className="content">
                <h1 className="info--title">Sarah Greer</h1>
                <span className="info--subtitle">Software Engineer</span>
                <div className="btn-container">
                    <a className="btn btn--primary" href="mailto:greerse14@gmail.com" aria-label="email me"><i className="fa-solid fa-envelope btn-icon"></i></a>
                    <a className="btn btn--secondary" href="https://www.linkedin.com/in/sarah-greer-a235444b" aria-label="visit my LinkedIn"><i className="fa-brands fa-linkedin btn-icon"></i></a>
                    <a className="btn btn--tertiary" href="https://github.com/SarahEGreer" aria-label="visit my GitHub"><i className="fa-brands fa-square-github btn-icon"></i></a>
                </div>
            </div>
        </div>
    )
}

