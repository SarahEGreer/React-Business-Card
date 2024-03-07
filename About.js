import React from "react";

export default function About() {
    return (
        <div className="content about">
            <div className="about--container">
                <span className="about--heading-container"><h2 className="about--heading">About</h2></span>
                <p className="about--p">Former educator, current software engineer. I am passionate about the intersection of education and technology, and the ways in which innovative technologies can help improve learner outcomes and experiences for all.</p>
            </div>
            <div className="about--container">
                <span className="about--heading-container"><h2 className="about--heading">Interests</h2></span>
                <div className="about--p ul-container">
                    <ul className="about--ul">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Accessibility</li>
                        <li>Language acquisition & preservation</li>
                    </ul>
                    <ul className="about--ul">
                        <li>Learning in public</li>
                        <li>Sustainability</li>
                        <li>Reading for fun</li>
                        <li>My dog</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}