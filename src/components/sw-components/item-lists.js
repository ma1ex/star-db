import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

// =============================================================================

/**
 * Компонент (функция) высшего порядка - HOC;
 * В первом параметре принимает компонент со списком собственных параметров,
 * а в теле принимаемого компонента разворачивается рендер-функция, переданная
 * в качестве второго параметра данного HOC-компонента
 */
const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};

/**
 * Рендер-функции для HOC-компонента с моделями
 */
const renderName = ({ name }) => <span>{name}</span>;

const renderPerson = ({ name, gender, birthYear }) => 
    <div>{name} 
        <span className="badge badge-dark">{gender}</span>&nbsp;
        <span className="badge badge-dark">{birthYear}</span>
    </div>;

const renderStarship = ({ name, model, length }) => 
    <div>{name} 
        <span className="badge badge-dark">{model}</span>&nbsp;
        <span className="badge badge-dark">{length}</span>
    </div>;

const renderPlanet = ({ name, diameter, population }) => 
    <div>{name} 
        <span className="badge badge-dark">{diameter}</span>&nbsp;
        <span className="badge badge-dark">{population}</span>
    </div>;

// =============================================================================

/**
 * Здесь для генерации каждого конкретного списка применяется паттерн
 * "Композиция функций" - это когда берется результат одной функции и поверх нее 
 *      применятся еще одна функция.
 * В контексте React - это "Композиция компонентов высшего порядка"
 */
const PersonList = withData(withChildFunction(ItemList, renderPerson), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, renderPlanet), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderStarship), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};