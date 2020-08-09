import React from 'react';
import Homeheader from './Homeheader/Homeheader';
import Homecontent from './Homecontent/Homecontent';
import Footer from '../Footer/Footer';

const Home = () => {
    console.log('inside home');

    return(
        
        <div className="outerContainer">
        <div className="container">
            <Homecontent />
            <Footer/>
        </div>
      </div>
    );
    
}


export default Home;
