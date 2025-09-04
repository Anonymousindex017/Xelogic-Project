import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Dashboard.css'
const Dashboard = () => {
    return (
        <div>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            <nav>
                <div>Logo</div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>Notification</li>
                            <li>FAQs</li>
                            <li>Message</li>
                        </ul>
                    </div>
                    <div>
                        <div>Profile</div>
                        <div>Logout</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Dashboard
