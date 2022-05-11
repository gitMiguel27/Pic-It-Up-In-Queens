import React from "react";
import Typical from "react-typical";
import './PicItUp101.css';

function PicItUp101() {
    return (
        <div className="picitup101">
            <h1 id="picitup101-title">Pick-It-Up 101<br/>Rules, Warnings, and Advice</h1>
            <div className="rules">
                <h1 className="rules-section">
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Rules',
                            1000,
                            '',
                            1000,
                            'Rules',
                            7500
                        ]}
                    />
                </h1>
                <ol id="rules-list">
                    <li className="rule">
                        <p>Google the location, not the image!</p>
                    </li>
                    <li className="rule">
                        <p>You must be in close proximity to the challenge site for your picture!</p>
                    </li>
                    <li className="rule">
                        <p>Do not harm other players or intervene with other players’ efforts in playing the game.</p>
                    </li>
                </ol>
            </div>
            <div className="Warnings">
                <h1 className="warnings-section">
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Warnings',
                            1000,
                            '',
                            1000,
                            'Warnings',
                            7500
                        ]}
                    />
                </h1>
                <ol id="warnings-list">
                    <li className="warning">
                        <p>Do not submit more than one post for a single challenge!</p>
                    </li>
                    <li className="warning">
                        <p>Always be aware of your surroundings and your belongings.</p>
                    </li>
                    <li className="warning">
                        <p>Pic-It-Up is not responsible for any mishaps for your playing the game.</p>
                    </li>
                </ol>
            </div>
            <div className="advice">
                <h1 className="advice-section">
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Advice',
                            1000,
                            '',
                            1000,
                            'Advice',
                            7500
                        ]}
                    />
                </h1>
                <ol id="advice-list">
                    <li className="advice">
                        <p>Don’t stay on your phone, you might miss a spot while you’re looking.</p>
                    </li>
                    <li className="advice">
                        <p>Be open to local restaurants, culture and attractions - you would be surprised by what Queens has to offer.</p>
                    </li>
                    <li className="advice">
                        <p>Bring your own personality to the game - take a selfie!</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default PicItUp101;