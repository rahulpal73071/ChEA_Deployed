// import React from "react";
import Card from "../Card";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import NavButton from "../NavButton";
import "aos/dist/aos.css";
import AOS from "aos";

import AryanD from '../../assets/images/contact24/AryanD.webp'
import AryanR from '../../assets/images/contact24/AryanR.webp'
import Druv from '../../assets/images/contact24/Druv.webp'
import Khyati from '../../assets/images/contact24/Khyati.webp'
import Laksham from '../../assets/images/contact24/Laksham.webp'
import Mitanshi from '../../assets/images/contact24/Mitanshi.webp'
import Pragathi from '../../assets/images/contact24/Pragathi.webp'
import Rishav from '../../assets/images/contact24/Rishav.webp'
import Ritesh from '../../assets/images/contact24/Ritesh.webp'
import Sarthak from '../../assets/images/contact24/Sarthak.webp'
import Sinha from '../../assets/images/contact24/Sinha.webp'


const orbitCircles = [1000, 800, 600];
const plusSigns = [8, 70, 85, 100, 150];

const orbitBalls = [
  { top: "15%", left: "10%", size: "w-5 h-5", color: "bg-orange-400" },
  { top: "35%", left: "80%", size: "w-3 h-3", color: "bg-green-400" },
  { top: "65%", left: "15%", size: "w-2.5 h-2.5", color: "bg-purple-400" },
  { top: "75%", left: "90%", size: "w-3 h-3", color: "bg-teal-400" },
];

const bigBalls = [
  { top: "10%", left: "30%", size: "w-5 h-5", color: "bg-yellow-400" },
  { top: "50%", left: "75%", size: "w-6 h-6", color: "bg-pink-500" },
  { top: "85%", left: "20%", size: "w-4 h-4", color: "bg-blue-400" },
];

const data = [
  {
    "name": "Rishabh Agrawal",
    "image": Rishav,
    "position": "Department General Secretary",
    "phone": "9983295518",
    "email": "dgsec@che.iitb.ac.in",
    "facebook": "https://www.facebook.com/rishabh.agrawal.3194524/",
    "instagram": "https://www.instagram.com/rsbh2199/",
    "linkedin": "https://www.linkedin.com/in/rishabh-agrawal-0a98a3157/"
  },
  {
    "name": "Aryan Dangayach",
    "image": AryanD,
    "position": "Joint Secretary Academic Affairs",
    "phone": "9694126924,6377104366",
    "email": "aryankhandelwal418@gmail.com",
    "facebook": "https://m.facebook.com/aryan.dangayach.3",
    "instagram": "https://www.instagram.com/_the_celestial/",
    "linkedin": "https://www.linkedin.com/in/aryan-dangayach-99aa47187/"
  },
  {
    "name": "Sarthak Tripathi",
    "image": Sarthak,
    "position": "Joint Secretary Events",
    "phone": "8824799892",
    "email": "sarthaktripathi5june@gmail.com",
    "facebook": "https://www.facebook.com/sarthak.tripathi.16144",
    "instagram": "https://www.instagram.com/__sarthaktripathi__/",
    "linkedin": "https://www.linkedin.com/in/sarthak-tripathi-0400aa187/"
  },
  {
    "name": "Mitanshi Mehra",
    "image": Mitanshi,
    "position": "Social Secretary",
    "phone": "8824799892",
    "email": "mehramitanshi26@gmail.com",
    "facebook": "https://www.facebook.com/mitanshi.mehra.9",
    "instagram": "https://www.instagram.com/mehra_mitanshi26/",
    "linkedin": "https://www.linkedin.com/in/mitanshi-mehra-20010626/"
  },
  {
    "name": "Ritesh Meena",
    "image": Rishav,
    "position": "Sports Secretary",
    "phone": "8692023459",
    "email": "riteshmeena2211@gmail.com",
    "facebook": "https://m.facebook.com/ritesh.meena.7121",
    "instagram": "https://www.instagram.com/ritzmeena/"
  },
  {
    "name": "Khyati Jain",
    "image": Khyati,
    "position": "Alumni Secretary",
    "phone": "9465500286",
    "email": "khyati.jain1105@gmail.com",
    "facebook": "https://www.facebook.com/khyati.jain.71653/",
    "instagram": "https://www.instagram.com/khyati.1105/",
    "linkedin": "https://www.linkedin.com/in/khyati-jain-9438241a0/"
  },
  {
    "name": "Dhruv Patwa",
    "image": Druv,
    "position": "Editor",
    "phone": "8890789269",
    "email": "patwadhruv@gmail.com",
    "facebook": "https://www.facebook.com/dhruv.patwa.5",
    "instagram": "https://www.instagram.com/patwa.dhruv/",
    "linkedin": "https://www.linkedin.com/in/dhruv-patwa-69b5b5149/"
  },
  {
    "name": "Laxman Desai",
    "image": Laksham,
    "position": "Design Secretary",
    "phone": "8208078914",
    "email": "desai.laxman2001@gmail.com"
  },
  {
    "name": "Shambhavi Sinha",
    "image": Sinha,
    "position": "Web Secretary",
    "phone": "7043754962",
    "email": "190020103@iitb.ac.in"
  },
  {
    "name": "Aryan Raj Himanshu",
    "image": AryanR,
    "position": "S1 Class Representative",
    "phone": "7777023377",
    "facebook": "https://m.facebook.com/people/Aryan-Raj-Himanshu/100039404290875",
    "linkedin": "https://www.linkedin.com/in/aryan-raj-himanshu-5a6a4918b/"
  },
  {
    "name": "Pragathi Anand",
    "image": Pragathi,
    "position": "S2 Class Representative",
    "phone": "6204544899",
    "email": "190020084@iitb.ac.in",
    "facebook": "https://www.facebook.com/pragati.anand.942"
  }
]



export default function Contact20() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  console.log("hello");
  
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const getTransform = (mult = 0.01) => ({
    x: useTransform(mouseX, (x) => (x - window.innerWidth * 2) * mult),
    y: useTransform(mouseY, (y) => (y - window.innerHeight * 2) * mult),
  });

  const renderOrbitCircles = () =>
    orbitCircles.map((size, i) => (
      <div
        key={i}
        className="absolute rounded-full border-4 border-purple-500/40 opacity-20"
        style={{ width: size, height: size }}
      />
    ));

  const renderPlusLines = (side) => (
    <div
      className={`absolute ${side}-6 top-0 bottom-0 flex flex-col justify-around z-0`}
    >
      {plusSigns.map((top, i) => (
        <div
          key={i}
          className="text-purple-300 opacity-50 text-3xl font-bold"
          style={{ marginTop: `${i === 0 ? top : top - plusSigns[i - 1]}vh` }}
        >
          +
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div onMouseMove={handleMouseMove} className="overflow-hidden">
        <div className="relative bg-gradient-to-b from-black to-purple-950 text-white">
          {/* Hero Section */}
          <section className="min-h-screen lg:flex-row items-center justify-between px-6 lg:px-16 py-20 relative z-10">
            {/* Orbit Circles */}
            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
              {renderOrbitCircles()}
            </div>

            {/* Vertical Lines with Plus */}
            {renderPlusLines("left")}
            {renderPlusLines("right")}

            {/* Orbit Balls */}
            {orbitBalls.map((ball, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${ball.size} ${ball.color}`}
                style={{
                  top: ball.top,
                  left: ball.left,
                  ...getTransform(0.02),
                }}
              />
            ))}
            <h1 className="text-center font-black text-4xl mt-4 mb-4" data-aos='fade-left'>UG <span className="text-purple-600">Council</span></h1>
            {/* NavButton content */}

            <div className="w-full px-[10%] py-4">
              <div className="flex flex-wrap justify-center gap-4">
                <NavButton to="/contact">2025-26</NavButton>
                <NavButton to="/contact/24">2024-25</NavButton>
                <NavButton to="/contact/23">2023-24</NavButton>
                <NavButton to="/contact/22">2022-23</NavButton>
                <NavButton to="/contact/21">2021-22</NavButton>
                <NavButton to="/contact/20">2020-21</NavButton>
                
              </div>
            </div>

            {/* Hero Content */}

            <div className="flex flex-wrap gap-6 justify-center p-6" data-aos='fade-in'>
              {data.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
            {/* Image */}
          </section>

          {/* Horizontal Divider */}

          {/* Video & Description Section */}
          <section className="relative py-20 px-6 lg:px-20">
            {/* Orbit Circles */}
            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
              {renderOrbitCircles()}
            </div>

            {/* Orbit Balls */}
            {bigBalls.map((ball, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${ball.size} ${ball.color} opacity-70`}
                style={{
                  top: ball.top,
                  left: ball.left,
                  ...getTransform(0.04),
                }}
              />
            )
            
          )}
          {/* <h1 className="text-center text-4xl font-bold mb-5" data-aos='fade-right'>PG <span className="text-orange-400">Council</span></h1>
          <div className="flex flex-wrap gap-6 justify-center p-6">
              {pgData.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div> */}
          </section>
        </div>
      </div>
    </>
  );
}
