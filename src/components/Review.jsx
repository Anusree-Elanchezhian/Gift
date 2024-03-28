import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/review.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch previous reviews when the component mounts
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:8181/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  console.log("Token:", token);
  console.log("Headers:", axios.defaults.headers.common);

  const [userReview, setUserReview] = useState({
    name: '',
    rating: '',
    comments: ''
  });

  const handleInputChange = (e) => {
    setUserReview({ ...userReview, [e.target.name]: e.target.value });
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8181/api/reviews', userReview);
      const newReview = response.data;
      setReviews([...reviews, newReview]);
      setUserReview({ name: '', rating: '', comments: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="home">
      <div style={{position:'fixed', width:'100%'}}>
        <Navbar />
      </div>
      <div className="sidebar-contentre">
        <div className="review-container" style={{marginTop:'5%', paddingLeft:'20%'}}>
          <h2>Customer Reviews</h2>
          <div className="previous-reviews">
            <h3>Previous Reviews:</h3>
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <p><strong>{review.name}</strong></p>
                  <p>Rating: {review.rating}</p>
                  <p>{review.comments}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="submit-review">
            <h3>Submit Your Review:</h3>
            <form onSubmit={handleSubmitReview}>
              <input type="text" name="name" placeholder="Your Name" value={userReview.name} onChange={handleInputChange} required />
              <input type="number" name="rating" placeholder="Rating (1-5)" min="1" max="5" value={userReview.rating} onChange={handleInputChange} required />
              <textarea name="comments" placeholder="Your Review" value={userReview.comments} onChange={handleInputChange} required />
              <button type="submit">Submit Review</button>
            </form>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Review;
