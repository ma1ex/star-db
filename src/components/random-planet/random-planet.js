import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './random-planet.css';

export default class RandomPlanet extends Component {
    // Объект сервиса для работы с удаленным сервером
    swapiService = new SwapiService();
    
    state = {
        planet: {},
        loading: true, // флаг отображения спиннера
        error: false // флаг ошибки загрузки данных
    }

    componentDidMount() {
        // Инициализация метода для загрузки случайной планеты
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    //
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Собственное событие обновления данных планеты на основе трансформированных 
    // данных из стороннего API в классе SwapiService
    onPlanetLoaded = (planet) => {
        // Т.к. начального состояния стэйта нету, можно присваивать данные напрямую
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    //
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        // const id = 1200;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError); // отлов возможной ошибки
    }
    
    render() {
        const { planet, loading, error } = this.state;
        
        const hasData = !(loading || error);
        // Компонент с выводом сообщений об ошибках
        const errorMessage = error ? <ErrorIndicator /> : null;
        // В зависимости от булевого значения loading будет отображаться или
        // спиннер, пока данные планеты не загружены, или, собственно, данные планеты,
        // вынесенные в отдельный компонент
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet bg-dark">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    // Получение подходящего изображения с еще одного тематического ресурса,
    // (starwars-visualguide.com) где id картинки соответствует id объекта 
    // планеты, т.к. этот сервис тоже использует swapi.co
    return (
        <div className="wrap">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid planet-img" alt={`Planet ${name}`} />
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
    );
}