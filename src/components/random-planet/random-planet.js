import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {
    // Объект сервиса для работы с удаленным сервером
    swapiService = new SwapiService();
    
    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    constructor() {
        super();
        // Инициализация метода для загрузки случайной планеты
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                });
            });
    }
    
    render() {
        const { id, name, population, rotationPeriod, diameter } = this.state;
        
        return(
            <div className="random-planet bg-dark">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid" alt="Planet" />
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{ name }</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Star Wars Planets</h6>
                        <p className="card-text">Population: <span className="badge badge-dark">{ population }</span></p>
                        <p className="card-text">Rotation period: <span className="badge badge-dark">{ rotationPeriod }</span></p>
                        <p className="card-text">Diameter: <span className="badge badge-dark">{ diameter }</span></p>
                    </div>
                </div>
            </div>
        )
    }
}