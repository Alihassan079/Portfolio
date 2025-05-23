﻿import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See My Resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>

          {/* <div className="greeting-image-div ">
        <img alt="Ali sitting on table" src={require("../../assets/images/manOnTable.svg")}></img>
          </div> */}

          <div className="greeting-image-div">
            <div className="img-box ">
              {/* <img alt="bg img" src={require("../../assets/images/pattern.png")} className="back-img"></img> */}
              <img alt="Ali sitting on table" src={require("../../assets/images/ali3.png")} className="main-img"></img>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
