import React from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Coffee Shop Website",
    description: "A modern and engaging website for showcasing coffee shop services and menu.",
    image: "/bean.png",
    url: "https://bean-journey.vercel.app/", // Project URL
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personalized and interactive portfolio to highlight your skills and projects.",
    image: "/portfolio.jpg",
    url: "/projects/beta", // Project URL
  },
  {
    id: 3,
    title: "Restaurant Websit",
    description: "Experience a fully responsive and uniquely designed restaurant UI, crafted for a seamless dining experience.",
    image: "/ui.jpg",
    url: "https://restaurant-website-puce-theta.vercel.app/", // Project URL
  },
  {
    id: 4,
    title: "Travel And Tour Website",
    description: "A travel website that lets users explore and book trips to exciting destinations.",
    image: "/travel.jpg",
    url: "https://travel-website-teal-ten.vercel.app/", // Project URL
  },
  {
    id: 5,
    title: "Static Resume",
    description: "A clean and responsive static resume to showcase your professional experience.",
    image: "/myresume.webp",
    url: "https://my-resume-psi-five.vercel.app/", // Project URL
  },
  {
    id: 6,
    title: "Simple Calculator",
    description: "A basic yet stylish calculator offering essential arithmetic functions.",
    image: "/cal.jpg",
    url: "https://calculator-project-nu-six.vercel.app/", // Project URL
  },
];


export default function Projects() {
  return (
    <div className="bg-black min-h-screen py-16">
      <h1 className="text-white text-4xl font-extrabold text-center tracking-wide mb-16 mt-8 mx-14">
        My <span className="text-cyan-500">Projets</span>
      </h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-500"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h2 className="text-white text-2xl font-bold">{project.title}</h2>
              </div>
            </div>
            {/* Description Section */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#000000b3] backdrop-blur-md flex flex-col justify-center items-center transition-all duration-500">
              <h2 className="text-white text-xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-300 text-sm text-center px-4">{project.description}</p>
              <Link href={project.url} legacyBehavior>
                <a
                  className="mt-6 px-6 py-2 text-sm font-medium text-black bg-cyan-400 hover:bg-cyan-500 rounded-full shadow-md transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


