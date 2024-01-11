import React from 'react';
import Hero from '../component/Hero';
import Partner from '../component/partner';
import AboutUs from '../component/AboutUs';
import CompanyOverviews from '../component/CompanyOverviews';
import Footer from '../component/Footer';
import Service from '../component/Service';
import OurTrademarks from '../component/OurTrademarks';
import Achievement from '../component/Achievement';

const Home = () => {
    return (
        <div>
            <Hero />
            <Partner />
            <AboutUs />
            <CompanyOverviews />
            <Service />
            <OurTrademarks />
            <Achievement />
            <Footer />
        </div>
    );
};

export default Home;