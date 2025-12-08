import React from 'react'
import { SiCanva, SiOpenai, SiMeta, SiNotion, } from 'react-icons/si'
import ExcelIcon from './icons/ExcelIcon'
import CapCut from './icons/CapCut'
import ClaudeAi from './icons/ClaudeAi'

function Tools() {
  return (
    <section id='tool-kits'>

    

    <div className="w-full bg-amber-200 p-6 md:p-12" style={{ fontFamily: "'Red Rose', cursive" }}>
      <div className="flex justify-end w-full">
        <div className="w-full md:max-w-2xl flex flex-col gap-4 items-end">
          <h1 className="text-center font-semibold text-2xl md:text-4xl w-full">TOOL KITS</h1>

          {/* Icons */}
          <div className="flex gap-4 mt-4 justify-end flex-wrap">
            
            <CapCut className='hover:scale-110 transition-transform duration-300'/>

            {/* Canva */}
            <SiCanva className="w-10 h-10 text-blue-500 hover:scale-110 transition-transform duration-300" />

            {/* ChatGPT */}
            <SiOpenai className="w-10 h-10 text-green-600 hover:scale-110 transition-transform duration-300" />

            {/* Claude AI - custom SVG in public/icons */}
            <ClaudeAi className='hover:scale-110 transition-transform duration-300'/>

            {/* Meta Business Suite */}
            <SiMeta className="w-10 h-10 text-blue-600 hover:scale-110 transition-transform duration-300" />

            {/* Notion */}
            <SiNotion className="w-10 h-10 text-black hover:scale-110 transition-transform duration-300" />

            {/* Microsoft Excel */}
            <ExcelIcon className='hover:scale-110 transition-transform duration-300'/>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Tools
