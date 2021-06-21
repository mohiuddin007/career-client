import React from 'react';

const Footer = () => {
    var currentYear= new Date().getFullYear();
    return (
        <div>
            <hr />
            <p className="text-muted text-center mt-4" >Copyright © {currentYear}, Career, Inc. "Career" and logo are registered trademarks of Career, Inc</p>
        </div>
    );
};

export default Footer;