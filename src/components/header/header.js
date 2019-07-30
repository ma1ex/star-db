import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {

    //
    render() {
        return(
            <nav className="navbar navbar-expand-sm bg-dark">
                <h3>Star DB</h3>
                <ul className="navbar-nav mr-auto">
                    <li className="btn-dark btn-lg">
                        <a className="nav-link" href="#!">People</a>
                    </li>
                    <li className="btn-dark btn-lg">
                        <a className="nav-link" href="#!">Planets</a>
                    </li>
                    <li className="btn-dark btn-lg">
                        <a className="nav-link" href="#!">Starships</a>
                    </li>
                </ul>
            </nav>
        )
    }
}