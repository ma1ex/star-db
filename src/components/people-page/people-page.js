import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

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

        return (
            <React.Fragment>
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </React.Fragment>
        );
    }
}
