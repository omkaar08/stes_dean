"use client";

import { Bell, Menu } from "lucide-react";
import Image from "next/image";

const BRAND_BLUE = "#026892";

interface TopBarProps {
  onMenuClick?: () => void;
}

const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <div className="fixed top-0 z-50 w-full bg-card border-b border-border">
      <div className="flex items-center justify-between px-3 sm:px-4 lg:px-8 h-14 sm:h-16">
        {/* Left: Menu + Brand */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Menu Button */}
          <button onClick={onMenuClick} className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          
          <Image
            src="/images/ur-logo.jpeg"
            alt="University of Rwanda Logo"
            width={32}
            height={32}
            className="rounded-full sm:w-10 sm:h-10"
          />
          <div className="leading-tight">
            <h1 className="text-sm sm:text-base font-bold" style={{ color: BRAND_BLUE }}>SAMPS UR</h1>
            <p className="text-[10px] sm:text-xs text-gray-500">Dean Dashboard</p>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
          {/* Dropdowns */}
          <select className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-300 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>2025-2026</option>
            <option>2024-2025</option>
            <option>2023-2024</option>
          </select>
          <select className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-300 rounded-lg text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Semester One</option>
            <option>Semester Two</option>
          </select>
          
          {/* Notifications */}
          <button className="relative p-1.5 sm:p-2 hover:bg-secondary rounded-lg transition-colors">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[9px] sm:text-xs rounded-full flex items-center justify-center font-medium">
              3
            </span>
          </button>

          {/* User Avatar */}
          <div className="flex items-center gap-1.5 sm:gap-2 pl-1">
            <div className="text-right hidden xl:block">
              <p className="text-xs font-medium text-foreground">Dr. Rosny</p>
              <p className="text-[10px] text-muted-foreground">Dean</p>
            </div>
            <div className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full bg-[#026892] flex items-center justify-center">
              <span className="font-bold text-white text-xs sm:text-sm">D</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;