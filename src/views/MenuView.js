import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import restaurantService from '../services/restaurantService';
import orderService from '../services/orderService';

const MenuView = () => {
    const { restaurantId } = useParams();
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const menuData = await restaurantService.getMenuByRestaurantId(restaurantId);
                setMenu(menuData);
                setLoading(false);
            } catch (error) {
                console.error(error.message);
                // Handle error fetching menu
                setLoading(false);
            }
        };

        fetchMenu();
    }, [restaurantId]);

    const handleOrder = async (menuItemId) => {
        // Replace this example data with your actual order data
        const orderData = {
            restaurantId: parseInt(restaurantId), // Convert restaurantId to integer if needed
            userId: 1, // Replace with the actual user ID
            userEmail: "example@example.com", // Replace with the actual user email
            lines: [
                {
                    menuItemId: menuItemId,
                    quantity: 1 // Set the desired quantity
                }
            ],
            deliveryAddress: {
                street: "123 Main St",
                city: "Example City",
                zipCode: 12345
            }
        };

        try {
            const response = await orderService.createOrder(orderData);
            console.log('Order created:', response);
            // Handle successful order creation
        } catch (error) {
            console.error(error.message);
            // Handle error creating order
        }
    };

    return (
        <div className="container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="row">
                    {menu.map(item => (
                        <div className="col-lg-4 col-md-6 mt-4 mb-4" key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">DKK {item.price},-</p>
                                    <button className="btn btn-primary" onClick={() => handleOrder(item.id)}>Order Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuView;
