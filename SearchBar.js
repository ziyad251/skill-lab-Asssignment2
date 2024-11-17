// src/components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value); // Call the onSearch function passed as a prop
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        onSearch(query); // Call the onSearch function with the current query
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Search for cakes..."
                value={query}
                onChange={handleInputChange}
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;