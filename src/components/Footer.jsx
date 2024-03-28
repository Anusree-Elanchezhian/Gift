import '../assets/css/footer.css';

const Footer = () => {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3 id="fcompany">Wrap & WoW</h3>
                <p className="footer-links">
                    The best place to find personalized gifts
                </p>
                <p className="footer-company-name">Wrap & WoW © 2024</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>123, ABC Street</span> Kuniamuthur, Coimbatore</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91 9876543212</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@wrapandwow.com">support@wrapandwow.com</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    <br></br>
                    Empower Your Gifting Experience: Create, Customize, Celebrate - Your Perfect Gift Awaits!
                </p>
            </div>
        </footer>
    );
}

export default Footer;
