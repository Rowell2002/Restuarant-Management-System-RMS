import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const navigate = useNavigate();

    // Check if user is present in sessionStorage
    const isUserLoggedIn = sessionStorage.getItem('user') !== null;

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Website Name on the Left Corner */}
                <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                    Learnado
                </Link>

                <div className="flex md:order-2">
                    {/* Conditionally Render Join Button or User Menu */}
                    {!isUserLoggedIn ? (
                        <button 
                            type="button" 
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-5" 
                            onClick={() => navigate('/login')}
                        >
                            Join
                        </button>
                    ) : (
                        <div>
                            <button 
                                type="button" 
                                className="relative p-0 flex rounded-full bg-white-300 text-3xl text-center align-center items-center ml-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                id="user-menu-button" 
                                aria-expanded="false" 
                                aria-haspopup="true"
                                onClick={() => navigate('/dashboard')}
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                <i className="fi fi-rr-circle-user"></i>
                                {/* <img className="h-8 w-8 rounded-full" src="../Resources/images/user.png" alt="" /> */}
                            </button>
                        </div>
                    )}

                    <button 
                        data-collapse-toggle="navbar-menu" 
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="navbar-menu" 
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-menu">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/store" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/order" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Food Order
                            </Link>
                        </li>
                        {/* Add additional menu items here */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
