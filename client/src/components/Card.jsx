import React , {useEffect} from "react";
import { Instagram, Linkedin } from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Card({ image, name, position, phone, email, instagram, linkedin }) {
    useEffect(() => {
        AOS.init({ duration: 3000 });
        AOS.refresh()
      }, []);
  return (
    <div className="relative group w-64 h-80 rounded-xl overflow-hidden shadow-[0_0_20px_#a855f7] transition duration-300" data-aos='fade-left'>
      {/* Image */}
      <img src={image} alt={name} className="w-full h-70 object-cover" />

      {/* Name */}
      <div className="bg-black text-center py-2" data-aos='fade-left'>
        <h2 className="text-lg font-semibold text-purple-500">{name}</h2>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition duration-300">
        <h2 className="text-purple-400 text-lg font-bold">{name}</h2>
        <h3 className="text-white text-lg font-bold">{position}</h3>
        <p className="text-white text-sm mt-2">📞 {phone}</p>
        <p className="text-white text-sm">✉️ {email}</p>

        {/* Icons */}
        <div className="flex gap-4 mt-4">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="text-white hover:text-pink-500 transition" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white hover:text-blue-500 transition" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
