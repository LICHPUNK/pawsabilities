import React from 'react'
import { goodDog } from '../assets'

const HomePage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-4/5 xs:pr-52 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-poppins lg:text-6xl text-4xl mb-6 font-bold text-gray-300 tracking-tight">Your pet,
            <br className="hidden lg:inline-block" /> our passion.
          </h1>
          <p className="mb-8 leading-relaxed font-poppins lg:text-lg text-md text-gray-400">Our mission is to offer peace of mind to pet owners by delivering high-quality pet care services that promote the happiness, health, and well-being of pets.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-[#1F2D3D] bg-[#F9C74F] border-4 border-transparent py-2 px-6 focus:outline-none hover:text-gray-200 hover:border-[#F9C74F]  rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-200 border-4 border-[#6FA3D6] py-2 px-6 focus:outline-none hover:bg-[#6FA3D6] hover:text-[#1F2D3D] rounded text-lg">Button</button>
          </div>
        </div>
        <div className="lg:max-w-2xl md:w-full w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={goodDog} />
        </div>
      </div>
    </section>
  )
}

export default HomePage