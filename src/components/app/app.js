import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import RandomPlanet from '../random-planet';
import StarshipDetails from '../starship-details';

import './app.css';

export default class App extends Component {
    //
    render() {
        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <ItemList />
                <PersonDetails />
                <PlanetDetails />
                <StarshipDetails />
            </div>
        )
    }
}
