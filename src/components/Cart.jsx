import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar component is in the same directory
import Footer from './Footer'; // Import the Footer component
import '../assets/css/cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  // Static array of items
  const staticCartItems = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
    // Add more items as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        {staticCartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="cart-items">
            {staticCartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
                {/* Add additional details or image if needed */}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Cart;
