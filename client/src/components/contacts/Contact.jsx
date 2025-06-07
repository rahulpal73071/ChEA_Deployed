// import React from "react";
import Card from "../Card";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import NavButton from "../NavButton";
import "aos/dist/aos.css";
import AOS from "aos";
import Agrim from '../../assets/images/contact25/Agrim.jpg';
import Ayush from '../../assets/images/contact25/Ayush.png';
import Rahul from '../../assets/images/contact25/Rahul.png';
import Aabha from '../../assets/images/contact25/Aabha.jpg';
import Divyanshi from '../../assets/images/contact25/Divyanshi.jpg';
import Harry from '../../assets/images/contact25/Harry.jpg';
import mdsaud from '../../assets/images/contact25/mdsaud.jpg';
import Nilay from '../../assets/images/contact25/Nilay.png';
import Prehas from '../../assets/images/contact25/Prehas.jpg';
import Saransh from '../../assets/images/contact25/Saransh.jpg';
import Siya from '../../assets/images/contact25/Siya.jpg';
import Tanmay from '../../assets/images/contact25/tanmay.jpg';

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
    "name": "Aabha Lahurikar",
    "image":Aabha,
    "position": "Department General Secretary",
    "phone": "8767057091",
    "email": "dgsec@che.iitb.ac.in",
    "instagram": "https://www.instagram.com/aabha_lahurikar/?igshid=ZDc4ODBmNjlmNQ%3D%3D",
    "linkedin": "https://www.linkedin.com/in/aabha-lahurikar-498780255/"
  },
  {
    "name": "Shubham Kumar",
    "image":Harry,
    "position": "Joint Secretary, Industrial Outreach",
    "phone": "8541873913",
    "email": "shubhamherry.iitb@gmail.com",
    "facebook": "https://www.facebook.com/gohil.singhal.5",
    "instagram": "https://www.instagram.com/shubham_herry/",
    "linkedin": "https://www.linkedin.com/in/shubham-kumar-iitb/"
  },
  {
    "name": "Ayush Tayal",
    "image":Ayush,
    "position": "Joint Secretary, Academic Affairs",
    "phone": "8171548721",
    "email": "tayalayush03@gmail.com",
    "facebook": "https://www.facebook.com/ayush.tayal.9?mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/its_tayalayush?igsh=b3hucTV5Mnpkd2x2",
    "linkedin": "https://www.linkedin.com/in/tayalayush03"
  },
  {
    "name": "Agrim Jain",
    "image":Agrim,
    "position": "Joint Secretary, Events",
    "phone": "9045839776",
    "email": "agrimj2712@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100084896567870",
    "instagram": "https://www.instagram.com/agrimj2712/",
    "linkedin": "https://www.linkedin.com/in/agrim-jain-934226230/"
  },
  {
    "name": "Rahul Pal",
    "image":Rahul,
    "position": "Technical Secretary",
    "phone": "7307185487",
    "email": "rahulpal.per@gmail.com",
    "instagram": "https://www.instagram.com/raahull_pal?igsh=NTNraXdhb3lkdzhy",
    "linkedin": "www.linkedin.com/in/rahulpal-iitb"
  },
  {
    "name": "Saransh Jain",
    "image":Saransh,
    "position": "Social Secretary",
    "phone": "7693092888",
    "email": "saranshjainn.01@gmail.com",
    "instagram": "https://www.instagram.com/saransh.jain_01?igsh=MTUxeDVpdTBrMXlwNQ==",
    "linkedin": "https://www.linkedin.com/in/rahul-pal-a4bb1933b"
  },
  {
    "name": "Siya Sarda",
    "image":Siya,
    "position": "Associate Secretary",
    "phone": "9354609131",
    "email": "siyasarda.chea@gmail.com",
    "instagram": "https://www.instagram.com/itssiyasarda?igsh=d29vdjVjMzhtdzdm",
    "linkedin": "https://www.linkedin.com/in/siyasarda18/"
  },
  {
    "name": "Tanmay Sonkar",
    "image":Tanmay,
    "position": "Associate Secretary",
    "phone": "8840035159",
    "email": "tanmaysonkar.chea@gmail.com",
    "instagram": "https://www.instagram.com/tanmay_sonkar._?igsh=cW04c3Q0NzJzNDA4",
    "linkedin": "https://www.linkedin.com/in/tanmay-sonkar-670aaa330"
  },
  {
    "name": "Damodar Pendse",
    "position": "Alumni Secretary",
    "phone": "7350644940",
    "email": "23b0429@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=61561073463381",
    "instagram": "https://www.instagram.com/damitssme/",
    "linkedin": "https://www.linkedin.com/in/damodar-pendse/"
  },
  {
    "name": "Nilay Kanakia",
    "image":Nilay,
    "position": "Editor",
    "phone": "9987936599",
    "email": "24b0386@iitb.ac.in",
    "instagram": "https://www.instagram.com/nilaykanakia2410?igsh=MXI2b2NibWhucnc5Yg=="
  },
  {
    "name": "Divyanshi Agrawal",
    "image":Divyanshi,
    "position": "Design Secretary",
    "phone": "8793140610",
    "email": "24b0391@iitb.ac.in",
    "instagram": "https://www.instagram.com/divyanshiagrawal_13?igsh=eXNvcWdzdnV0MW1m"
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

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh()
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
