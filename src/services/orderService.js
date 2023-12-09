import axios from "axios";
import authService from "./authService";

const URL = 'http://localhost:5157';

const api = () => {
    const createOrder = async (orderData) => {
        try {
            const token = authService.getToken();
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await axios.post(`${URL}/api/Order/create`, orderData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Error creating order');
        }
    };

    return {
        createOrder
    };
};

export default api();
