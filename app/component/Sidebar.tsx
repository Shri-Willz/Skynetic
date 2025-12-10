"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  Users,
  Target,
  BarChart2,
  Magnet,
  DollarSign,
  HelpCircle,
  Rocket,
  MoreHorizontal
} from "lucide-react";

export default function Sidebar() {
  // Get the current path to determine active state
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white/70 backdrop-blur-2xl border-r border-white/50 hidden md:flex flex-col p-6 gap-8 fixed h-full z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-3 px-2">
        <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/20">
          <Rocket size={20} fill="currentColor" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">Skynetic</h1>
          <p className="text-[10px] text-gray-500 font-medium tracking-wide">Accelerating Careers</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {/* Updated Home Link to point to /home */}
        <SidebarItem 
            icon={<Home size={20} />} 
            label="Home" 
            href="/home" 
            active={pathname === "/home"} 
        />
        
        <SidebarItem 
            icon={<Search size={20} />} 
            label="Job Discovery" 
            href="/jobs" 
            count="47"
            active={pathname === "/jobs"} 
        />
        
        <SidebarItem 
            icon={<Users size={20} />} 
            label="Referrals" 
            href="/referrals" 
            active={pathname === "/referrals"} 
        />
        
        <SidebarItem 
            icon={<Target size={20} />} 
            label="Interview Prep" 
            href="/interview" 
            active={pathname === "/interview"} 
        />
        
        <SidebarItem 
            icon={<BarChart2 size={20} />} 
            label="Analytics" 
            href="/analytics" 
            active={pathname === "/analytics"} 
        />
        
        <SidebarItem 
            icon={<Magnet size={20} />} 
            label="Magnet" 
            href="/magnet" 
            active={pathname === "/magnet"} 
        />
        
        <SidebarItem 
            icon={<DollarSign size={20} />} 
            label="Earnings" 
            href="/earnings" 
            active={pathname === "/earnings"} 
        />
        
        <SidebarItem 
            icon={<HelpCircle size={20} />} 
            label="Help" 
            href="/help" 
            active={pathname === "/help"} 
        />
      </nav>

      <div className="flex items-center gap-3 px-3 py-3 mt-auto bg-white/50 rounded-2xl border border-white/60 hover:bg-white/80 transition-colors cursor-pointer group">
        <div className="w-9 h-9 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md ring-2 ring-white/50">
          AM
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-slate-900 truncate group-hover:text-indigo-700 transition-colors">Alex Morgan</p>
          <p className="text-xs text-gray-500 truncate">alex@example.com</p>
        </div>
        <MoreHorizontal size={16} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
      </div>
    </aside>
  );
}

// Sub-component for Sidebar Items
function SidebarItem({ icon, label, active = false, count, href = "#" }: { icon: React.ReactNode, label: string, active?: boolean, count?: string, href?: string }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
        active
          ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
          : "text-gray-500 hover:bg-white/50 hover:text-slate-900 hover:shadow-sm"
      }`}
    >
      <span className={`relative z-10 ${active ? "text-white" : "text-gray-400 group-hover:text-indigo-600 transition-colors"}`}>
         {icon}
      </span>
      <span className={`text-sm relative z-10 ${active ? "font-bold" : "font-medium"}`}>{label}</span>
      {count && (
        <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full relative z-10 ${
            active ? "bg-white/20 text-white" : "bg-indigo-50 text-indigo-600"
        }`}>
          {count}
        </span>
      )}
    </Link>
  );
}