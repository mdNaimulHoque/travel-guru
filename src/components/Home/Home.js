import React from 'react';
import HomeDetail from '../HomeDetail/HomeDetail';
import Header from './Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <HomeDetail></HomeDetail>
        </div> 
    );
};

export default Home;