// API Server: https://www.swapi.co/

export default class SwapiService {
    
    // Базовый URL API
    _apiBase = 'https://swapi.co/api';
    
    // Получение JSON-объекта по URL
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    // Коллекция всех персонажей
    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results.map(this._transformPerson);
    }

    // Персонаж по ID
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    // Коллекция всех планет
    async getAllPlanets() {
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
    }

    // Планета по ID
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    // Коллекция всех кораблей
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    // Корабль по ID
    async getStarship(id) {
        const starship = this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    // "Вычленение" id из наиболее подходящего поля полученных данных от удаленного
    // сервера - url.
    // В данном случае, в конце строки адреса, обернутый с обеих сторон слэшами, 
    // находится тот самый id (.../12/), его и "регексим"
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    // Далее три приватных метода - преобразование полученных данных от внешнего
    // сервиса в понятные нашему приложению + изоляция и гарантия корректности данных
    _transformPlanet (planet) {
        const id = this._extractId(planet);
        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        };
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    }
}
