import React from 'react'
import Image from 'next/image'
import { Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id='contact'>

    
    <div className="w-full bg-[#b7cfdb] p-6 md:p-12" style={{ fontFamily: "'Red Rose', cursive" }}>
      <div className="flex justify-end w-full">
        <div className="w-full md:max-w-2xl flex flex-col gap-4 items-end">
          <h1 className="text-center font-semibold text-2xl md:text-4xl w-full">WORK WITH ME</h1>
          
          <div className="w-24 h-24 md:w-48 md:h-48 mx-auto overflow-hidden rounded-full border-4 border-white  ">
                    <Image
                      src="/assets/images/Ope.jpg"
                      alt="Hero Image"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
          </div>

          <div className="flex flex-col justify-start mx-auto">
  <div className="flex gap-4 items-center">
    <Phone fill="black" />
    <span>+2348124387687</span>
  </div>

  <div className="flex gap-4 items-center">
    <Mail />
    <span>ope.visualsuite@gmail.com</span>
  </div>

        
        
      </div>
    </div>
  </div>
</div>
</section>
  )
}
