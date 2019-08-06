import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import './person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null
    }

    // Отображение данных с сервера после построения DOM.
    // В React`е используется вместо конструктора
    componentDidMount() {
        this.updatePerson();
    }

    // Обновление данных только в случае, если что-то действительно поменялось в
    // состоянии компонента. 
    // Вызывается каждый раз после того, как компонент обновился и отрендерился.
    // Если данный метод в итоге меняет состояние, то ОБЯЗАТЕЛЬНО нужно применить
    // условие для проверки, что отслеживаемый параметр props действиельно изменился,
    // иначе при изменении state этот метод будет вызываться бесконечно!
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    // Метод обновления данных
    updatePerson() {
        const { personId } = this.props;
        // Если Id не передан в props, то перерисовывать компонент не нужно
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person });
            });
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from a list</span>;
            // return <Spinner />
        }
      
        const { id, name, gender, birthYear, eyeColor } = this.state.person;
        
        return (
            <div className="person-details card">
                <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Character" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Gender: <span className="badge badge-dark">{gender}</span></p>
                    <p className="card-text">Birth Year: <span className="badge badge-dark">{birthYear}</span></p>
                    <p className="card-text">Eye Color: <span className="badge badge-dark">{eyeColor}</span></p>
                </div>
                <div>
                    <ErrorButton />
                </div> 
            </div>
        )
    }
}