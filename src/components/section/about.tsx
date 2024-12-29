import React from "react";

export default function About() {
  return (
    <section className="bg-black text-gray-300 py-16 lg:px-6 mt-7">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/about.webp" // Replace with your image path
            alt="areeba"
            className="w-80 h-80 mx-auto md:mx-0 shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Content Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 mt-6">About <span className="text-cyan-500">Me</span></h2>
          <p className="text-lg leading-relaxed mb-6">
            Hello! I'm <span className="text-white font-semibold">Areeba Muhammad Nafees</span>, a passionate 
            <span className="text-cyan-400"> Web Developer</span> with expertise in building dynamic and user-friendly solutions. 
            I specialize in creating digital experiences that leave a lasting impression.
          </p>
          <p className="text-lg leading-relaxed mb-6"> HTML, CSS, JavaScript, TypeScript and modern frameworks like Tailwind and Next.js, I bring creativity and functionality together to craft seamless digital experiences.
            Over the past 1 years
            I thrive on solving complex challenges with creative thinking and a results-driven mindset.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, you can find me e.g., exploring nature, experimenting with new recipes, or geeking out over the latest tech trends.
          </p>

          {/* Call-to-Action */}
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-8 py-3 text-sm font-medium text-black bg-cyan-400 rounded-md shadow-md hover:bg-cyan-500 transition duration-300"
            >
              Let's Connect
            </a>
          </div>
          <blockquote className="bg-[#1f1f1f] text-gray-400 italic p-6 rounded-md mt-8">
  "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
</blockquote>

        </div>
      </div>
    </section>
  );
}
