import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AdminTopNav() {
    const {avatar} = JSON.parse(localStorage.getItem('user'));
    const {fullname} = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = "/";
    };

    const location = useLocation();

    return (
        <div className="top_nav">
            <div className="nav_menu">
                <nav>
                    <div className="nav toggle">
                        <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                    </div>

                    <ul className="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="user-profile dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                                <img src={avatar} alt={fullname} /> {fullname}
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link to={'/userprofile'} >Profile</Link></li>
                                <li><Link to={'/changepassword'}>Change Password</Link></li>
                                <li><Link onClick={handleLogout}><i class="fa fa-sign-out pull-right"></i> Log Out</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

