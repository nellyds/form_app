import React from 'react';
import "../styles/intro.css"
import ScrollAnimation from "react-animate-on-scroll";
function Intro(){
    return(
        <ScrollAnimation animateIn="fadeInDown">
        <div class="intro">
                
                <div class="introContainer">
                    <div class="introHeadline">
                        <p>Welcome!</p>
                    </div>
                    <div class="introDetails">
        <p> You know the drill </p>
        <ul>
            <li>
                <span class="bullet"> - </span>
                Fill in the forms
            </li>
            <li>
            <span class="bullet"> - </span>
            Select an item
            </li>
            <li>
            <span class="bullet"> - </span>
            Double check your input
            </li>
            <li>
            <span class="bullet"> - </span>
            Send it to us!
            </li>
        </ul>
                    </div>
                </div>
        </div>
        </ScrollAnimation>
    )
}

export default Intro;