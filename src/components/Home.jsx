import Navbar from "./Navbar";
import '../assets/css/home.css';
import Footer from "./Footer"; 
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
function Home() {
  const token=Cookies.get('token');
  console.log('Token:' ,token);
  return (
    <div className="home" >
      <div style={{position:'fixed', width:'100%'}}>
            <Navbar />
            </div>
      <div className="sidebar-content">
        <div className="cardSection">
        <div className="card">
            <div className="card-body">

<p className="desc">Wrop & Wow is your ultimate destination for finding the perfect gifts for every occasion. Whether it's a birthday, anniversary, wedding, or any special moment, Wrop & Wow offers a diverse selection of gifts to cater to every preference and budget. From luxurious presents to heartfelt gestures, Wrop & Wow guarantees a seamless and unforgettable gifting experience.</p>
            </div>
          </div>
          <div className="sec">
          <div className="sectionh-container">
          <div className="sectionh">
                <Link to="/birthday" >
                <img src='https://res.cloudinary.com/ddlw9iej1/image/upload/v1709363632/offer_qf7efx.png' alt="Reviews" className="fet"/>
                <h2 style={{marginLeft:'-20%'}}>Offers</h2>
                <p style={{marginLeft:'-15%'}}>Here you can find reviews from our customers.</p>
              </Link>
                </div>
                <div className="sectionh">
                <Link to="/review" >
                <img src='https://res.cloudinary.com/ddlw9iej1/image/upload/v1709363416/review_x2xwg6.jpg' alt="Reviews" className="fet"/>
                <h2 style={{marginLeft:'-30%'}}>Reviews</h2>
                <p style={{marginLeft:'-15%'}}>Here you can find reviews from our customers.</p>
              </Link>
                </div>
                <div className="sectionh">
                <Link to="/contact" >
                <img src='https://res.cloudinary.com/ddlw9iej1/image/upload/v1709363606/contact_t38dlc.png' alt="Reviews" className="fet"/>
                <h2 style={{marginLeft:'-30%'}}>Contact</h2>
                <p style={{marginLeft:'-15%'}}>Here you can find reviews from our customers.</p>
              </Link>
                </div>
            </div>
          </div>
          <div className="fot">
          <Footer/>
          </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
