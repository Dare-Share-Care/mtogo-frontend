import axios from "axios";

const URL = 'http://localhost:5251';

const api = () => {
    const getAllRestaurants = async () => {
        try {
            const response = await axios.get(URL + '/api/Restaurant/get-all-restaurants');
            return response.data;
        } catch (error) {
            throw new Error('Error fetching restaurants');
        }
    };

    const getMenuByRestaurantId = async (restaurantId) => {
        try {
            const response = await axios.get(`${URL}/api/Restaurant/${restaurantId}/menu`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching restaurant menu');
        }
    };

    return {
        getAllRestaurants,
        getMenuByRestaurantId
    };
};

export default api();
