// API Server: https://www.swapi.co/

export default class SwapiService {
    
    // Базовые URL API
    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';
    
    // Получение JSON-объекта по URL
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    // Коллекция всех персонажей
    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };

    // Персонаж по ID
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    // Коллекция всех планет
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

    // Планета по ID
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    // Коллекция всех кораблей
    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    };

    // Корабль по ID
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    // Получение изображения объекта по ID из другого стороннего источника
    getPersoneImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    };

    // Получение изображения объекта по ID из другого стороннего источника
    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    };

    // Получение изображения объекта по ID из другого стороннего источника
    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    };

    // "Вычленение" id из наиболее подходящего поля полученных данных от удаленного
    // сервера - url.
    // В данном случае, в конце строки адреса, обернутый с обеих сторон слэшами, 
    // находится тот самый id (.../12/), его и "регексим"
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    // Далее три приватных метода - преобразование полученных данных от внешнего
    // сервиса в понятные нашему приложению + изоляция и гарантия корректности данных
    _transformPlanet = (planet) => {
        const id = this._extractId(planet);
        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };
}
