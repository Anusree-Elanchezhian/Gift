import  { useState } from 'react';
import Navbar from './Navbar';
import '../assets/css/birthday.css';

const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '200%',
    // background: url(${logbgg}) center/cover no-repeat,
    opacity: 1,
    zIndex: -1,
};

const Customized = () => {
    const birthdayCardsData = [
        {
            imageUrl: 'https://res.cloudinary.com/ddlw9iej1/image/upload/v1708748635/pic2_f0mepw.jpg',
            title: 'Happiest Birthday Cupcake Mug',
            description: 'Rs.399.00',
            rating: 4.5,
            availability: 'In stock',
        },
        {
            imageUrl: 'https://res.cloudinary.com/ddlw9iej1/image/upload/v1708748636/pic1_p2cf9z.jpg',
            title: 'Personalised Choco Bar for Birthday',
            description: 'Rs.475.00',
            rating: 4.2,
            availability: 'In stock',
        },
        {
          imageUrl: 'https://res.cloudinary.com/ddlw9iej1/image/upload/v1708748635/pic2_f0mepw.jpg',
          title: 'Happiest Birthday Cupcake Mug',
          description: 'Rs.399.00',
          rating: 4.5,
          availability: 'In stock',
      },
      {
        imageUrl: 'https://res.cloudinary.com/ddlw9iej1/image/upload/v1708748635/pic2_f0mepw.jpg',
        title: 'Happiest Birthday Cupcake Mug',
        description: 'Rs.399.00',
        rating: 4.5,
        availability: 'In stock',
    },
    {
      imageUrl: 'https://res.cloudinary.com/ddlw9iej1/image/upload/v1708748635/pic2_f0mepw.jpg',
      title: 'Happiest Birthday Cupcake Mug',
      description: 'Rs.399.00',
      rating: 4.5,
      availability: 'In stock',
  },
  {
    imageUrl: 'https://res.cloudinary.com/ddlw9iej1/image/upload/v1708748635/pic2_f0mepw.jpg',
    title: 'Happiest Birthday Cupcake Mug',
    description: 'Rs.399.00',
    rating: 4.5,
    availability: 'In stock',
},
        // Add more product data here
    ];

    const [filteredCards, setFilteredCards] = useState(birthdayCardsData);
    const [filterOptions, setFilterOptions] = useState({ rating: null, price: null, availability: null });
    const [cartMessage, setCartMessage] = useState('');

    const applyFilters = () => {
        let filtered = [...birthdayCardsData];

        if (filterOptions.rating) {
            filtered = filtered.filter(card => card.rating >= filterOptions.rating);
        }
        if (filterOptions.price) {
            const [minPrice, maxPrice] = filterOptions.price.split('-').map(parseFloat);
            filtered = filtered.filter(card => {
                const cardPrice = parseFloat(card.description.replace('Rs.', ''));
                return cardPrice >= minPrice && cardPrice <= maxPrice;
            });
        }
        if (filterOptions.availability) {
            filtered = filtered.filter(card => card.availability === filterOptions.availability);
        }

        setFilteredCards(filtered);
    };

    const resetFilters = () => {
        setFilteredCards(birthdayCardsData);
        setFilterOptions({ rating: null, price: null, availability: null });
    };

    const addToCart = (title) => {
        // Implement your add to cart logic here
        setCartMessage(`Added ${title} to cart`);
        setTimeout(() => {
            setCartMessage('');
        }, 3000); // Hides the message after 3 seconds
    };

    const ratingOptions = Array.from({ length: 5 }, (_, index) => index + 1);
    const priceOptions = [
        '0-100',
        '100-200',
        '200-300',
        '300-400',
        '400-500',
        // Add more price ranges as needed
    ];

    return (
        <div className="home">
          <div style={{position:'fixed', width:'100%'}}>
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
                            <option value="In stock">In stock</option>
                            <option value="Out of stock">Out of stock</option>
                        </select>
                    </div>
                    <button onClick={applyFilters}>Apply Filters</button>
                    <button onClick={resetFilters}>Reset Filters</button>
                </div>
                <div className='bday-main'>
                    <div style={backgroundStyle}>
                        <div className='birthday-card-row'>
                            {filteredCards.map((card, index) => (
                                <div key={index} className='birthday-card'>
                                    <img src={card.imageUrl} alt={card.title} className='birthday-card-image' />
                                    <div className="product-details">
                                        <h3 className='birthday-card-title'>{card.title}</h3>
                                        <p className='birthday-card-description'>{card.description}</p>
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
                                        <button onClick={() => addToCart(card.title)} className="add-to-cart-button">Add to Cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {cartMessage && <div className="cart-message">{cartMessage}</div>}
        </div>
    );
};

export default Customized;
