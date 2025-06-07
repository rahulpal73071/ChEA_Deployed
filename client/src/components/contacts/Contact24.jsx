// import React from "react";
import Card from "../Card";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import NavButton from "../NavButton";
import "aos/dist/aos.css";
import AOS from "aos";

import mdsaud from '../../assets/images/contact25/mdsaud.jpg';

import Prehas from '../../assets/images/contact25/Prehas.jpg';
import Abhinav from '../../assets/images/contact2024/Abhinav.jpg';
import Agrim from '../../assets/images/contact2024/Agrim.jpg';
import Amrit from '../../assets/images/contact2024/Amrit.jpeg';
import Anvita from '../../assets/images/contact2024/Anvita.jpg';
import Damodar from '../../assets/images/contact2024/Damodar.jpg';
import Harry from '../../assets/images/contact2024/Harry.jpeg';
import Harsh from '../../assets/images/contact2024/Harsh.jpg';
import Maitri from '../../assets/images/contact2024/Maitri.jpg';
import Minal from '../../assets/images/contact2024/Minal.jpg';
import Pratiksh from '../../assets/images/contact2024/Pratiksh.jpg';

import Shreya from '../../assets/images/contact2024/Shreya.jpg';
import Sneha from '../../assets/images/contact2024/Sneha.jpg';
import Steve from '../../assets/images/contact2024/Steve.jpg';
import Ayush from '../../assets/images/contact2024/Ayush.png';
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
    "name": "Amrit Raj",
    "image": Amrit,
    "position": "Department General Secretary",
    "phone": "7545855055, 8529756127",
    "email": "dgsec@che.iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100091401824609&mibextid=ZbWKwL",
    "instagram": "https://instagram.com/amritraj4440?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/amrit-raj-b2037a228"
  },
  {
    "name": "Steve Austin Samuel",
    "image": Steve,
    "position": "Joint Secretary Events",
    "phone": "9600082807",
    "email": "steveaustinsamuel@gmail.com",
    "facebook": "https://www.facebook.com/steve.austin.samuel?mibextid=ZbWKwL",
    "instagram": "https://instagram.com/mainhoonsteve?igshid=NGExMmI2YTkyZg==",
    "linkedin": "https://www.linkedin.com/in/steve-austin-samuel-a2a8b6155"
  },
  {
    "name": "Pratiksha Kapoor",
    "image": Pratiksh,
    "position": "Joint Secretary Industrial Outreach",
    "phone": "9152929329, 8605661520",
    "email": "pratiksha.kapoor@iitb.ac.in",
    "instagram": "https://www.instagram.com/pratikshakapoor89/",
    "linkedin": "https://www.linkedin.com/in/pratiksha-kapoor-66b384250/"
  },
  {
    "name": "Maitreyee Tengshe",
    "image": Maitri,
    "position": "Joint Secretary Academic Affairs",
    "phone": "7030909443",
    "email": "22b0318@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100089717880314&mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/maitreyee_.38?r=nametag",
    "linkedin": "https://www.linkedin.com/in/maitreyee-tengshe-810812252"
  },
  {
    "name": "Abhinav Kumar",
    "image": Abhinav,
    "position": "Associate Secretary",
    "phone": "6201395251",
    "email": "abhinavkrrr@gmail.com",
    "instagram": "https://www.instagram.com/pablo_chocobar.cpp?igsh=c2FvZHJuaHY2MnZz",
    "linkedin": "https://www.linkedin.com/in/abhinav-kumar-499004280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Shubham Kumar",
    "image": Harry,
    "position": "Associate Secretary",
    "phone": "8541873913",
    "email": "shubhamherry.iitb@gmail.com",
    "instagram": "https://www.instagram.com/shubham_herry/",
    "linkedin": "https://www.linkedin.com/in/shubham-kumar-iitb/"
  },
  {
    "name": "Ayush Tayal",
    "image": Ayush,
    "position": "Social Secretary",
    "phone": "8171548721",
    "email": "tayalayush03@gmail.com",
    "facebook": "https://www.facebook.com/ayush.tayal.9?mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/its_tayalayush?igsh=b3hucTV5Mnpkd2x2",
    "linkedin": "https://www.linkedin.com/in/tayalayush03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Agrim Jain",
    "image": Agrim,
    "position": "Sports Secretary",
    "phone": "9045839776",
    "email": "agrimj2712@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100084896567870",
    "instagram": "https://www.instagram.com/agrimj2712/",
    "linkedin": "https://www.linkedin.com/in/agrim-jain-934226230/"
  },
  {
    "name": "Damodar Pendse",
    "image": Damodar,
    "position": "Alumni Secretary",
    "phone": "7350644940",
    "email": "23b0429@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=61561073463381",
    "instagram": "https://www.instagram.com/damitssme/",
    "linkedin": "https://www.linkedin.com/in/damodar-pendse/"
  },
  {
    "name": "Shreya Pingle",
    "image": Shreya,
    "position": "Editor",
    "phone": "8999965946",
    "email": "aabha1006@gmail.com",
    "instagram": "https://www.instagram.com/shreya_pingle2303?igsh=MW11MzJ6bHZmdzNrdA%3D%3D&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/shreya-pingle-20442124b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "name": "Anvitaa Goel",
    "image": Anvita,
    "position": "Design Secretary",
    "phone": "8860751667",
    "email": "goelanvitaa@gmail.com",
    "instagram": "https://www.instagram.com/anvitaagoel?igsh=ZTByd2Eyb3I1dHl4",
    "linkedin": "http://www.linkedin.com/in/anvitaa-goel-b4817631a"
  },
  {
    "name": "Sneha Shandilya",
    "image": Sneha,
    "position": "Web Secretary",
    "phone": "7665246878",
    "email": "23b0345@iitb.ac.in",
    "instagram": "https://www.instagram.com/snehashandilya09/",
    "linkedin": "https://www.linkedin.com/in/shandilyasneha09/"
  },
  {
    "name": "Harsh Jadhav",
    "image": Harsh,
    "position": "S1 Class Representative",
    "phone": "8369526409",
    "email": "23b0301@iitb.ac.in",
    "instagram": "https://www.instagram.com/hharshh.27?igsh=OXl0eTR6c2hucnR2&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/harsh-jadhav-1qw12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "name": "Minal Bhojasia",
    "image": Minal,
    "position": "S2 Class Representative",
    "phone": "9113801656",
    "email": "23b0404@iitb.ac.in",
    "instagram": "https://www.instagram.com/minal.bhojasia/",
    "linkedin": "https://www.linkedin.com/in/minal-bhojasia-346ba9281/"
  },
  
]

const pgData = [
  {
    "name": "Mohammed Saud Shaikh",
    "image":mdsaud,
    "position": "M. Tech Representative",
    "phone": "9930247998",
    "email": "sauddjhs@gmail.com",
    "linkedin": "https://www.linkedin.com/in/mohammedsaud786/"
  },
  {
    "name": "Prehas Madke",
    "image":Prehas,
    "position": "PhD Representative",
    "phone": "9834706856",
    "email": "23D0125@iitb.ac.in",
    "instagram": "https://www.instagram.com/prehasmadke/",
    "linkedin": "https://www.linkedin.com/in/prehasmadke"
  }

]

export default function Contact24() {
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
