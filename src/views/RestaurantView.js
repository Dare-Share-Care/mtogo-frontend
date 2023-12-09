import React, { useEffect, useState } from 'react';
import restaurantService from '../services/restaurantService';
import { useNavigate } from 'react-router-dom';

const RestaurantView = () => {
    const [restaurants, setRestaurants] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const fetchedRestaurants = await restaurantService.getAllRestaurants();
                setRestaurants(fetchedRestaurants);
            } catch (error) {
                console.error(error.message);
                // Handle error fetching restaurants here
            }
        };

        fetchRestaurants();
    }, []);

    const handleButtonClick = (restaurantId) => {
        // Handle button click for the specific restaurant
        navigate(`/menu/${restaurantId}`);
        // You can perform any action here based on the restaurant ID
    };

    return (
        <div className="container">
            <div className="row">
                {restaurants.map(restaurant => (
                    <div className="col-12 mt-3 mb-3" key={restaurant.id}>
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{restaurant.name}</h5>
                                <p className="card-text">{restaurant.description}</p>
                                <button className="btn btn-primary" onClick={() => handleButtonClick(restaurant.id)}>See menu</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantView;
