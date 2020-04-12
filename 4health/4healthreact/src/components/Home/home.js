import React from 'react';
import "./home.css"
import {anime} from "react-anime";
import {Link} from "react-router-dom";

const Home = () => {

    anime({
        targets: '.brk-btn',
        translateY: 27,
        value: 1,
        easing: "easeInQuad",
        duration: 1100
    });


    return(
        <div className="back">
            <div className="message">

            <h2 style={{color:'white'}}>OPTIMIZE YOUR HEALTH</h2>

                <h5  id="text" style={{color:'white'}}>CHALLENGE YOURSELF</h5>

               <div className={"brk-btn"} style={{marginLeft:'540px',marginRight:'540px'}}> <Link to={"/about"}  style={{color:'aqua'}}>Find out more</Link>
               </div>
            </div>

        </div>
    )
};

export default Home;