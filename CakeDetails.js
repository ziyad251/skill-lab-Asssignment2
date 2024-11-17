// src/pages/CakeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const cakeDetailsData = {
    1: { name: 'Chocolate Cake', price: '230', description: 'Rich and moist chocolate cake.' },
    2: { name: 'Vanilla Cake', price: '410', description: 'Classic vanilla cake with a creamy texture.' },
    3: { name: 'mango cake', price: '520', description: 'Classic vanilla cake with a creamy texture.' },
    4: { name: 'donut cake', price: '390', description: 'Classic vanilla cake with a creamy texture.' },
    5: { name: 'fruit cake', price: '360', description: 'Classic vanilla cake with a creamy texture.' },
    6: { name: 'birthday cake', price: '340', description: 'Classic vanilla cake with a creamy texture.' },
    7: { name: 'wedding cake', price: '700', description: 'Classic vanilla cake with a creamy texture.' },
    8: { name: 'strawberry cake', price: '490', description: 'Classic vanilla cake with a creamy texture.' },
    9: { name: 'Red velvet cake', price: '499', description: 'Classic vanilla cake with a creamy texture.' },
    10: { name: 'Carrot cake', price: '399', description: 'Classic vanilla cake with a creamy texture.' },
    11: { name: 'Cheese cake', price: '299', description: 'Classic vanilla cake with a creamy texture.' },
    12: { name: 'banana cake', price: '199', description: 'Classic vanilla cake with a creamy texture.' },
}
function CakeDetails() {
    const { id } = useParams();
    const cake = cakeDetailsData[id];

    return (
        <div className="cake-details">
            <h2>{cake.name}</h2>
            <p>Price: {cake.price}</p>
            <p>{cake.description}</p>
            <button className="btn">Add to Cart</button>
        </div>
    );
}

export default CakeDetails;
