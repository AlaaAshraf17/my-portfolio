    'use client'
    import React, { useEffect, useState } from 'react';
    import Image from 'next/image';
    import { TypeAnimation } from 'react-type-animation';

    const Hero = () => {
    return (
        <section className="py-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            <div className="col-span-7 flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-white text-xl sm:text-2xl mb-2">Hello, I'm</h2>
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Alaa Ashraf</h1>
            <h3 className="text-green-400 text-4xl sm:text-3xl mb-4 font-semibold">Frontend Developer</h3>
            
                <p className="text-[#ADB7BE] text-base lg:text-lg mb-6">
            I specialize in{' '}
            <span className="text-white font-medium">
                <TypeAnimation
                sequence={[
                    'clean design',
                    1000,
                    'efficient code implementation',
                    1000,
                    'responsive layouts',
                    1000,
                    'modern React solutions',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.125rem', display: 'inline-block' }} 
                repeat={Infinity}
                />
            </span>{' '}
            to build modern and interactive web experiences.
            </p>


            <div className="flex justify-center sm:justify-start gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-gray-800 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-green-700 hover:shadow-xl transition duration-300">
                Hire Me
                </button>
                <a href="/Alaa_Ashraf_CV.pdf" download>
                <button className="px-8 py-3 bg-transparent border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:text-white hover:border-transparent transition duration-300">
                Download CV
                </button>
                </a>
            </div>
            </div>

            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-gradient-to-br from-gray-800 to-gray-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-2xl">
                <Image
                src="/image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={300}
                height={300}
                />
            </div>
            </div>
        </div>
        </section>
    );
    };

export default Hero;
