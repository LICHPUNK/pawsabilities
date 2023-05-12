import React from 'react'
import { goodDog } from '../assets'

const HomePage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-4/5 xs:pr-52 md:pr-30 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-poppins xl:text-7xl lg:text-6xl md:text-5xl text-4xl mb-6 font-bold text-gray-300 tracking-tight">Your pet,
            <br className="hidden lg:inline-block" /> our passion.
          </h1>
          <p className="mb-8 leading-relaxed font-poppins lg:text-lg md:text-md text-sm text-gray-400">Our mission is to offer peace of mind to pet owners by delivering high-quality pet care services that promote the happiness, health, and well-being of pets. We're committed to providing compassionate care with a personal touch.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-[#1F2D3D] bg-[#F9C74F] font-poppins border-4 border-transparent py-2 px-6 focus:outline-none hover:text-gray-200 hover:border-[#F9C74F]  rounded text-lg">Learn More</button>
            <button className="ml-4 flex items-center text-[#1F2D3D] font-poppins border-4 border-[#6FA3D6] py-2 px-6 focus:outline-none bg-[#6FA3D6] hover:text-gray-200 rounded text-lg">
              <span className="mr-2">Get Started</span>
              <i className='fa-regular fa-circle-right'></i>
            </button>
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