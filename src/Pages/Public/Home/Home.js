import React from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Jobs from '../../../components/Jobs';
import Navbar from '../../../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header />
            <Jobs/>
            <Footer/>
        </div>
    );
};

export default Home;