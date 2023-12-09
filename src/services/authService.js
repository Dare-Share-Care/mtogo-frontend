import axios from 'axios';

const URL = 'http://localhost:5067';

const api = () => {
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${URL}/api/Auth/login`, {
                email,
                password,
            });

            if (response.data) {
                localStorage.setItem('token', response.data);
                return response.data;
            } else {
                throw new Error('Invalid token received');
            }
        } catch (error) {
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        // Clear the token from localStorage on logout
        localStorage.removeItem('token');
    };

    const getToken = () => {
        return localStorage.getItem('token');
    };

    return {
        login,
        logout,
        getToken,
    };
};

export default api();
