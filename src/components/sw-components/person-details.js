import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ({ itemId, swapiService }) => {
    const { getPerson, getPersoneImage } = swapiService;
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

export default withSwapiService(PersonDetails);
