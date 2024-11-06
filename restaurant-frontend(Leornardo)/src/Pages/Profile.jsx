import React from 'react';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: 'Chicken Burger',
      price: 32.00,
      quantity: 1,
      status: 'In stock'
    }
  ];
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingEstimate = 5.00;
  const taxEstimate = 8.32;
  const total = subtotal + shippingEstimate + taxEstimate;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-black">My Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
      {/* Cart Items */}
      <div className="lg:col-span-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">   
              <div className="ml-4 flex-grow">
                <h3 className="text-black text-lg font-semibold">{item.name}</h3>
                <p className="text-black text-sm font-semibold mt-2">${item.price.toFixed(2)}</p>
              </div>
              <div className="ml-4">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="text-black border border-gray-300 rounded-lg p-2 w-16 text-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-500">Subtotal</p>
            <p className="text-black font-semibold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-500">Shipping estimate</p>
            <p className="text-black font-semibold">${shippingEstimate.toFixed(2)}</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-500">Tax estimate</p>
            <p className="text-black font-semibold">${taxEstimate.toFixed(2)}</p>
          </div>
          <div className="border-t pt-4 flex justify-between">
            <p className="text-black text-lg font-semibold">Order total</p>
            <p className="text-black text-lg font-semibold">${total.toFixed(2)}</p>
          </div>
          <button className="w-full mt-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700" onClick={() => navigate('/payments')}> 
            Checkout
          </button>
        </div>
      </div>
    </div>
  
    </div>
  );
};

export default Profile;
