import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Faq from "./Faq";
import News from "./News";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import FaqMob from "./FaqMob";


const Main=()=>{
    return(
        <div className="desktop">
            <div className="div">
                    <Header/>
                    <Slider/>
                    <Faq/>
                    <FaqMob/>
                    <News/>
                    <Subscribe/>
                    <Footer/>
            </div>
        </div>
    );
}

export default Main;