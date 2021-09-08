import React from 'react';
import Header from '../../components/header/header';
import HomeComponent from "../../components/homecomponent/homepage.component.jsx";
import "./homepage.scss";

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <HomeComponent />
            
        </div>
    )
}

export default HomePage;
