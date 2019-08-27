import React, { Component } from 'react';


import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import Row from '../row';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import {
    PlanetDetails,
    StarshipDetails,
    PlanetList,
    StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {
    
    swapiService = new SwapiService();

    render() {
        
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="row">
                        <Header />
                        <RandomPlanet />

                        <div className="container button-row">
                            <ErrorButton />
                        </div>

                        <PeoplePage />

                        <Row left={ <StarshipList /> } right={
                            <StarshipDetails itemId={9} />
                        } />

                        <Row left={ <PlanetList /> } right={
                            <PlanetDetails itemId={4} />
                        } />
                        
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )

    }
}
