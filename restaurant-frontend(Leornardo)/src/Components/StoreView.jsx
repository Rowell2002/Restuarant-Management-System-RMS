import React from 'react';
import '../App.css';
import './Navbar' // Import the CSS file
import beef from '../resources/images/beef-burger.jpg';
import chicken from '../resources/images/chicken-burger.jpg';
import teriyaki from '../resources/images/chicken-teriyaki.jpg';
import fish from '../resources/images/fish-burger.jpg';
import grilled from '../resources/images/grilled-chicken.jpg';
import orange from '../resources/images/orange-chicken.jpg';
import thandoori from '../resources/images/tandoori-chicken.jpg';
import tower from '../resources/images/tower-burger.jpg';

const StoreView = ({ addToCart }) => {
  const dishes = [
    { name: 'Fish Burger', price: '$4.50', img: fish },
    { name: 'Beef Burger', price: '$5.59', img: beef },
    { name: 'Chicken Burger', price: '$3.99', img: chicken },
    { name: 'Tower Burger', price: '$24.99', img: tower },
    { name: 'Grilled Chicken', price: '$7.99', img: grilled },
    { name: 'Orange Chicken', price: '$6.99', img: orange },
    { name: 'Thandoori Chicken', price: '$5.49', img: thandoori },
    { name: 'Teriyaki Chicken', price: '$5.99', img: teriyaki }
  ];

  const handleAddToCart = (dish, quantity) => {
    addToCart({ ...dish, quantity: parseInt(quantity) });
  };

  return (
    <div className="main-content" id="dashboard">
      <div className="header">
        <h2>Get Discount Voucher Up To 20%</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div className="popular-dishes">
        <h3>Popular Dishes</h3>
        <div className="dishes">
          {dishes.map((dish, index) => (
            <div key={index} className="dish" data-category="burger">
              <div className="badge">15% Off</div>
              <img src={dish.img} alt={dish.name} className="dish-image"/>
              <h4>{dish.name}</h4>
              <p className="dish-price">{dish.price}</p>
              <label htmlFor={`quantity-${index}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${index}`}
                defaultValue="1"
                min="1"
                className="quantity-input"
                onChange={(e) => (dish.quantity = e.target.value)}
              />
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(dish, dish.quantity)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreView;