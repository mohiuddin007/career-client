import React from 'react';
import Footer from '../../../components/Footer';
import Jobs from '../../../components/Jobs';
import Navbar from '../../../components/Navbar';

const AllJobs = () => {
    return (
        <div>
            <Navbar/>
            <Jobs />
            <Footer/>
        </div>
    );
};

export default AllJobs;