// Import React and other necessary modules
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../assets/css/birthday.css';
import axios from 'axios';

// Define the Birthday component
const Birthday = () => {
    // Define state variables to store data
    const [birthdayCardsData, setBirthdayCardsData] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [filterOptions, setFilterOptions] = useState({ rating: null, price: null, availability: null });
    const [cartMessage] = useState('');
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Fetch data from the backend when component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    // Function to fetch gift card data from the backend
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8181/api/giftcards');
            setBirthdayCardsData(response.data);
            setFilteredCards(response.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    // Function to apply filters based on user selection
    const applyFilters = () => {
        let filtered = [...birthdayCardsData];

        if (filterOptions.rating) {
            filtered = filtered.filter(card => card.rating >= filterOptions.rating);
        }
        if (filterOptions.price) {
            const [minPrice, maxPrice] = filterOptions.price.split('-').map(parseFloat);
            filtered = filtered.filter(card => {
                const cardPrice = parseFloat(card.price.replace('Rs.', '')); // Assuming price is stored as a string with 'Rs.' prefix
                return cardPrice >= minPrice && cardPrice <= maxPrice;
            });
        }
        if (filterOptions.availability) {
            filtered = filtered.filter(card => card.availability === filterOptions.availability);
        }

        setFilteredCards(filtered);
    };

    // Function to reset filters
    const resetFilters = () => {
        setFilteredCards(birthdayCardsData);
        setFilterOptions({ rating: null, price: null, availability: null });
    };

    // Function to add a product to cart
    // const addToCart = (title) => {
    //     // Implement your add to cart logic here
    //     setCartMessage(`Added ${title} to cart`);
    //     setTimeout(() => {
    //         setCartMessage('');
    //     }, 3000); // Hides the message after 3 seconds
    // };

    // Define options for rating and price filters
    const ratingOptions = Array.from({ length: 5 }, (_, index) => index + 1);
    const priceOptions = [
        '0-100',
        '100-200',
        '200-300',
        '300-400',
        '400-500',
        // Add more price ranges as needed
    ];
    const handlePay = () => {
        try {
          const amountx = 250;
          var options = {
            key: "rzp_test_i1tLowNKXmrrLX",
            key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
            amount: amountx * 100,
            currency: "INR",
            name: "D-Portal",
            description: "for testing purpose",
            handler: function (response) {
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name: "DEEPAK",
              email: "deepakprabu1234@gmail.com",
              contact: "8754988838",
            },
            notes: {
              address: "Sri krishna college of Engineering and Technology",
            },
            theme: {
              color: "#3399cc",
            },
          };
    
          var pay = new window.Razorpay(options);
          pay.open();
        } catch (error) {
          console.error(error);
        }
      };
    // Render the component JSX
    return (
        <div className="home">
            <div style={{ position: 'fixed', width: '100%' }}>
                <Navbar />
            </div>
            <div className="sidebar-content1">
                <div className='filter-options'>
                    <div>
                        <label>Rating:</label>
                        <select value={filterOptions.rating || ''} onChange={(e) => setFilterOptions({ ...filterOptions, rating: e.target.value })}>
                            <option value="">All</option>
                            {ratingOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Price:</label>
                        <select value={filterOptions.price || ''} onChange={(e) => setFilterOptions({ ...filterOptions, price: e.target.value })}>
                            <option value="">All</option>
                            {priceOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Availability:</label>
                        <select value={filterOptions.availability || ''} onChange={(e) => setFilterOptions({ ...filterOptions, availability: e.target.value })}>
                            <option value="">All</option>
                            <option value="In Stock">In stock</option>
                            <option value="Out Of Stock">Out of stock</option>
                        </select>
                    </div>
                    <button onClick={applyFilters}>Apply Filters</button>
                    <button onClick={resetFilters}>Reset Filters</button>
                </div>
                <div className='bday-main'>
                    <div className='birthday-card-row'>
                        {filteredCards.map((card, index) => (
                            <div key={index} className='birthday-card'>
                                <img src={card.imageUrl} alt={card.title} className='birthday-card-image' />
                                <div className="product-details">
                                    <h3 className='birthday-card-title'>{card.title}</h3>
                                    <br></br>{/* <p className='birthday-card-description'>{card.description}</p> */}
                                    <h4 className='birthday-card-price'>Price: {card.price}</h4> {/* Display price here */}
                                    <div className="product-rating">
                                        <span>Rating:</span>
                                        <div className="stars">
                                            {[...Array(Math.floor(card.rating))].map((star, index) => (
                                                <span key={index} className="star">&#9733;</span>
                                            ))}
                                        </div>
                                        <span>{card.rating}</span>
                                    </div>
                                    <p className="availability">Availability: {card.availability}</p>
                                    <button onClick={handlePay} className="add-to-cart-button">Buy Now</button>

                                    {/* <button onClick={handlePay} className="add-to-cart-button">Add to Cart</button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {cartMessage && <div className="cart-message">{cartMessage}</div>}
        </div>
    );
};

// Export the Birthday component as the default export
export default Birthday;
