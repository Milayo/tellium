import React from 'react';
import "./header.scss";

import DuoRoundedIcon from '@material-ui/icons/DuoRounded';

const Header = () => {
    return (
        <header className="header">
            <ul className="header-list">
            
                <li className="header-group">
                    <DuoRoundedIcon className="header-icon" />
                   Tellium
                </li>
                <li className="header-tab-group">
                <div className="header-tab">Log In</div>
                <div className="header-tab">Sign In</div>
                <div className="header-tab">How It Works</div>
                </li>
               

            
            </ul>
            
        </header>
    )
}

export default Header;
