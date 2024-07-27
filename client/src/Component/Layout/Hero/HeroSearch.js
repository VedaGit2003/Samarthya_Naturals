import React from 'react';
import './HeroSearch.css'; // Create this file for specific styles

const HeroSearch = () => {
  return (
    <div className="hero__search">
      <div className="hero__search__form">
        <form action="#">
          <div className="hero__search__categories">
            All Categories
            <span className="arrow_carrot-down"></span>
          </div>
          <input type="text" placeholder="What do you need?" />
          <button type="submit" className="site-btn">SEARCH</button>
        </form>
      </div>

    </div>
  );
};

export default HeroSearch;
