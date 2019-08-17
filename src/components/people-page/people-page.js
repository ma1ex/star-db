import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import Row from '../row';

import './people-page.css';

class ErrorBoundry extends Component {
    
    state = {
        hasError: false
    };
    
    componentDidCatch () {
        this.setState({
            hasError: true
        });
    }
    
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        
        return this.props.children;
    }
}

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
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <ErrorBoundry>
                <Row left={ itemList } right={ personDetails } />
            </ErrorBoundry>
        );
    }
}
