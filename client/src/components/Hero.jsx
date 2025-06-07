import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import loading from '../assets/images/loading.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
import NavButton from "./NavButton";
const orbitCircles = [1000, 800, 600];
const plusSigns = [8,  70, 85 , 100 , 150];

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

export default function Hero() {
    useEffect(()=>{
        AOS.init({ duration: 1000 });
    } , []);

    
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const getTransform = (mult = 0.01) => ({
    x: useTransform(mouseX, (x) => (x - window.innerWidth *2) * mult),
    y: useTransform(mouseY, (y) => (y - window.innerHeight *2) * mult),
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
    <div onMouseMove={handleMouseMove} className="overflow-hidden">
      <div className="relative bg-gradient-to-b from-black to-purple-950 text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-20 relative z-10">
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

          {/* Hero Content */}
          <div className="z-10 w-full lg:w-1/2 space-y-6 ml-7">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight" data-aos='fade-right'>
              CHEMICAL Engineering <br />
              <span className="text-orange-400" >Association, IIT Bombay</span>
            </h1>
            <p className="text-lg text-gray-300" data-aos='fade-left'>
              <span className="text-purple-500 font-bold">Transforming atoms into innovations:</span> where science converges with ingenuity!
Chemical Engineering: a pivotal Catalyst of Innovation, unleashes the profound power of scientific knowledge, forging unique path that Shapes a Sustainable and Prosperous World. The <span className="text-purple-700 font-bold">Chemical</span> Engineering Association (ChEA), established in <span className="text-purple-700 font-bold">1965</span>, looks back with pride with an enviable record of a number of educational, informative, and informal events. The records have become even more enviable when considered in the context of the fact that such events are organized almost entirely by students with remarkably keen participation and generous support from professors and alumni.
            </p>
           
            
          </div>

          {/* Image */}
          <div className="lg:flex w-1/2 justify-center z-10" data-aos="fade-up">
            <img
              src={loading}
              alt="Illustration"
              className="max-h-[500px] object-contain"
            />
          </div>
        </section>

        {/* Horizontal Divider */}
        <div className="relative z-10 text-white">
          <div className="flex justify-center my-8">
            <div className="w-4/5 h-[3px] bg-purple-500 relative" data-aos="fade-right">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl text-orange-400 font-bold">
                +
              </div>
            </div>
          </div>
        </div>

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
          ))}

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center" >
            {/* YouTube Embed */}
            <div className="w-full lg:w-1/2 aspect-video" data-aos="fade-up-right">
              
              <iframe className="w-full h-full rounded-lg border-4 border-purple-500 shadow-lg" src="https://www.youtube.com/embed/JOLQSrkcSAo?si=tbyiqzyl2Tz-k6M8" title="ChEA video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            {/* Description */}
            <div className="w-full lg:w-1/2 text-lg leading-relaxed bg-black/60 p-6 rounded-xl shadow-lg backdrop-blur-md text-gray-300" data-aos="fade-up-left">
              <p>
                ChEA is an association of the Alumni, Faculty, Students, and Staff of the
                Chemical Engineering Department, dedicated to the noble cause of
                disseminating knowledge and fostering awareness in the field of
                chemical engineering.
              </p>
              <br />
              <p>
                One of its paramount objectives is to foster and fortify the spirit of
                brotherhood and cooperation among the esteemed members of the
                association, weaving a tapestry of unity that strengthens the bonds
                within this academic community.
              </p>
              <br />
              <p>
                Association aims to nurture and cultivate leadership qualities, ignite
                the spark of initiative, and inculcate a profound sense of
                responsibility among its members.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
