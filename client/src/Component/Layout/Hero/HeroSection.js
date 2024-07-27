import React from 'react';
import HeroCategories from './HeroCategories';
import HeroSearch from './HeroSearch';
import './HeroSection.css';
import { FaPhoneAlt } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section className="hero hero-normal">
            <div className="container">
                <div className="row her" style={{ width: '100%',flexWrap:'wrap'}}>
                    <div className="col-md-3" id='cat'>
                        <HeroCategories />
                    </div>
                    <div className="col-md-6">
                        <HeroSearch />
                    </div>
                    <div className="col-md-3 ">
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <FaPhoneAlt/>
                            </div>

                        </div>
                        <div className="hero__search__phone__text">
                            <h5>+65 11.188.888</h5>
                            <span>support 24/7 time</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;

