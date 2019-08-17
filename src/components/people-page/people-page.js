import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/';
import ErrorBoundry from '../error-boundry/';
import Row from '../row';

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();
    
    state = {
        selectedPerson: 1,
        hasError: false
    };

    // Событие переключения id персонажа
    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    };

    render() {

        const { getPerson, getPersoneImage } = this.swapiService;
        
        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>
                
                {(item) => (
                    <div>{item.name} 
                        <span className="badge badge-dark">{item.gender}</span>&nbsp;
                        <span className="badge badge-dark">{item.birthYear}</span>
                    </div>
                )}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson} getData={ getPerson } getImageUrl={getPersoneImage} />
            </ErrorBoundry>
        );

        return (
            <ErrorBoundry>
                <Row left={ itemList } right={ personDetails } />
            </ErrorBoundry>
        );
    }
}
