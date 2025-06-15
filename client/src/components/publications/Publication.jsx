// import React from "react";
// import Card from "../Card";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import NavButton from "../NavButton";
import "aos/dist/aos.css";
import AOS from "aos";
import Alum_Oracle24 from '../../assets/images/publications/Alum_Oracle24.jpg'
import ao21 from '../../assets/images/publications/ao21.webp'
import cg17 from '../../assets/images/publications/cg17.webp'
import cg18 from '../../assets/images/publications/cg18.webp'
import cg19 from '../../assets/images/publications/cg19.webp'
import cg20 from '../../assets/images/publications/cg20.webp'
import cg2021 from '../../assets/images/publications/cg2021.webp'
import fn21 from '../../assets/images/publications/fn21.webp'
import fn19 from '../../assets/images/publications/fn19.webp'
import image21 from '../../assets/images/publications/image21.webp'
import image22 from '../../assets/images/publications/image22.webp'
import fn20 from '../../assets/images/publications/fn20.jpg'
import fn23 from '../../assets/images/publications/fn23.jpg'
import cv from '../../assets/images/publications/cv.jpg'
import ChEA_voice24 from '../../assets/images/publications/ChEA_voice24.jpg'
import ChEA_handbook24 from '../../assets/images/publications/ChEA_handbook24.png'
import chemical from '../../assets/images/publications/chemical gazette23.png'
import cg24 from '../../assets/images/publications/The-Chemical-Gazette25.png'


// import FacdCord from "../FacdCord";
import PubliCard from "../PubliCard";

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

const data24 = [
  {
    "name": "Chemical Gazette",
    "image": cg24,
    "url": "https://drive.google.com/file/d/1lfb-LiRb9J3I8TSdONUlhcO9v50ceYV8/view?usp=sharing"
  },
  {
    "name": "ChEA Handbook",
    "image": ChEA_handbook24,
    "url": "https://drive.google.com/file/d/1zGpb7ZhaAtq2pSTOLnfN6EEDVgfDhAm6/view"
  },
  {
    "name": "ChEA Voice'24",
    "image": ChEA_voice24,
    "url": "https://drive.google.com/file/d/1y99FyM0GauPPu30tp3rTHo5a6r8lvP7E/view?usp=sharing"
  },
  {
    "name": "Alum Oracle",
    "image": Alum_Oracle24,
    "url": "https://drive.google.com/file/d/1968eL3oUEAJ5oMToeAiojZSwIesJtVXO/view?usp=sharing"
  }
]

const data23 = [
  {
    "name": "ChEA Voice'23",
    "image": fn23,
    "url": "https://drive.google.com/file/d/1ABoS3L2gUuKREgSA_GvwtpGduzIiXJLh/view?usp=sharing"
  },
  {
    "name": "Chemical Gazette",
    "image": chemical,
    "url": "https://drive.google.com/file/d/1K51Nhnj-ifyw3-ifBwwS6hVeskVMPMtW/view?usp=sharing"
  }
]


const data22 = [
  {
    "name": "Alum Oracle'22",
    "image": image21,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_3d318cd05cac446e98cf4b8e784f0744.pdf"
  },
  {
    "name": "Alum Oracle Dark'22",
    "image": image22,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_c989ac4b8b4e4b308afc62dc6c0b91f7.pdf"
  },
  {
    "name": "ChEA Voice'22",
    "image": cv,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_bd7e7d46fdda44e5bc7cc843b72fcdcd.pdf"
  }
]


const data21 = [
  {
    "name": "Chemical Gazette'21",
    "image": cg2021,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_33982ebd08fc4a69b986929e0b64e38e.pdf"
  },
  {
    "name": "Alum Oracle'21",
    "image": ao21,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_e8062dd752db457ba327e36144e649be.pdf"
  },
  {
    "name": "ChEA Voice'21",
    "image": fn21,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_185bb007db8d453c9dc682a5c9fb59a5.pdf"
  }
]


const data20 = [
  {
    "name": "Chemical Gazette'20",
    "image": cg20,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_6b4a04449c904929b2ce92b6f50b2de1.pdf"
  },
  {
    "name": "ChEA Voice'20",
    "image": fn20,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_65777f8ea4b844358c53e9f8e42e2ecf.pdf"
  }
]

const data19 = [
  {
    "name": "Chemical Gazette'19",
    "image": cg19,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_deae54f32fca4d9ea018b991318ba648.pdf"
  },
  {
    "name": "ChEA Voice'19",
    "image": fn19,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_17b5cb10e973481c935c7b8943230e91.pdf"
  }
]


const data18 = [
  {
    "name": "Chemical Gazette '18",
    "image": cg19,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_71dd8d1e33af451f9c91f5e087b8219b.pdf"
  },
  {
    "name": "Chemical Gazette '17",
    "image": cg17,
    "url": "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_0b90a5a264354853871333bf40965750.pdf"
  }
]







export default function Publication() {
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
                        <h1 className="text-center font-black text-4xl mt-4 mb-4" data-aos='fade-left'>ChEA <span className="text-purple-600">PUBLICATIONS</span></h1>
            {/* NavButton content */}

            {/* <div className="w-full px-[10%] py-4">
              <div className="flex flex-wrap justify-center gap-4">
                <NavButton to="/publications/24">2024</NavButton>
                <NavButton to="/publications/23">2023</NavButton>
                <NavButton to="/publications/22">2022</NavButton>
                <NavButton to="/publications/21">2021</NavButton>
                <NavButton to="/publications/20">2020</NavButton>
                <NavButton to="/publications/19">2019</NavButton>
                <NavButton to="/publications/18">Pre-2019</NavButton>
                
                
              </div>
            </div> */}

            {/* Hero Content */}
              <h1 className="text-white text-center font-bold text-3xl">Publication <span className="text-purple-400">2024</span> </h1>
            <div className="flex flex-wrap gap-6 justify-center p-6" data-aos='fade-in'>
              {data24.map((item, index) => (
                <PubliCard key={index} {...item} />
              ))}
            </div>
              <h1 className="text-white text-center font-bold text-3xl">Publication <span className="text-purple-400">2023</span> </h1>
            <div className="flex flex-wrap gap-6 justify-center p-6" data-aos='fade-in'>
              {data23.map((item, index) => (
                <PubliCard key={index} {...item} />
              ))}
            </div>
              <h1 className="text-white text-center font-bold text-3xl">Publication <span className="text-purple-400">2022</span> </h1>
            <div className="flex flex-wrap gap-6 justify-center p-6" data-aos='fade-in'>
              {data22.map((item, index) => (
                <PubliCard key={index} {...item} />
              ))}
            </div>
              <h1 className="text-white text-center font-bold text-3xl">Publication <span className="text-purple-400">2021</span> </h1>
            <div className="flex flex-wrap gap-6 justify-center p-6" data-aos='fade-in'>
              {data21.map((item, index) => (
                <PubliCard key={index} {...item} />
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
          <h1 className="text-white text-center font-bold text-3xl">Publication <span className="text-purple-400">2020</span> </h1>
            <div className="flex flex-wrap gap-6 justify-center p-6" data-aos='fade-in'>
              {data20.map((item, index) => (
                <PubliCard key={index} {...item} />
              ))}
            </div>
            <h1 className="text-white text-center font-bold text-3xl">Publication <span className="text-purple-400">2019</span> </h1>
            <div className="flex flex-wrap gap-6 justify-center p-6" data-aos='fade-in'>
              {data19.map((item, index) => (
                <PubliCard key={index} {...item} />
              ))}
            </div>
            <h1 className="text-white text-center font-bold text-3xl">Publication <span className="text-purple-400">(Pre-2019)</span> </h1>
            <div className="flex flex-wrap gap-6 justify-center p-6" data-aos='fade-in'>
              {data18.map((item, index) => (
                <PubliCard key={index} {...item} />
              ))}
            </div>
          
          </section>
        </div>
      </div>
    </>
  );
}
