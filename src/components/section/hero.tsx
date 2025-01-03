"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


export default function HomePage() {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                
                {/* Intro Section */}
                <div className="col-span-7 place-self-center sm:text-left order-2 sm:order-1 md:mt-4">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-gray-400">
                            Hello, I&apos;m <br /> Areeba Nafees
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer',
                                1000,
                                'Backend Developer',
                                1000,
                                'Full Stack Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
                        I am a dedicated Full-Stack Web Developer specializing in HTML5, CSS3, TypeScript, JavaScript, Tailwind CSS, React.js, and Next.js. I specialize in building responsive, intuitive, and dynamic websites that drive engagement and enhance user experiences. With a solid foundation in front-end and back-end technologies, I bring creative ideas to life through clean, maintainable code.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-gray-500 via-cyan-400 to-sky-500 hover:bg-slate-200 text-white">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-gray-500 via-cyan-400 to-sky-500 hover:bg-slate-800 text-white mt-3">
                        <a href="https://my-resume-bof2mxq0z-areeba-muhammad-nafees-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                            <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                            </a>
                        </button>
                    </div>
                </div>

                {/* Profile Image Section */}
                <div className="col-span-5 place-self-center lg:mt-0 order-1 sm:order-2 pb-12 md:pb-0">
                    <div className="flex justify-center items-center mt-4 p-4 w-64 h-64 md:w-80 md:h-80 relative">
                        <Image
                            src="/girlss.jpg"
                            alt="heroimage"
                            className="rounded-full object-cover"
                            layout="fill"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
