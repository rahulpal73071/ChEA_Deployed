// import React from "react";
import Card from "../Card";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import NavButton from "../NavButton";
import "aos/dist/aos.css";
import AOS from "aos";
import Aabha from '../../assets/images/contact23/Aabha.jpg';
import Amrit from '../../assets/images/contact23/Amrit.webp';
import Gohil from '../../assets/images/contact23/Gohil.jpg';
import hridyansh from '../../assets/images/contact23/hridyansh.jpg';
import kunal from '../../assets/images/contact23/kunal.jpg';
import maitri from '../../assets/images/contact23/maitri.jpg';
import Parth from '../../assets/images/contact23/Parth.webp';
import Prarthana from '../../assets/images/contact23/Prarthana.jpg';
import pratiksha from '../../assets/images/contact23/pratiksha.jpg';
import radhika from '../../assets/images/contact23/radhika.jpg';
import steve from '../../assets/images/contact23/steve.jpg';
import swapnil from '../../assets/images/contact23/swapnil.jpg';
import tanay from '../../assets/images/contact23/tanay.jpg';

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
    "name": "Parth Manish Dani",
    "image":Parth,
    "position": "Department General Secretary",
    "phone": "9323294005",
    "email": "dgsec@che.iitb.ac.in, parth.chea@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100010070436244",
    "instagram": "https://instagram.com/parth_dani_?igshid=ZGUzMzM3NWJiOQ==",
    "linkedin": "https://www.linkedin.com/in/parth-dani-538542201"
  },
  {
    "name": "Amrit Raj",
    "image": Amrit,
    "position": "Joint Secretary Academic Affairs",
    "phone": "7545855055, 8529756127",
    "email": "210020016@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100091401824609&mibextid=ZbWKwL",
    "instagram": "https://instagram.com/amritraj4440?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/amrit-raj-b2037a228"
  },
  {
    "name": "Tanay Mestry",
    "image": tanay,
    "position": "Joint Secretary Events",
    "phone": "9004837295",
    "email": "tanaypm6129@gmail.com",
    "facebook": "https://www.facebook.com/tanay.mestry?mibextid=ZbWKwL",
    "instagram": "https://instagram.com/mtanay15?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/tanay-mestry-2b6380228"
  },
  {
    "name": "Gohil Singhal",
    "image": Gohil,
    "position": "Social Secretary",
    "phone": "7665600257",
    "email": "22B0373@iitb.ac.in",
    "facebook": "https://www.facebook.com/gohil.singhal.5",
    "instagram": "https://www.instagram.com/gohil_singhal/",
    "linkedin": "https://www.linkedin.com/in/gohil-singhal-03aab6253/"
  },
  {
    "name": "Radhika Goyal",
    "image": radhika,
    "position": "Sports Secretary",
    "phone": "7850087763",
    "email": "22b0423@iitb.ac.in",
    "instagram": "https://www.instagram.com/_radhikaagoyal/#"
  },
  {
    "name": "Maitreyee Tengshe",
    "image": maitri,
    "position": "Alumni Secretary",
    "phone": "7030909443",
    "email": "maitu.ten@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100089717880314&mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/maitreyee_.38?r=nametag",
    "linkedin": "https://www.linkedin.com/in/maitreyee-tengshe-810812252"
  },
  {
    "name": "Aabha Lahurikar",
    "image": Aabha,
    "position": "Editor",
    "phone": "8767057091",
    "email": "aabha1006@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100092148917301",
    "instagram": "https://instagram.com/aabha_lahurikar?igshid=ZDc4ODBmNjlmNQ==",
    "linkedin": "https://www.linkedin.com/in/aabha-lahurikar-498780255/"
  },
  {
    "name": "Steve Austin Samuel",
    "image": steve,
    "position": "Design Secretary",
    "phone": "9600082807",
    "email": "steveaustinsamuel@gmail.com",
    "facebook": "https://www.facebook.com/steve.austin.samuel?mibextid=ZbWKwL",
    "instagram": "https://instagram.com/mainhoonsteve?igshid=NGExMmI2YTkyZg==",
    "linkedin": "https://www.linkedin.com/in/steve-austin-samuel-a2a8b6155"
  },
  {
    "name": "Prarthana Joy Francis",
    "image": Prarthana,
    "position": "Web Secretary",
    "phone": "7067083081, 8989192224",
    "email": "prarthanafrancis10@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100093284233605&mibextid=ZbWKwL",
    "instagram": "https://instagram.com/prarthana__10?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/prarthana-francis-74a945257"
  },
  {
    "name": "Hridyansh Bhargava",
    "image": hridyansh,
    "position": "S1 Class Representative",
    "phone": "7976979245",
    "email": "22b0415@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100093182304107",
    "instagram": "https://instagram.com/hridyansh_bhargava_04?igshid=MzRlODBiNWFlZA==",
    "linkedin": "https://www.linkedin.com/in/hridyansh-bhargava-35a390253"
  },
  {
    "name": "Pratiksha Kapoor",
    "image": pratiksha,
    "position": "S2 Class Representative",
    "phone": "9152929329, 8605661520",
    "email": "22b0372@iitb.ac.in",
    "instagram": "https://www.instagram.com/pratikshakapoor89/",
    "linkedin": "https://www.linkedin.com/in/pratiksha-kapoor-66b384250/"
  },
  
]

const pgData = [
  {
    "name": "Swapnil Damke",
    "image": swapnil,
    "position": "M. Tech Representative",
    "phone": "7020128597",
    "linkedin": "https://www.linkedin.com/in/swapnil-damke-92959b261"
  },
  {
    "name": "Kunal Sharma",
    "image": kunal,
    "position": "PhD Representative",
    "phone": "7385238932",
    "instagram": "Kunalsharma6996",
    "facebook": "https://www.facebook.com/profile.php?id=100007163013625",
    "linkedin": "https://www.linkedin.com/in/kunal-sharma-2b4676137"
  }

]

export default function Contact23() {
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
