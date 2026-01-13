'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Linkedin } from 'lucide-react';


export default function Hero() {
  const constantItems = "";
  const dynamicItems = [
    "VIRTUAL ASSISTANT",
    "SOCIAL MEDIA MANAGER",
    "CONTENT CREATOR",
    "VIDEO EDITOR",
  ]

  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % dynamicItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-4'>

    

    <div className="relative h-[250px] md:h-[500px] w-[97%] mx-auto overflow-hidden rounded-lg">
      
      
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: "url('/assets/images/mainhero.jpg')" }}
      ></div>

      
      <div className="absolute inset-0 bg-black/30"></div>

      
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-between sm:flex-col md:flex-row lg:flex-row p-8 md:p-10 ">

        <div className='flex flex-col items-center '>
        <div className="w-24 h-24 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white ">
          <Image
            src="/assets/images/Ope.jpg"
            alt="Hero Image"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Social icons */}
        <div className="flex  space-x-6 mt-4 text-white">
          <a href='https://www.instagram.com/wendy.chronicles?igsh=MW5nYjdlOW12bjI5ZA%3D%3D&utm_source=qr' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="text-lg md:text-2xl cursor-pointer hover:text-pink-500 transition" /></a>
          <a href='https://wa.link/1ypd4p' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="text-lg md:text-2xl cursor-pointer hover:text-green-600 transition hover:fill-green-600 " /></a> 
          <a href='https://www.linkedin.com/in/opeyejesu-mary' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin}  className="text-lg md:text-2xl cursor-pointer hover:text-blue-600 transition hover:fill-blue-600" /></a>
        </div>
        </div>

        <div className='font-heading flex flex-col items-center text-white md:space-y-6 space-y-2'>
        <h1 className="text-sm md:text-5xl font-semibold text-center">
          OJUOLAPE OPEYEJESU
        </h1>
        <p className="text-sm md:text-4xl font-semibold text-center animate-pulse">{constantItems} {dynamicItems[currentItem]}</p> 
        <a href='mailto:ope.visualsuite@gmail.com' className='border border-amber-50 md:py-4 md:px-10 py-2 px-4  hover:bg-amber-50 hover:text-black text-xs md:text-2xl font-semibold transition hover:cursor-pointer'>
          WORK WITH ME
        </a>


        </div>

      </div>
    </div>

    </div>
  );
}
