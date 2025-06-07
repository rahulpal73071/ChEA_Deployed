// import React from "react";
import Card from "../Card";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import NavButton from "../NavButton";
import "aos/dist/aos.css";
import AOS from "aos";
import c211 from '../../assets/images/contact21/c211.webp';
import c212 from '../../assets/images/contact21/c212.webp';
import c213 from '../../assets/images/contact21/c213.webp';
import c215 from '../../assets/images/contact21/c215.webp';
import c216 from '../../assets/images/contact21/c216.webp';
import c217 from '../../assets/images/contact21/c217.webp';
import c218 from '../../assets/images/contact21/c218.webp';
import c219 from '../../assets/images/contact21/c219.webp';
import c2110 from '../../assets/images/contact21/c2110.webp';
import c2111 from '../../assets/images/contact21/c2111.webp';
import c2112 from '../../assets/images/contact21/c2112.webp';
import nikunj from '../../assets/images/contact21/nikunj.jpg';

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
    "name": "Aryan Dangayach",
    "image": c211,
    "position": "Department General Secretary",
    "phone": "9694126924, 6377104366",
    "email": "dgsec@che.iitb.ac.in",
    "facebook": "https://m.facebook.com/aryan.dangayach.3",
    "instagram": "https://www.instagram.com/_the_celestial/",
    "linkedin": "https://www.linkedin.com/in/aryan-dangayach-99aa47187/"
  },
  {
    "name": "Khyati Jain",
    "image": c212,
    "position": "Joint Secretary Academic Affairs",
    "phone": "9465500286",
    "email": "khyati.jain1105@gmail.com",
    "facebook": "https://www.facebook.com/khyati.jain.71653/",
    "instagram": "https://www.instagram.com/khyati.1105/",
    "linkedin": "https://www.linkedin.com/in/khyati-jain-9438241a0/"
  },
  {
    "name": "Mitanshi Mehra",
    "image": c213,
    "position": "Joint Secretary Events",
    "phone": "8824799892",
    "email": "mehramitanshi26@gmail.com",
    "facebook": "https://www.facebook.com/mitanshi.mehra.9",
    "instagram": "https://www.instagram.com/mehra_mitanshi26/",
    "linkedin": "https://www.linkedin.com/in/mitanshi-mehra-20010626/"
  },
  {
    "name": "Nikunj Shah",
    "image": nikunj,
    "position": "Social Secretary",
    "phone": "8668932327",
    "email": "nshah8678@gmail.com",
    "facebook": "https://www.facebook.com/people/Nikunj-Shah/pfbid02gxZrcFV6Xopnj8mdJVUqffbaR2Fk23fbF76yaqhbcRnRWrZDb2tZ8iS6r79KmhsNl/",
    "instagram": "https://www.instagram.com/_.nikunj_.shah__/",
    "linkedin": "https://www.linkedin.com/in/nikunj-shah-13a002204/"
  },
  {
    "name": "Vinit Nikam",
    "image": c215,
    "position": "Sports Secretary",
    "phone": "7744052977",
    "email": "vinitnikam10@gmail.com",
    "facebook": "https://www.facebook.com/vinitnikam2211",
    "instagram": "https://www.instagram.com/vinitnikam10/",
    "linkedin": "https://www.linkedin.com/in/vinit-nikam-9b2861203/"
  },
  {
    "name": "Tanirika Roy",
    "image": c216,
    "position": "Alumni Secretary",
    "phone": "9890015831",
    "email": "tanry2013@gmail.com",
    "facebook": "https://www.facebook.com/tanirika.roy.3",
    "instagram": "https://www.instagram.com/roy_tan._/",
    "linkedin": "https://www.linkedin.com/in/tanirika-roy-5774801b8/"
  },
  {
    "name": "Parth Dani",
    "image": c217,
    "position": "Editor",
    "phone": "9323294005",
    "email": "200020090@iitb.ac.in",
    "facebook": "https://www.facebook.com/people/Parth-Dani/pfbid02USeX77m9fFhbGSFcvRXco8kFFZoJfizNLXGGss8ukPFeeNoLP6Tp2hVA4iSik2fal/",
    "instagram": "https://www.instagram.com/parth_dani_/",
    "linkedin": "https://www.linkedin.com/in/parth-dani-538542201"
  },
  {
    "name": "Divij Goyal",
    "image": c218,
    "position": "Design Secretary",
    "phone": "8527406687, 8368073120",
    "email": "goyaldivij06@gmail.com",
    "facebook": "https://www.facebook.com/divij.goyal.92",
    "instagram": "https://www.instagram.com/divijgoyal.06/",
    "linkedin": "https://www.linkedin.com/in/goyaldivij/"
  },
  {
    "name": "Shashank Ajmera",
    "image": c219,
    "position": "Web Secretary",
    "phone": "8275128511, 8626086275",
    "email": "shashanksajmera@gmailcom",
    "facebook": "https://www.facebook.com/shashank.ajmera.9",
    "instagram": "https://www.instagram.com/0520shashank/",
    "linkedin": "https://www.linkedin.com/in/shashank-ajmera/"
  },
  {
    "name": "Om Mihani",
    "image": c2110,
    "position": "S1 Class Representative",
    "phone": "7887777797",
    "email": "200020085@iitb.ac.in",
    "facebook": "https://www.facebook.com/om.mihani.18/",
    "instagram": "https://www.instagram.com/om_mihani/",
    "linkedin": "https://www.linkedin.com/in/om-mihani/"
  },
  {
    "name": "Tanmay Lodha",
    "image": c2111,
    "position": "S2 Class Representative",
    "phone": "7739145470",
    "email": "tanmay.lodha2002@gmail.com",
    "facebook": "https://www.facebook.com/tanmay.lodha.50/",
    "instagram": "https://www.instagram.com/_tanmay_lodha/",
    "linkedin": "https://www.linkedin.com/in/tanmay-lodha-428542213/"
  },
  
]

const pgData = [
  {
    "name": "Janak Patel",
    "image": c2112,
    "position": "M. Tech Representative",
    "phone": "8511435454",
    "email": "janakpatel472@gmail.com",
    "instagram": "https://www.instagram.com/janak_2810/",
    "linkedin": "https://www.linkedin.com/in/janak-patel-19a932182/"
  }
]

export default function Contact21() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
          <h1 className="text-center text-4xl font-bold mb-5" data-aos='fade-right'>PG <span className="text-orange-400">Council</span></h1>
          <div className="flex flex-wrap gap-6 justify-center p-6">
              {pgData.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
