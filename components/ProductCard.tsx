import React from 'react';
import './ProductCard.css'; // Assuming you have some CSS styles for the card

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <button className="enquiry-button">Enquire Now</button>
        </div>
    );
};

export default ProductCard;
