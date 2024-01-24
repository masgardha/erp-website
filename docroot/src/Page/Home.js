import React from "react";
import Pricing from '../Components/Pricing';
import About from '../Components/About';
import Header from "../Components/Header";
import Contact from "../Components/Contact";
import chart from "../chart.svg";

function Home() {
    return (
        <div className="Home">
           <div className="container">
            <div className='section-hero'>
                <div className='bubble'></div>
                <Header />

                <div>
                <p className='sub-title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                <p className='title'>"Excepteur sint occaecat cupidatat non proident"</p>

                <img src={chart} className='image-chart'/>
                </div>
                </div>
                <About />
                <Pricing />
                <Contact />
            </div>
        </div>
    )
}

export default Home;
