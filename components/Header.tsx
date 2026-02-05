"use client";

import { Bell } from "lucide-react";
import Image from "next/image";

const BRAND_BLUE = "#026892";

const TopBar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-card border-b border-border">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/ur-logo.jpeg"
            alt="University of Rwanda Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="leading-tight">
            <h1 className="text-base font-bold" style={{ color: BRAND_BLUE }}>SAMPS UR</h1>
            <p className="text-xs text-gray-500">Dean Dashboard</p>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
              5
            </span>
          </button>

          {/* User Avatar */}
          <div className="flex items-center gap-2 pl-2">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Dean</p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#026892] flex items-center justify-center">
              <span className="font-bold text-white">D</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;