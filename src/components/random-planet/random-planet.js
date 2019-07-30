import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {
    // Объект сервиса для работы с удаленным сервером
    swapiService = new SwapiService();
    
    state = {
        planet: {}
    }

    constructor() {
        super();
        // Инициализация метода для загрузки случайной планеты
        this.updatePlanet();
    }

    // Собственное событие обновления данных планеты на основе трансформированных 
    // данных из стороннего API в классе SwapiService
    onPlanetLoaded = (planet) => {
        // Т.к. начального состояния стэйта нету, можно присваивать данные напрямую
        this.setState({planet});
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }
    
    render() {
        const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;
        // Получение подходящего изображения с еще одного тематического ресурса,
        // (starwars-visualguide.com) где id картинки соответствует id объекта 
        // планеты, т.к. этот сервис тоже использует swapi.co
        return(
            <div className="random-planet bg-dark">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid" alt="Planet" />
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Star Wars Planets</h6>
                        <p className="card-text">Population: <span className="badge badge-dark">{population}</span></p>
                        <p className="card-text">Rotation period: <span className="badge badge-dark">{rotationPeriod}</span></p>
                        <p className="card-text">Diameter: <span className="badge badge-dark">{diameter}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}