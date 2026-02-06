"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-3 sm:py-2 mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-xs sm:text-sm text-[#1a2533]">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>Version 2.1.0</span>
            <span className="mx-1 text-gray-300">•</span>
            <a href="#" className="hover:text-[#026892] transition-colors">Support</a>
            <span className="mx-1 text-gray-300">•</span>
            <a href="#" className="hover:text-[#026892] transition-colors">Terms</a>
            <span className="mx-1 text-gray-300">•</span>
            <a href="#" className="hover:text-[#026892] transition-colors">Privacy</a>
          </div>
          <div className="text-gray-400">
            Last Updated: Aug 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;