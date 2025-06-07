import React , {useEffect} from "react";
import NavButton from "./NavButton";
import "aos/dist/aos.css";
import AOS from "aos";

export default function LinkCard({ image, name , url }) {
    useEffect(() => {
        AOS.init({ duration: 3000 });
        AOS.refresh()
      }, []);
  return (
    <div className="relative group w-64 h-80 rounded-xl overflow-hidden shadow-[0_0_20px_#a855f7] transform transition-transform duration-300 
                 hover:scale-110 active:scale-110 touch-manipulation select-none" data-aos='fade-left'>
      {/* Image */}
      <img src={image} alt={name} className="w-full h-70 object-cover" />

      {/* Name */}
      <div className="bg-black text-center py-2" data-aos='fade-left'>
        <h2 className="text-lg font-semibold text-purple-500">{name}</h2>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 
                   group-hover:opacity-100 group-active:opacity-100 
                   flex flex-col justify-center items-center text-center 
                   p-4 transition duration-300">
        <h2 className="text-purple-400 text-lg font-bold m-4">{name}</h2>
        
      

        {/* button */}
        <NavButton to={url}>View More</NavButton>
      </div>
    </div>
  );
}
