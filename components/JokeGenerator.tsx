import React, { useState, useEffect } from 'react';

const JokeGenerator = () => {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://api.jokes.one/joke');
            const data = await response.json();
            if (data && data.contents && data.contents.jokes) {
                setJoke(data.contents.jokes[0].joke.text);
            } else {
                throw new Error('Joke not found');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div>
            <h1>Random Joke</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <p>{joke}</p>
            <button onClick={fetchJoke}>Fetch New Joke</button>
        </div>
    );
};

export default JokeGenerator;