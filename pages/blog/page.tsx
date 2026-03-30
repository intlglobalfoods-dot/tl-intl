import React from 'react';
import ArticleCard from '../components/ArticleCard'; // Assuming you have this component.
import './BlogListing.css'; // Import your styles here

const blogPosts = [
    {
        title: 'First Article',
        description: 'This is the description of the first article.',
        imageUrl: 'path/to/image1.jpg',
        date: '2026-03-30',
    },
    {
        title: 'Second Article',
        description: 'This is the description of the second article.',
        imageUrl: 'path/to/image2.jpg',
        date: '2026-03-29',
    },
    // Add more articles as needed
];

const BlogListing = () => {
    return (
        <div className="blog-listing">
            <h1>Blog</h1>
            <div className="filters">
                <button>All</button>
                <button>Category 1</button>
                <button>Category 2</button>
                {/* Add more filter buttons as necessary */}
            </div>
            <div className="article-cards">
                {blogPosts.map((post, index) => (
                    <ArticleCard key={index} post={post} />
                ))}
            </div>
        </div>
    );
};

export default BlogListing;