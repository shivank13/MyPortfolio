import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiJavascript, SiPython, SiDjango, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
        <div title="React" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-[#61DAFB]' />  {/* React Color */}
        </div>
        <div title="JavaScript" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiJavascript className='text-7xl text-[#F7DF1E]' />  {/* JavaScript Color */}
        </div>
        <div title="TailwindCSS" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiTailwindcss className='text-7xl text-[#06B6D4]' />  {/* TailwindCSS Color */}
        </div>
        <div title="Python" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPython className='text-7xl text-[#3776AB]' />  {/* Python Color */}
        </div>
        <div title="Django" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiDjango className='text-7xl text-[#092E20]' />  {/* Django Color */}
        </div>
        <div title="MongoDB" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-[#47A248]' />  {/* MongoDB Color */}
        </div>
        </div>
    </div>
  )
}

export default Technologies