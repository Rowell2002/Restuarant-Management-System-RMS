import React from 'react';
import '../App.css'; 

const Order = ({ cart, removeFromCart, calculateTotal, proceedToPayment }) => {

    const Cart = ({ cart, removeFromCart }) => {
        const navigate = useNavigate();
      
        const calculateTotal = () => {
          return cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2);
        };
      
        const proceedToPayment = () => {
          navigate('/payment'); // Redirect to the payment page
        };
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length == 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  {item.name} - {item.quantity} x ${item.price}
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal()}</h3>
          <button className="proceed-btn" onClick={proceedToPayment}>
            Checkout ➜
          </button>
        </>
      )}
    </div>
  );
};
};

export default Order;
