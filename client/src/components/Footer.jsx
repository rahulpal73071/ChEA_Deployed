import React from "react";
import CountUp from "react-countup";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import cheaLogo from "../assets/images/cheaorange.png"; // Update this path as needed

export default function Footer() {
  const stats = [
    { label: "National Rank", value: 1 },
    { label: "Faculties", value: 45 },
    { label: "Students", value: 750 },
    { label: "Events", value: 20 },
  ];

  const socialIcons = [
    { icon: <Facebook />, link: "#" },
    { icon: <Instagram />, link: "#" },
    { icon: <Linkedin />, link: "#" },
    { icon: <Youtube />, link: "#" },
    { icon: <Twitter />, link: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-purple-900 to-black text-white py-12 px-4">
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-extrabold text-orange-500">
              <CountUp end={stat.value} duration={2.5} />{stat.value > 1 ? "+" : ""}
            </h2>
            <p className="mt-2 font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-10">
        {socialIcons.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Maintainer Section */}
      <div className="text-center mt-6 flex flex-col items-center">
        <p className="text-lg font-semibold">Website maintained by</p>
        <img src={cheaLogo} alt="ChEA Logo" className="h-10 mt-1" />
      </div>
    </footer>
  );
}
