import React from 'react';

const ReviewsSection = () => {
    const testimonials = [
        {
            name: 'Alice Johnson',
            review: 'Excellent products! Great quality and fast delivery.',
            rating: 5,
        },
        {
            name: 'Bob Smith',
            review: 'Very satisfied with my purchase. Will order again!',
            rating: 4,
        },
        {
            name: 'Charlie Brown',
            review: 'Good selection of items but shipping was a bit slow.',
            rating: 3,
        },
    ];

    return (
        <div className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.review}</p>
                        <p>Rating: {'⭐'.repeat(testimonial.rating)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;