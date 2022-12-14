import "./Navigation.css";
import { Layout, Menu } from "antd";
import React from "react";
import { HomeTwoTone, EditTwoTone } from "@ant-design/icons";
const { Sider } = Layout;
import Logo from "../assets/Logo";
import { NavLink } from "react-router-dom";

const NavHomeLogo = () => {
  return (
    <svg
      width="35px"
      height="60px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="#4476BD"
    >
      <g>
        <g>
          <path
            d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064
     c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57
     c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52
     s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053
     c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89
     c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024
     c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847
     C455.549,238.499,449.593,232.543,442.246,232.543z"
          />
        </g>
      </g>
    </svg>
  );
};

const NavCreateLogo = () => {
  return (
    <svg
      width="45px"
      height="60px"
      fill="#4476BD"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 68 67"
    >
      <g>
        <path d="M49.28,27.25a1.5,1.5,0,0,0-1.5,1.5V46a1.32,1.32,0,0,1-1.32,1.32H18A1.32,1.32,0,0,1,16.69,46V17.54A1.32,1.32,0,0,1,18,16.22H35.24a1.5,1.5,0,0,0,0-3H18a4.33,4.33,0,0,0-4.32,4.32V46A4.33,4.33,0,0,0,18,50.31H46.46A4.33,4.33,0,0,0,50.78,46V28.75A1.5,1.5,0,0,0,49.28,27.25Z" />
        <path d="M51.68,12.32a6.23,6.23,0,0,0-8.79,0L31.56,23.65a1.49,1.49,0,0,0-.36.59l-3.31,10a1.5,1.5,0,0,0,1.89,1.89l10-3.31a1.49,1.49,0,0,0,.59-.36L51.68,21.11A6.23,6.23,0,0,0,51.68,12.32ZM38.48,30.07l-6.81,2.26,2.26-6.81,8.16-8.15,4.54,4.54ZM49.56,19l-.81.8-4.54-4.54.8-.81A3.22,3.22,0,0,1,49.56,19Z" />
      </g>
    </svg>
  );
};

const Navigation = () => (
  <div
    className=""
    style={{
      // marginTop:'60px',
      backgroundColor: "#C9E2FF",
      height: "100%",
    }}
  >
    <nav className="Navbar">
      <div className="logo">
        <Logo />
      </div>
      <NavLink to="/Events/DisplayEvents">
        <div className="logo">
          <NavHomeLogo />
        </div>
      </NavLink>
      <NavLink to="/Events/Form">
        <div className="logo">
          <NavCreateLogo />
        </div>
      </NavLink>
    </nav>
  </div>
);

export default Navigation;
