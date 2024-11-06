import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Payments = () => {
  const navigate = useNavigate();

  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  return (
    <div className=" items-center justify-center max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-black">Payment</h2>

      {/* Delivery Method */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2 text-black">Delivery method</h3>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <label className="border p-4 rounded-md w-full md:w-[48%] cursor-pointer">
            <input
              type="radio"
              name="deliveryMethod"
              value="standard"
              checked={deliveryMethod === 'standard'}
              onChange={() => setDeliveryMethod('standard')}
              className="mr-2"
            />
            <span className="font-semibold text-black">Standard</span>
            <p className="text-sm text-black">1 hour</p>
            <p className="font-medium text-black">$5.00</p>
          </label>
          <label className="border p-4 rounded-md w-full md:w-[48%] cursor-pointer">
            <input
              type="radio"
              name="deliveryMethod"
              value="express"
              checked={deliveryMethod === 'express'}
              onChange={() => setDeliveryMethod('express')}
              className="mr-2"
            />
            <span className="font-semibold text-black">Express</span>
            <p className="text-sm text-black">30 minitues</p>
            <p className="font-medium text-black">$16.00</p>
          </label>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2 text-black">Payment</h3>
        <div className="mb-4">
          <label className="mr-4 text-black">
            <input
              type="radio"
              name="paymentMethod"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={() => setPaymentMethod('credit-card')}
              className="mr-2"
            />
            Credit card
          </label>
          <label className="mr-4 text-black">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
              className="mr-2"
            />
            PayPal
          </label>
          <label className="mr-4 text-black">
            <input
              type="radio"
              name="paymentMethod"
              value="etransfer"
              checked={paymentMethod === 'etransfer'}
              onChange={() => setPaymentMethod('etransfer')}
              className="mr-2"
            />
            eTransfer
          </label>
        </div>

        {/* Credit Card Details */}
        {paymentMethod === 'credit-card' && (
          <div>
            <div className="mb-4 text-black">
              <label className="block mb-2 text-black">Card number</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Card number"
              />
            </div>
            <div className="mb-4 text-black">
              <label className="block mb-2 text-black">Name on card</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Name on card"
              />
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 text-black">
              <div className="mb-4 w-full">
                <label className="block mb-2 text-black">Expiration date (MM/YY)</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div className="mb-4 w-full text-black">
                <label className="block mb-2 text-black">CVC</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="CVC"
                />
              </div>
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => navigate('/thankyou')}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;