

import Link from "next/link";
import React from "react";
import { FaAngleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] border-t border-t-[#33353F] text-white">
      {/* Footer Content */}
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-center md:text-left text-sm">
          Copyright © 2024 <span className="font-semibold">@Areeba`s Portfolio</span> | All Rights Reserved.
        </p>
        
        <Link
          href="#home"
          aria-label="Back to top"
          className="flex justify-center items-center bg-cyan-400 h-10 w-10 rounded-md hover:bg-cyan-500 transition duration-300"
        >
          <FaAngleUp size={20} className="text-gray-800" />
        </Link>
      </div>
    </footer>
  );
}



 