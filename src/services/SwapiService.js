export default class SwapiService {
    apiBase = 'https://swapi.dev/api';
  
    getResouce = async (url) => {
        const res = await fetch(`${this.apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        const body = res.json();
        return body;
    }

    extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    transformPlanet = (planet) => {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    getAllPlanets = async () =>  {
        const res = await this.getResouce(`/planets/`);
        return res.results.map(this.transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResouce(`/planets/${id}/`);
        return this.transformPlanet(planet);
    }

    transformPerson = (person) => {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    getAllPeople = async () => {
        const res = await this.getResouce(`/people/`);
        return res.results.map(this.transformPerson);
    }

    getPerson = async  (id) => {
        const person = await this.getResouce(`/people/${id}/`);
        return this.transformPerson(person);
    }

    transformStarship = (starship) => {
        return {
            id: this.extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    getAllStarships = async () => {
        const res = await this.getResouce(`/starships/`);
        return res.results.map(this.transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResouce(`/starships/${id}/`);
        return this.transformStarship(starship);
    } 
}
