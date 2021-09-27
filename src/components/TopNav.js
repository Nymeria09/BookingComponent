import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom';

class TopNav extends React.Component {
    render() {
        return (
            <ul>
                <NavLink to="/" >
                    <li><a><img alt = "logo" src={process.env.PUBLIC_URL + '/logo.png'} className = "logo" /><b className = "w3-text-black">BOOKING</b><b className = "w3-text-grey">COMPONENT</b></a></li>
                </NavLink>
                <div className = "w3-right w3-hide-small w3-margin-right">
                    <li><a><i className = "fab fa-facebook w3-text-black"></i></a></li>
                    <li><a><i className = "fab fa-gitlab w3-text-black"></i></a></li>
                    <li><a><i className = "fab fa-telegram-plane w3-text-black"></i></a></li>
                </div>
            </ul>
        )
    }
};
export default TopNav;
