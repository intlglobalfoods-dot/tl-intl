import React from 'react';

const ProductDetail = ({ params }) => {
    const productId = params.id;

    // Fetch product details based on productId
    const product = {
        id: productId,
        name: "Sample Product",
        description: "This is a detailed description of the sample product.",
        price: "$100.00"
    };

    const handleEnquirySubmit = (event) => {
        event.preventDefault();
        const enquiryData = new FormData(event.target);
        console.log('Enquiry submitted', Object.fromEntries(enquiryData));
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>

            <h2>Enquiry Form</h2>
            <form onSubmit={handleEnquirySubmit}>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Submit Enquiry</button>
            </form>
        </div>
    );
};

export default ProductDetail;
