import React from 'react';
import './Footer.css';
import fbicon from '../../Icons/fb.png';
import twittericon from '../../Icons/twitter.png';
import githubicon from '../../Icons/github.png';



const footer = () => (
    <div className="footercontainer">
     <div className="footerrow">
        <p className="footertext">Copyright © 2020 All rights reserved   |  </p>
        <div className="footericons">
            <img src={fbicon} className="iconimg" />
            <img src={twittericon} className="iconimg" />
            <img src={githubicon} className="iconimg" />

        </div>
        
     </div>
    </div>
)
export default footer;
