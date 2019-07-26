import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {

    //
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h3>Star DB</h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="btn-dark btn-lg">
                            <a className="nav-link" href="#">People <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="btn-dark btn-lg">
                            <a className="nav-link" href="#">Planets</a>
                        </li>
                        <li className="btn-dark btn-lg">
                            <a className="nav-link" href="#">Starships</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}