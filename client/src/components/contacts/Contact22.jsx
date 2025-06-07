// import React from "react";
import Card from "../Card";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import NavButton from "../NavButton";
import "aos/dist/aos.css";
import AOS from "aos";
import image30 from '../../assets/images/contact22/image30.webp';
import image31 from '../../assets/images/contact22/image31.webp';
import image32 from '../../assets/images/contact22/image32.webp';
import image33 from '../../assets/images/contact22/image33.webp';
import image34 from '../../assets/images/contact22/image34.webp';
import image35 from '../../assets/images/contact22/image35.webp';
import image36 from '../../assets/images/contact22/image36.webp';
import image37 from '../../assets/images/contact22/image37.webp';
import image38 from '../../assets/images/contact22/image38.webp';
import image39 from '../../assets/images/contact22/image39.webp';
import image40 from '../../assets/images/contact22/image40.webp';
import Khyati from '../../assets/images/contact22/Khyati.webp';
import Parth from '../../assets/images/contact22/Parth.webp';
import tanay1 from '../../assets/images/contact22/tanay1.jpg';

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
    "name": "Khyati Jain",
    "image":Khyati,
    "position": "Department General Secretary",
    "phone": "9465500286",
    "email": "dgsec@che.iitb.ac.in, khyati.jain1105@gmail.com",
    "facebook": "https://www.facebook.com/khyati.jain.71653",
    "instagram": "https://www.instagram.com/khyati.1105/",
    "linkedin": "https://www.linkedin.com/in/khyati-jain-9438241a0/"
  },
  {
    "name": "Parth Manish Dani",
    "image": Parth,
    "position": "Joint Secretary Academic Affairs",
    "phone": "9323294005",
    "email": "200020090@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100010070436244",
    "instagram": "https://www.instagram.com/parth_dani_/",
    "linkedin": "https://www.linkedin.com/in/parth-dani-538542201/"
  },
  {
    "name": "Vinit Nikam",
    "image": image30,
    "position": "Joint Secretary Events",
    "phone": "7744052977",
    "email": "vinitnikam10@gmail.com",
    "facebook": "https://www.facebook.com/vinitnikam2211",
    "instagram": "https://www.instagram.com/vinitnikam10/",
    "linkedin": "https://www.linkedin.com/in/vinit-nikam-9b2861203"
  },
  {
    "name": "Tanay Mestry",
    "image": tanay1,
    "position": "Social Secretary",
    "phone": "9004837295",
    "email": "tanaypm6129@gmail.com",
    "facebook": "https://www.facebook.com/tanay.mestry?mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/mtanay15/",
    "linkedin": "https://www.linkedin.com/in/tanay-mestry-2b6380228"
  },
  {
    "name": "Aditya Mahesh",
    "image": image32,
    "position": "Sports Secretary",
    "phone": "8882312835",
    "email": "adityamahesh44@gmail.com",
    "instagram": "https://www.instagram.com/adityamahesh44/"
  },
  {
    "name": "Tejas Lokhande",
    "image": image33,
    "position": "Alumni Secretary",
    "phone": "7057840139",
    "email": "tejas123lokhande@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100075412287191",
    "instagram": "https://instagram.com/tejas._.lokhande?igshid=MzRlODBiNWFlZA==",
    "linkedin": "https://www.linkedin.com/in/tejas-lokhande-8a941a20b"
  },
  {
    "name": "Srishti Badaya",
    "image": image34,
    "position": "Editor",
    "phone": "8850374718",
    "email": "210020139@iitb.ac.in",
    "instagram": "https://www.instagram.com/_srishtibadaya/",
    "linkedin": "https://www.linkedin.com/in/srishti-badaya-625484233/"
  },
  {
    "name": "Atharva Yeole",
    "image": image35,
    "position": "Design Secretary",
    "phone": "9420182884",
    "email": "210020027@iitb.ac.in",
    "facebook": "https://m.facebook.com/100074538175152/",
    "instagram": "https://www.instagram.com/atharva_yeole1/",
    "linkedin": "https://www.linkedin.com/in/atharva-yeole-355689226/"
  },
  {
    "name": "Bhavina Gajghate",
    "image": image36,
    "position": "Web Secretary",
    "phone": "9356951687",
    "email": "gajghate.bhavina@gmail.com",
    "facebook": "https://www.facebook.com/bhavinagajghate/",
    "instagram": "https://www.instagram.com/bhavina.g/",
    "linkedin": "https://www.linkedin.com/in/bhavina-gajghate/"
  },
  {
    "name": "Soumya Mandal",
    "image": image37,
    "position": "S1 Class Representative",
    "phone": "9476327311",
    "email": "somyamandal0708@gmail.com"
  },
  {
    "name": "Amrit Raj",
    "image": image38,
    "position": "S2 Class Representative",
    "phone": "7545855055, 8529756127",
    "email": "210020016@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100091401824609&mibextid=ZbWKwL",
    "instagram": "https://instagram.com/amritraj4440?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/amrit-raj-b2037a228"
  },
  
]

const pgData = [
  {
    "name": "Astitva Mishra",
    "image": image39,
    "position": "M. Tech Representative",
    "phone": "8081683111",
    "email": "99astitva@gmail.com"
  },
  {
    "name": "Saikat Saha",
    "image": image40,
    "position": "PhD Representative",
    "phone": "7685928544",
    "email": "214020017@iitb.ac.in, saikatiitbche@gmail.com"
  }
]

export default function Contact22() {
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
