// API Server: https://www.swapi.co/

export default class SwapiService {
    
    // Базовый URL API
    _apiBase = 'https://swapi.co/api';
    
    //
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    //
    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results;
    }

    //
    getPersonId(id) {
        return this.getResource(`/people/${id}/`);
    }

    //
    async getAllPlanets() {
        const res = await this.getResource('/planets/');
        return res.results;
    }

    //
    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    //
    async getAllStarships() {
        const res = await this.getResource('/starships/');
        return res.results;
    }

    //
    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }
}

/* const swapi = new SwapiService();
swapi.getAllStarships().then((starships) => {
    starships.forEach((p) => {
        console.log(p.name);
    });
}); */