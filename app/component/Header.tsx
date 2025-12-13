// components/Header.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Search, Bell, Sun, Moon, ChevronDown } from "lucide-react";

export default function Header({ mounted }: { mounted: boolean }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme on mount
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <header
      className={`relative z-40 flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 transition-all duration-700 ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
    >
      {/* ------------------------------------------------
         MOBILE HEADER: LEFT ICONS + RIGHT PROFILE
      ------------------------------------------------ */}
      <div className="w-full flex items-center justify-between md:hidden">
        {/* LEFT (Sun/Moon + Bell) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 
            dark:hover:text-primary hover:bg-white dark:hover:bg-accent rounded-full 
            transition-all shadow-sm border border-transparent hover:border-slate-100 
            dark:hover:border-border hover:shadow-md"
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Bell */}
          <button className="p-2.5 text-gray-400 dark:text-gray-400 hover:text-indigo-600 
          dark:hover:text-primary hover:bg-white dark:hover:bg-accent rounded-full transition-all 
          relative shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-border 
          hover:shadow-md">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full 
            border-2 border-[#F8F9FC] dark:border-background"></span>
          </button>
        </div>

        {/* RIGHT (PROFILE ICON) */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 cursor-pointer focus:outline-none p-1.5 pr-3 rounded-full 
            hover:bg-white dark:hover:bg-accent transition-all"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-full 
            flex items-center justify-center text-sm font-bold text-white shadow-md ring-2 
            ring-white dark:ring-border transition-all">
              AM
            </div>
            <ChevronDown
              size={16}
              className={`text-gray-400 dark:text-muted-foreground transition-transform duration-300 ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProfileOpen && (
            <DropdownMenu />
          )}
        </div>
      </div>

      {/* ------------------------------------------------
         DESKTOP HEADER (unchanged): SEARCH LEFT, ICONS RIGHT
      ------------------------------------------------ */}
      <div className="hidden md:flex md:w-auto md:order-2 items-center gap-3 sm:gap-4">

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 
          dark:hover:text-primary hover:bg-white dark:hover:bg-accent rounded-full transition-all 
          shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-border 
          hover:shadow-md"
        >
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Notifications */}
        <button className="p-2.5 text-gray-400 dark:text-gray-400 hover:text-indigo-600 
        dark:hover:text-primary hover:bg-white dark:hover:bg-accent rounded-full transition-all 
        relative shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-border 
        hover:shadow-md">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full 
          border-2 border-[#F8F9FC] dark:border-background"></span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200 dark:bg-border mx-1"></div>

        {/* Desktop profile */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 cursor-pointer focus:outline-none p-1.5 pr-3 rounded-full 
            hover:bg-white dark:hover:bg-accent transition-all"
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-full 
            flex items-center justify-center text-sm font-bold text-white shadow-md ring-2 
            ring-white dark:ring-border transition-all">
              AM
            </div>
            <span className="hidden md:block text-sm font-bold text-slate-700 dark:text-foreground">
              Alex
            </span>
            <ChevronDown
              size={16}
              className={`text-gray-400 dark:text-muted-foreground transition-transform duration-300 ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProfileOpen && (
            <DropdownMenu />
          )}
        </div>
      </div>

      {/* SEARCH BAR — Always below on mobile, left on desktop */}
      <div className="relative w-full md:max-w-md md:order-1 group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-muted-foreground">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search jobs, companies..."
          className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-input border border-slate-200/60 
          dark:border-border rounded-2xl text-sm font-medium text-slate-700 dark:text-foreground 
          placeholder:text-slate-400 dark:placeholder:text-muted-foreground focus:outline-none 
          focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-ring/30 focus:border-indigo-500 
          dark:focus:border-ring transition-all shadow-sm"
        />
      </div>
    </header>
  );
}

function DropdownMenu() {
  return (
    <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-popover rounded-2xl shadow-xl 
    border border-slate-100 dark:border-border py-2 z-50">
      <div className="px-5 py-3 border-b border-gray-100 dark:border-border mb-1">
        <p className="text-sm font-bold text-slate-900 dark:text-popover-foreground">
          Alex Morgan
        </p>
        <p className="text-xs text-gray-500 dark:text-muted-foreground">
          alex@example.com
        </p>
      </div>

      <DropdownItem label="View Profile" href="/profile" />
      <DropdownItem label="Account Settings" href="/settings" />
      <DropdownItem label="Billing & Plan" href="/billing" />
      <DropdownItem label="Help Center" href="/help" />

      <div className="h-[1px] bg-gray-50 dark:bg-border my-1"></div>

      <DropdownItem label="Sign Out" isDanger href="/logout" />
    </div>
  );
}

function DropdownItem({ label, isDanger = false, href = "#" }) {
  return (
    <a
      href={href}
      className={`block px-5 py-2.5 text-sm font-medium transition-all duration-200 border-l-2 border-transparent hover:border-l-2 ${
        isDanger
          ? "text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-500"
          : "text-slate-600 dark:text-muted-foreground hover:bg-indigo-50/50 dark:hover:bg-accent hover:text-indigo-700 dark:hover:text-accent-foreground hover:border-indigo-500"
      }`}
    >
      {label}
    </a>
  );
}

