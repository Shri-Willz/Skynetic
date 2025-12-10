"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  Sun,
  ChevronDown
} from "lucide-react";

export default function Header({ mounted }: { mounted: boolean }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    // 1. ADDED 'relative z-40' HERE. This makes the header sit on top of the "Start Practice" button.
    <header className={`relative z-40 flex flex-col md:flex-row justify-between items-center mb-10 gap-4 transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
      
      {/* Search Bar */}
      <div className="relative w-full md:max-w-md group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search jobs, companies..."
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200/60 rounded-2xl text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm group-hover:shadow-md"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button className="p-2.5 text-gray-400 hover:text-indigo-600 hover:bg-white rounded-full transition-all shadow-sm border border-transparent hover:border-slate-100 hover:shadow-md">
          <Sun size={20} />
        </button>
        
        {/* Notifications */}
        <button className="p-2.5 text-gray-400 hover:text-indigo-600 hover:bg-white rounded-full transition-all relative shadow-sm border border-transparent hover:border-slate-100 hover:shadow-md">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#F8F9FC]"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
        
        {/* Profile Dropdown Section */}
        <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 cursor-pointer focus:outline-none p-1.5 pr-3 rounded-full hover:bg-white border border-transparent hover:border-slate-100 transition-all hover:shadow-sm group"
            >
                <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md ring-2 ring-white group-hover:ring-indigo-50 transition-all">
                    AM
                </div>
                <span className="hidden md:block text-sm font-bold text-slate-700 group-hover:text-indigo-700 transition-colors">Alex</span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu - Includes z-50 to stay on top */}
            {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-200 slide-in-from-top-2">
                    {/* User Info Header */}
                    <div className="px-5 py-3 border-b border-gray-100 mb-1">
                        <p className="text-sm font-bold text-slate-900">Alex Morgan</p>
                        <p className="text-xs text-gray-500">alex@example.com</p>
                    </div>
                    
                    {/* The 5 Menu Options */}
                    <DropdownItem label="View Profile" href="/profile" />
                    <DropdownItem label="Account Settings" href="/settings" />
                    <DropdownItem label="Billing & Plan" href="/billing" />
                    <DropdownItem label="Help Center" href="/help" />
                    
                    {/* Separator Line */}
                    <div className="h-[1px] bg-gray-50 my-1"></div>
                    
                    {/* Sign Out (Red) */}
                    <DropdownItem label="Sign Out" isDanger href="/logout" />
                </div>
            )}
        </div>
      </div>
    </header>
  );
}

// Sub-component for Dropdown Items
function DropdownItem({ label, isDanger = false, href = "#" }: { label: string, isDanger?: boolean, href?: string }) {
    return (
        <a 
          href={href} 
          className={`block px-5 py-2.5 text-sm font-medium transition-all duration-200 border-l-2 border-transparent hover:border-l-2 ${
            isDanger 
            ? "text-red-500 hover:bg-red-50 hover:border-red-500" 
            : "text-slate-600 hover:bg-indigo-50/50 hover:text-indigo-700 hover:border-indigo-500"
        }`}>
            {label}
        </a>
    )
}