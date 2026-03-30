import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <h2>Contact Us</h2>
                <p>Email: info@example.com</p>
                <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} intlglobalfoods-dot. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;