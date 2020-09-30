import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ handleChange}) => (
    <input className="search" type="search" placeholder="Search Robots.." onChange={handleChange} />
)