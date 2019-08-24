import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersoneImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;


const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId={itemId} 
            getData={ getPerson } 
            getImageUrl={getPersoneImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
                <Record field="birthYear" label="Birth Year" />
        </ItemDetails>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId={itemId}
            getData={ getPlanet } 
            getImageUrl={getPlanetImage}>
                <Record field="name" label="Name" />
                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="Rotation perhiod" />
                <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails 
            itemId={itemId}
            getData={ getStarship } 
            getImageUrl={getStarshipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};