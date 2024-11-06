import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-gray-800 text-black flex flex-col">
        <div className="text-center text-2xl font-semibold p-4">
          <span className="text-yellow-400">Leornado</span>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard/purchase"
                className={`block p-4 ${
                  location.pathname === '/dashboard/purchase' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
              >
                Purchases
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/stock"
                className={`block p-4 ${
                  location.pathname === '/dashboard/stock' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
              >
                Stock
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className={`block p-4 ${
                  location.pathname === '/dashboard/profile' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/payments"
                className={`block p-4 ${
                  location.pathname === '/dashboard/payments' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
              >
                Payments
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/details"
                className={`block p-4 ${
                  location.pathname === '/dashboard/details' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
              >
                Product details
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/logout"
                className={`block p-4 ${
                  location.pathname === '/dashboard/logout' ? 'bg-gray-700' : 'hover:bg-gray-600'
                }`}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-8 h-screen w-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
