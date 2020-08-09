import React from 'react';
import './About.css';
import Menuheader from '../Menuheader/Menuheader';
import Footer from '../Footer/Footer';

import myimg1 from '../../Icons/me7.jpeg';
import fbicon from '../../Icons/fgg.png';
import twittericon from '../../Icons/tgg.png';
import githubicon from '../../Icons/ggg.png';
import linkedinicon from '../../Icons/lgg.png';





const About = () => {
    return(
        <div>
            <Menuheader/>
             <div className="aboutcontainer">
               
             
            <div className="imagecontainer">
               <img src={myimg1} className="aboutmyimg"/>
            </div>
            <div className="textcontainer">
                <h2 className="aboutmetitle">DEVELOPER    |    RESEARCHER  </h2>
                <div className="abtmecontentcontainer">
                    <p classname="aboutmecontent">Hi, I am Resindu Navoda , a developer and a researcher at chase.</p>
                    <p classname="aboutmecontent">I graduated from University of Westminster,UK as BEng(Hons) in software Engineering with Upper Division Second Class.</p>
                    <p classname="aboutmecontent">This project was done as a result of my passion to learn and gain experiences.</p>
                    <p classname="aboutmecontent">Feel free to get in touch with me.I am always open to discuss about new ideas,projects and oppertunities.</p>
                </div>
                
            </div>
            <div className='aboutsocialmedia'>
            <a href="https://www.facebook.com/resindu.navoda?__tn__=%2CdC-R-R&eid=ARBBKb6OqgXFH5Y0sm9rOwLfIAG4UPZ4Rn38zl85UHFWyRDVY03saJJLF2Zgo7Pt6ITvmLd0uA254raF&hc_ref=ARRR_uSG9RcCNGRAMcFdYi5H64cdzfqUAc7m9ZdUeG9r5xgpN0AdhMT5nxl3xw2BVs8&fref=nf">  <img src={fbicon} className="iconimg"/></a>
            <a href="https://twitter.com/Resi58100511">  <img src={twittericon} className="iconimg" /></a>
            <a href="https://github.com/Resindum">  <img src={githubicon} className="iconimg" /></a>
            <a href="https://www.linkedin.com/in/resindu-navoda-a0794014a/"> <img src={linkedinicon} className="iconimg" /></a>


                </div>
        </div>
        <Footer/>


        </div>
       
    )

}
export default About;