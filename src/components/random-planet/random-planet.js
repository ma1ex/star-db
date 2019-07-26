import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {

    //
    render() {
        return(
            <div className="random-planet bg-dark">
                <img src="https://www.sciencedaily.com/images/2019/07/190711150921_1_900x600.jpg" className="img-thumbnail" />
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Planet name</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">
                        Some quick example text to build on the card title
                        and make up the bulk of the card's content.
                        </p>
                        <p className="card-text">
                        Some quick example text to build on the card title
                        and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}