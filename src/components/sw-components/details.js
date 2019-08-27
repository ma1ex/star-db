import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
// import SwapiService from '../../services/swapi-service';
import { SwapiServiceConsumer } from '../swapi-service-context';

// const swapiService = new SwapiService();

/* const {
    getPerson,
    getPlanet,
    getStarship,
    getPersoneImage,
    getPlanetImage,
    getStarshipImage
} = swapiService; */


const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersoneImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};