import React from "react";
import Typical from "react-typical";
import "./Footer.css"

function Footer() {
    return (
        <div className="main-footer">
            <hr/>
            <div className="footer-container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Contact Info:</h4>
                        <div className="list-unstyled">
                            <a href="https://www.linkedin.com/in/miguel-nazario/" className="social" target="_blank" rel="noreferrer noopener">
                                - LinkedIn
                            </a>
                            <br/>
                            <a href="https://github.com/gitMiguel27" className="social" target="_blank" rel="noreferrer noopener">
                                - Github
                            </a>
                        </div>
                    </div>
                    <div className='logo-container'>
                        <p className="typical-logo">
                            <strong>Pic-It-Up</strong>
                        </p>
                        <p className="typical-logo">
                            <Typical
                                loop={1}
                                wrapper="b"
                                steps={[
                                    'In Queens',
                                    1000,
                                    'Coming Soon: Manhattan',
                                    1000,
                                    'Coming Soon: Brooklyn',
                                    1000,
                                    'In Queens',
                                    1000
                                ]}
                            />
                        </p>
                    </div>
                </div>
                {/* <hr/> */}
                <div id="copyright">
                    <p className="col-small">
                        &copy;{new Date().getFullYear()} Pic-It-Up INC | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;