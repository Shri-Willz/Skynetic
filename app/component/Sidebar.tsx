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
  MoreHorizontal,
} from "lucide-react";

// MAIN COMPONENT
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* --------------------------------------
        DESKTOP SIDEBAR (md and up)
      --------------------------------------- */}
      <aside className="
        hidden md:flex 
        w-60 lg:w-64 
        bg-white/70 backdrop-blur-2xl 
        border-r border-white/50 
        flex-col 
        p-5 lg:p-6 
        gap-8 
        fixed h-full 
        z-20 
        shadow-[4px_0_24px_rgba(0,0,0,0.04)]
      ">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2">
          <div className="
            w-9 h-9 lg:w-10 lg:h-10 
            bg-gradient-to-br from-slate-900 to-slate-700
            text-white rounded-xl 
            flex items-center justify-center 
            shadow-lg shadow-slate-900/20
          ">
            <Rocket size={20} />
          </div>

          <div>
            <h1 className="text-lg lg:text-xl font-bold text-slate-900">
              Skynetic
            </h1>
            <p className="text-[10px] text-gray-500">Accelerating Careers</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <SidebarItem icon={<Home size={20} />} label="Home" href="/home" active={pathname === "/home"} />
          <SidebarItem icon={<Search size={20} />} label="Job Discovery" href="/jobs" count="47" active={pathname === "/jobs"} />
          <SidebarItem icon={<Users size={20} />} label="Referrals" href="/referrals" active={pathname === "/referrals"} />
          <SidebarItem icon={<Target size={20} />} label="Interview Prep" href="/interview" active={pathname === "/interview"} />
          <SidebarItem icon={<BarChart2 size={20} />} label="Analytics" href="/analytics" active={pathname === "/analytics"} />
          <SidebarItem icon={<Magnet size={20} />} label="Magnet" href="/magnet" active={pathname === "/magnet"} />
          <SidebarItem icon={<DollarSign size={20} />} label="Earnings" href="/earnings" active={pathname === "/earnings"} />
          <SidebarItem icon={<HelpCircle size={20} />} label="Help" href="/help" active={pathname === "/help"} />
        </nav>

        {/* Profile */}
        <div className="
          flex items-center gap-3 
          px-3 py-3 
          mt-auto 
          bg-white/50 rounded-2xl 
          border border-white/60 
          hover:bg-white/80 
          transition cursor-pointer group
        ">
          <div className="
            w-9 h-9 
            bg-gradient-to-tr from-indigo-600 to-violet-600 
            rounded-full text-xs font-bold 
            flex items-center justify-center text-white 
            shadow-md ring-2 ring-white/50
          ">
            AM
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-700">
              Alex Morgan
            </p>
            <p className="text-xs text-gray-500">alex@example.com</p>
          </div>
          <MoreHorizontal size={16} className="text-gray-400 group-hover:text-indigo-600" />
        </div>
      </aside>

      {/* --------------------------------------
        MOBILE BOTTOM NAV (sm and down)
      --------------------------------------- */}
      <nav
        className="
          fixed bottom-0 left-0 right-0 
          bg-white/80 backdrop-blur-xl 
          border-t border-slate-200/60 
          shadow-[0_-4px_20px_rgba(0,0,0,0.04)]
          flex md:hidden 
          items-center justify-between 
          px-4 py-2.5 
          z-50
        "
      >
        <MobileItem icon={<Home size={22} />} label="Home" href="/home" active={pathname === "/home"} />
        <MobileItem icon={<Search size={22} />} label="Jobs" href="/jobs" active={pathname === "/jobs"} />
        <MobileItem icon={<Users size={22} />} label="Referrals" href="/referrals" active={pathname === "/referrals"} />
        <MobileItem icon={<Target size={22} />} label="Prep" href="/interview" active={pathname === "/interview"} />
        <MobileItem icon={<BarChart2 size={22} />} label="Stats" href="/analytics" active={pathname === "/analytics"} />
      </nav>
    </>
  );
}

/* ---------------------------------------------------------
   SIDEBAR ITEM (Desktop / Tablet)
--------------------------------------------------------- */
function SidebarItem({
  icon,
  label,
  active = false,
  count,
  href = "#",
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  count?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 
        px-4 py-3 
        rounded-2xl 
        transition-all duration-300 relative
        ${active
          ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
          : "text-gray-500 hover:bg-white/60 hover:text-slate-900 hover:shadow-sm"}
      `}
    >
      <span className={active ? "text-white" : "text-gray-400 group-hover:text-indigo-600"}>
        {icon}
      </span>

      <span className={`text-sm ${active ? "font-semibold" : "font-medium"}`}>
        {label}
      </span>

      {count && (
        <span
          className={`
            ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full
            ${active ? "bg-white/20 text-white" : "bg-indigo-50 text-indigo-600"}
          `}
        >
          {count}
        </span>
      )}
    </Link>
  );
}

/* ---------------------------------------------------------
   MOBILE BOTTOM NAV ITEM
--------------------------------------------------------- */
function MobileItem({
  icon,
  label,
  href,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-1 w-full"
    >
      <span
        className={`${
          active ? "text-indigo-600" : "text-gray-400"
        } transition-colors`}
      >
        {icon}
      </span>
      <span
        className={`
          text-[10px] font-medium
          ${active ? "text-indigo-600" : "text-gray-500"}
        `}
      >
        {label}
      </span>
    </Link>
  );
}
