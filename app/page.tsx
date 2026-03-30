import React from 'react';
import './App.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="hero-section">
                <h1>Welcome to TL-INTL</h1>
                <p>Your trusted supplement brand for a healthier life.</p>
                <a className="cta-button" href="#featured-products">Shop Now</a>
            </header>

            <section id="featured-products" className="featured-products">
                <h2>Featured Products</h2>
                {/* Example Product Cards */}
                <div className="product-card">
                    <h3>Product 1</h3>
                    <p>Brief description of Product 1.</p>
                    <span className="price">$19.99</span>
                    <button>Add to Cart</button>
                </div>
                <div className="product-card">
                    <h3>Product 2</h3>
                    <p>Brief description of Product 2.</p>
                    <span className="price">$29.99</span>
                    <button>Add to Cart</button>
                </div>
                <div className="product-card">
                    <h3>Product 3</h3>
                    <p>Brief description of Product 3.</p>
                    <span className="price">$39.99</span>
                    <button>Add to Cart</button>
                </div>
            </section>

            <section className="marketing-content">
                <h2>Why Choose TL-INTL?</h2>
                <p>We offer high-quality supplements backed by science. Our products are made from the finest ingredients to ensure your health and wellness.</p>
                <p>Join our community and experience the benefits of our supplements today!</p>
            </section>
        </div>
    );
};

export default HomePage;
