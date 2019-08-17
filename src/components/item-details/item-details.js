import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import './item-details.css';

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    }

    // Отображение данных с сервера после построения DOM.
    // В React`е используется вместо конструктора
    componentDidMount() {
        this.updateItem();
    }

    // Обновление данных только в случае, если что-то действительно поменялось в
    // состоянии компонента. 
    // Вызывается каждый раз после того, как компонент обновился и отрендерился.
    // Если данный метод в итоге меняет состояние, то ОБЯЗАТЕЛЬНО нужно применить
    // условие для проверки, что отслеживаемый параметр props действиельно изменился,
    // иначе при изменении state этот метод будет вызываться бесконечно!
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    // Метод обновления данных
    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        // Если Id не передан в props, то перерисовывать компонент не нужно
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ 
                    item,
                    image: getImageUrl(item)
                });
            });
    }

    render() {
        const  { item, image } = this.state;
        
        if (!item) {
            return <span>Select a person from a list</span>;
        }
      
        const { name, gender, birthYear, eyeColor } = item;
        
        return (
            <div className="person-details card">
                <img className="person-image" src={image} alt="Character" />
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