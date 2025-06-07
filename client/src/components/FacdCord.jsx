import React , {useEffect} from "react";
import NavButton from "./NavButton";
import "aos/dist/aos.css";
import AOS from "aos";

export default function FacdCord({ image, name, phone, email, roll , url }) {
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
        <h2 className="text-purple-400 text-lg font-bold m-4">{name}</h2>
        
        <p className="text-white text-sm m-2">📞 {phone}</p>
        <p className="text-white text-sm m-2">✉️ {email}</p>
        <p className="text-white text-sm mt-4 mb-8">{roll}</p>

        {/* button */}
        <NavButton to={url}>View More</NavButton>
      </div>
    </div>
  );
}
