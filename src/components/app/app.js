import React, { Component } from 'react';


import SwapiService from '../../services/swapi-service';
import Header from '../header';
import ItemDetails, { Record } from '../item-details/item-details';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorBoundry from '../error-boundry';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import Row from '../row';

export default class App extends Component {
    
    swapiService = new SwapiService();
    
    render() {
        
        /* return (
            <ErrorBoundry>
                <div className="row">
                    <Header />
                    <RandomPlanet />

                    <div className="container button-row">
                        <ErrorButton />
                    </div>

                    <PeoplePage />
                    
                </div>
            </ErrorBoundry>
        ) */
        
        const { getPerson, getStarship, getPersoneImage, getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails 
                itemId={11} getData={ getPerson } 
                getImageUrl={getPersoneImage}>
                    <Record field="gender" label="Gender" />
                    <Record field="eyeColor" label="Eye Color" />
                    <Record field="birthYear" label="Birth Year" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails 
                itemId={5} getData={ getStarship } 
                getImageUrl={getStarshipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
        </ItemDetails>
        );
        
        return (
            
            
            <ErrorBoundry>
                <div className="row">
                    <Header />
                    
                    <Row left={personDetails} right={starshipDetails} />
                </div>
            </ErrorBoundry>
        )
    }
}
