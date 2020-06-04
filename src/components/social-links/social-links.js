import React from 'react';

import './social-links.css';

const SocialLinks = () => {

    return(
        <div className="social-links">
            <a href="https://www.instagram.com/bohemian_cakes/" 
                target="_blank" className="social-link">
                    <img src="./pic/inst.png" alt="instagram" width="40px" title="Instagram"/>
            </a>
        </div>
    );
};

export default SocialLinks;