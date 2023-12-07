import React from 'react';
import ImageURLs from '../../assets/images';

function Header() {

    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg  navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={ImageURLs.logoUrl} width="100" height="100" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about-us">About us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    What we do
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/training">Training</a>
                                    <a className="dropdown-item dropdown-toggle" href="/our-programs" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Our Programs
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                                        <a className="dropdown-item" href="/community-activities">Community Activities</a>
                                        <a className="dropdown-item" href="/black-immigrant-voices">Black immigrant voices</a>
                                        <a className="dropdown-item" href="/awards">Awards</a>
                                        <a className="dropdown-item" href="/action-forums">Action Forums</a>
                                    </div>
                                    <a className="dropdown-item" href="/support-services">Support services</a>
                                    <a className="dropdown-item" href="/advocacy">Advocacy</a>
                                </div>
                            </li>
                            {/* Start get involved dropdown menu */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/get-involved" id="getInvlvedDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Get involved
                                </a>
                                <div className="dropdown-menu" aria-labelledby="getInvlvedDropdownMenuLink">
                                    <a className="dropdown-item" href="/get-involved">Get involved</a>
                                    <a className="dropdown-item" href="/volunteer">Volunteer</a>
                                    <a className="dropdown-item" href="/membership">Become a member</a>
                                    <a className="dropdown-item" href="/partnership">Become a partner</a>
                                    <a className="dropdown-item" href="/careers">Careers</a>
                                    <a className="dropdown-item" href="/#">Donate</a>
                                </div>
                            </li>
                            {/* End get involved dropdown menu */}
                            <li className="nav-item">
                                <a className="nav-link" href="/events">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hire-us">Hire us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">Contact us</a>
                            </li>
                            <li className="nav-item ml-auto">
                                <a className="btn btn-primary" href="/">Donate</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    );
}

export default Header;