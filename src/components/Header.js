import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import authService from '../services/authService'; // Import authService to handle logout

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check login status when the component mounts
        const checkLoginStatus = async () => {
            const token = authService.getToken();
            if (token) {
                setIsLoggedIn(true);
            }
        };

        checkLoginStatus();
    }, []); // Empty dependency array ensures this effect runs only once

    const handleLogout = () => {
        // Perform logout action
        authService.logout(); // Implement a logout function in authService to clear the token
        setIsLoggedIn(false);
        // You may also want to redirect the user to the login page or homepage after logout
    };

    return (
        <div>
            <nav>
                <ul className='header'>
                    <li><NavLink to='/'>Restaurants</NavLink></li>
                    {!isLoggedIn && <li><NavLink to='/login'>Login</NavLink></li>}
                    {isLoggedIn && (
                        <li>
                            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
