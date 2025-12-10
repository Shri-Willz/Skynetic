"use client";

import React, { useState, useEffect } from "react";
// 1. Import your custom components
import Sidebar from "@/app/component/Sidebar"; // Adjust path as needed
import Header from "@/app/component/Header"; 

// 2. Import only the icons used in the page content
import {
  Play,
  Clock,
  Calendar,
  Mic,
  Video,
  Code,
  Layout,
  ArrowRight,
  Star,
  ChevronRight
} from "lucide-react";

export default function InterviewPrepPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-[#F8F9FC] to-purple-50 flex font-sans text-slate-800 overflow-hidden">
      
      {/* 3. Reusable Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 md:ml-64 relative z-10 overflow-y-auto h-screen scroll-smooth">
        
        {/* 4. Reusable Header (Pass 'mounted' for animation) */}
        <Header mounted={mounted} />

        {/* Page Title Section */}
        <div className={`flex justify-between items-end mb-8 transition-all duration-700 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Interview Prep</h2>
                <p className="text-gray-500 mt-1">Practice makes perfect. Prepare for your upcoming interviews.</p>
            </div>
            <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                <Play size={16} fill="currentColor" /> Start Practice
            </button>
        </div>

        {/* SECTION 1: Upcoming Interviews */}
        <div className="mb-10">
            <h3 className={`text-lg font-bold text-slate-900 mb-4 transition-all duration-700 delay-150 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                Upcoming Interviews
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Google Card */}
                <GlassCard delay={200} mounted={mounted}>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                                {/* Google G Logo simulation */}
                                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">G</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">Google</h4>
                                <p className="text-sm text-gray-500">Senior PM</p>
                            </div>
                        </div>
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-lg border border-gray-200/50">Technical</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Clock size={16} /> <span>Tomorrow, 3:00 PM</span>
                    </div>

                    <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                            <span className="text-gray-500">Prep Score</span>
                            <span className="text-slate-900">75%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-900 w-[75%] rounded-full shadow-sm"></div>
                        </div>
                    </div>
                </GlassCard>

                {/* Meta Card */}
                <GlassCard delay={300} mounted={mounted}>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-sm text-white font-bold text-xl">
                                ∞
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">Meta</h4>
                                <p className="text-sm text-gray-500">Product Lead</p>
                            </div>
                        </div>
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-lg border border-gray-200/50">Behavioral</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Calendar size={16} /> <span>Jan 25, 2:00 PM</span>
                    </div>

                    <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                            <span className="text-gray-500">Prep Score</span>
                            <span className="text-slate-900">60%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-900 w-[60%] rounded-full shadow-sm"></div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>

        {/* SECTION 2: Practice by Category */}
        <div className="mb-10">
            <h3 className={`text-lg font-bold text-slate-900 mb-4 transition-all duration-700 delay-400 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                Practice by Category
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <CategoryCard 
                    icon={<Mic size={24} />} 
                    title="Behavioral" 
                    desc="STAR method, leadership, teamwork" 
                    count="50 questions" 
                    delay={450} mounted={mounted}
                />
                <CategoryCard 
                    icon={<Video size={24} />} 
                    title="Technical" 
                    desc="Product design, metrics, analytics" 
                    count="45 questions" 
                    delay={500} mounted={mounted}
                />
                <CategoryCard 
                    icon={<Code size={24} />} 
                    title="Coding" 
                    desc="Algorithms, data structures" 
                    count="30 questions" 
                    delay={550} mounted={mounted}
                />
                <CategoryCard 
                    icon={<Layout size={24} />} 
                    title="System Design" 
                    desc="Architecture, scalability" 
                    count="25 questions" 
                    delay={600} mounted={mounted}
                />
            </div>
        </div>

        {/* SECTION 3: Recent Practice Sessions */}
        <div className="pb-8">
            <h3 className={`text-lg font-bold text-slate-900 mb-4 transition-all duration-700 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                Recent Practice Sessions
            </h3>

            <div className={`bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2rem] overflow-hidden shadow-sm transition-all duration-700 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <PracticeSessionItem 
                    title="Behavioral Interview Practice" 
                    meta="5 questions • 25 mins" 
                    rating="8.5/10" 
                    date="2 days ago" 
                    isLast={false}
                />
                <PracticeSessionItem 
                    title="Technical Interview Practice" 
                    meta="3 questions • 15 mins" 
                    rating="9.0/10" 
                    date="3 days ago" 
                    isLast={false}
                />
                <PracticeSessionItem 
                    title="Behavioral Interview Practice" 
                    meta="5 questions • 25 mins" 
                    rating="8.5/10" 
                    date="4 days ago" 
                    isLast={true}
                />
            </div>
        </div>

      </main>
    </div>
  );
}

/* --- Helper Components for THIS Page Only --- */

function GlassCard({ children, delay = 0, mounted, className = "" }) {
    return (
        <div className={`bg-white/60 backdrop-blur-xl border border-white/60 p-6 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col group ${className} ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    )
}

function CategoryCard({ icon, title, desc, count, delay, mounted }) {
    return (
        <div className={`bg-white/60 backdrop-blur-xl border border-white/60 p-6 rounded-[1.5rem] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: `${delay}ms` }}>
             
             <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight size={18} className="text-gray-400" />
             </div>

             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-700 mb-4 border border-gray-100 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                {icon}
             </div>
             
             <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
             <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{desc}</p>
             
             <span className="text-[10px] font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                {count}
             </span>
        </div>
    )
}

function PracticeSessionItem({ title, meta, rating, date, isLast }) {
    return (
        <div className={`p-5 flex items-center gap-4 hover:bg-white/50 transition-colors cursor-pointer group ${!isLast ? 'border-b border-gray-100/50' : ''}`}>
            <div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center text-slate-600 shadow-sm border border-gray-100 group-hover:scale-105 transition-transform">
                <Mic size={18} />
            </div>
            <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{meta}</p>
            </div>
            
            <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1 text-orange-500 font-bold text-xs">
                    <Star size={12} fill="currentColor" /> {rating}
                </div>
                <span className="text-[10px] text-gray-400">{date}</span>
            </div>
            
            <div className="pl-2">
                <ChevronRight size={18} className="text-gray-300 group-hover:text-indigo-600 transition-colors" />
            </div>
        </div>
    )
}