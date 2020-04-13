import React from 'react';
import './about.css'
import PieChart from "../d3/pieChart";
import Footer from "../Footer/footer";

const About = () => {

    return (
        <div className="backA">
            <div className={"container"}>
            <div className={"row"}>
                <div className={"col-6"}>
                <div className={"about"}>
                    <h3>About us</h3>
                    <h5 style={{backgroundColor:'#1e5864', borderRadius:'20px',padding:'8px'}}>
                        On our page you can view some of the most popular exercises
                        which will help you reach and achieve your health and fitness goals,
                        also we provide a page with meals and their calories, some recommended diets
                        by doctors, and also you can shop supplements for your needs. <br/>BE FIT AND HEALTHY!</h5>
                    <h3>Contact</h3>
                    <a style={{color:'white',backgroundColor:'#1e5864', borderRadius:'20px', padding:'8px'}}
                       href={"#"}>ljubicaboneva@gmail.com</a>
                </div>
            </div>
            <div className={"col-6"}>
                <br/>
                <div className="message1">
                    <h3 style={{color:'white'}}>How often do you exercise?</h3>
                    <PieChart/>
                </div>
            </div>
            </div>
        </div>
            <span className={"fixed-bottom"}> <Footer/> </span>
        </div>

)
};

export default About;