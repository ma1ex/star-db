import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import Row from '../row';

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();
    
    state = {
        selectedPerson: 1,
        hasError: false
    };

    componentDidCatch (error, info) {
        this.setState({
            hasError: true
        });
    }

    // Событие переключения id персонажа
    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const itemmList = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={(item) => (
                    <div>{item.name} 
                        <span className="badge badge-dark">{item.gender}</span>&nbsp;
                        <span className="badge badge-dark">{item.birthYear}</span></div>
                )}
            />
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <Row left={ itemmList } right={ personDetails } />
        );
    }
}
