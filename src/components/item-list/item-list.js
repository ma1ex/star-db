import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import './item-list.css';

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null
    };
    
    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({peopleList});
            });
    }

    // Получение из коллекции персон id и name для построения списка
    renderItems (arr) {
        return arr.map(({id, name}) => {
            return (
                <a href="#!" key={ id } onClick={() => this.props.onItemSelected(id)} 
                    className="list-group-item list-group-item-action">{name}</a>
            );
        });
    }

    render() {

        const { peopleList } = this.state;
        // Отображение прелоадера, пока не подгрузятся данные
        if (!peopleList) {
            return <Spinner />;
        }
        const items = this.renderItems(peopleList);
        
        return (
            <div className="list-group">
                {items}
            </div>
        )
    }
}