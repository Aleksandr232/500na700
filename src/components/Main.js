import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Faq from "./Faq";


const Main=()=>{
    return(
        <div className="desktop">
            <div className="div">
                    <Header/>
                    <Slider/>
                    <Faq/>
            </div>
        </div>
    );
}

export default Main;