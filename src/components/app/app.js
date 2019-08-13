import React, { Component } from 'react';


import SwapiService from '../../services/swapi-service';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
//import PlanetDetails from '../planet-details';
import RandomPlanet from '../random-planet';
//import StarshipDetails from '../starship-details';

import './app.css';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';

export default class App extends Component {
    
    swapiService = new SwapiService();
    
    state = {
        hasError: false
    }

    // Отлов ошибок всего приложения
    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({hasError: true});
    }

    render() {
        //
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        
        return (
            <div className="row">
                <Header />
                <RandomPlanet />

                <div className="container button-row">
                    <ErrorButton />
                </div>

                <PeoplePage />
                
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPlanets} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>

            </div>
        )
    }
}
