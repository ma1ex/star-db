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

        const itemList = (
            <PersonList onItemSelected={this.onPersonSelected}>
                {(item) => (
                    <div>{item.name} 
                        <span className="badge badge-dark">{item.gender}</span>&nbsp;
                        <span className="badge badge-dark">{item.birthYear}</span>
                    </div>
                )}
            </PersonList>
        );

        return (
            <ErrorBoundry>
                <Row left={
                        itemList
                    } 
                     right={
                        <PersonDetails itemId={this.state.selectedPerson} />
                    }
                />
            </ErrorBoundry>
        );
    }
}
