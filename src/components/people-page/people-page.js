import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry/';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

import './people-page.css';

export default class PeoplePage extends Component {

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

        return (
            <ErrorBoundry>
                <Row left={
                        <PersonList onItemSelected={this.onPersonSelected} />
                    } 
                     right={
                        <PersonDetails itemId={this.state.selectedPerson} />
                    }
                />
            </ErrorBoundry>
        );
    }
}
