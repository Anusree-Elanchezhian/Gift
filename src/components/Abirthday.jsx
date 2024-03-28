import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/abirthday.css';
import Asidebar from './Asidebar';

const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '200%',
    opacity: 1,
    zIndex: -1,
};

const Abirthday = () => {
    const [birthdayCardsData, setBirthdayCardsData] = useState([]);
    const [newCard, setNewCard] = useState({ imageUrl: '', title: '', description: '', rating: 0, price: '', availability: '' });
    const [editingCard, setEditingCard] = useState(null);
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    useEffect(() => {
        fetchBirthdayCards();
    }, []);

    const fetchBirthdayCards = async () => {
        try {
            const response = await axios.get('http://localhost:8181/api/giftcards');
            setBirthdayCardsData(response.data);
        } catch (error) {
            console.error('Failed to fetch birthday cards:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCard({ ...newCard, [name]: value });
    };

    const handleAddCard = async () => {
        try {
            if (!newCard.imageUrl || !newCard.title || !newCard.description || !newCard.rating || !newCard.price || !newCard.availability) {
                alert('Please fill in all fields.');
                return;
            }
            if (editingCard) {
                await axios.put(`http://localhost:8181/api/giftcards/${editingCard.id}`, newCard);
            } else {
                await axios.post('http://localhost:8181/api/giftcards', newCard);
            }
            setNewCard({ imageUrl: '', title: '', description: '', rating: 0, price: '', availability: '' });
            setEditingCard(null);
            fetchBirthdayCards(); // Refresh the list after adding/editing
        } catch (error) {
            console.error('Error adding/editing card:', error);
        }
    };

    const handleEditCard = (card) => {
        setNewCard(card);
        setEditingCard(card);
    };

    const handleDeleteCard = async (id) => {
        try {
            await axios.delete(`http://localhost:8181/api/giftcards/${id}`);
            fetchBirthdayCards(); // Refresh the list after deleting
        } catch (error) {
            console.error('Error deleting card:', error);
        }
    };

    return (
        <div className="homea">
            <div className="sidebar-contenta">
                <Asidebar />
                <div className="bday-maina">
                    <div style={backgroundStyle}>
                        <div className="birthday-card-rowa" style={{ marginTop: '300px' }}>
                            {birthdayCardsData.map((card, index) => (
                                <div key={index} className="birthday-card">
                                    <img src={card.imageUrl} alt={card.title} className="birthday-card-imagea" />
                                    <h3 className="birthday-card-titlea">{card.title}</h3>
                                    <p className="birthday-card-descriptiona">{card.description}</p>
                                    <p className="birthday-card-pricea">Price: {card.price}</p>
                                    <p className="birthday-card-ratinga">Rating: {card.rating}</p>
                                    <p className="birthday-card-availabilitya">Availability: {card.availability}</p>
                                    <button onClick={() => handleEditCard(card)} className="edit-button">Edit</button>
                                    <button onClick={() => handleDeleteCard(card.id)} className="delete-button">Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="admin-form" style={{ marginTop: '100px' }}>
                        <h2>{editingCard ? "Edit Card" : "Add New Gift Card"}</h2>
                        <input
                            type="text"
                            placeholder="Image URL"
                            name="imageUrl"
                            value={newCard.imageUrl}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={newCard.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            name="description"
                            value={newCard.description}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="Rating"
                            name="rating"
                            value={newCard.rating}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Price"
                            name="price"
                            value={newCard.price}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Availability"
                            name="availability"
                            value={newCard.availability}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleAddCard}>{editingCard ? "Save Changes" : "Add Card"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abirthday;
