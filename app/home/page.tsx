"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/app/component/Sidebar"; // Adjust path as needed
import Header from "@/app/component/Header";   // Adjust path as needed
import {
  Target,
  Magnet,
  DollarSign,
  Rocket,
  ArrowRight,
  Zap,
  Clock,
  CheckCircle,
  Play,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Users,
  Search
} from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Trigger entry animation on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-[#F8F9FC] to-purple-50 flex font-sans text-slate-800 overflow-hidden">
      
      {/* 1. Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-8 md:ml-64 relative z-10 overflow-y-auto h-screen scroll-smooth">
        
        {/* 2. Header Component */}
        <Header mounted={mounted} />

        {/* Page Heading */}
        <div className={`mb-8 transition-all duration-700 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back, Alex</h2>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-gray-500">Your AI agent has been working. Here's your career progress.</p>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-100">
                <Sparkles size={10} fill="currentColor" /> AI Active
              </span>
            </div>
        </div>

        {/* ROW 1: Career Readiness Score */}
        <div className={`bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] transition-all duration-500 mb-8 flex flex-col md:flex-row gap-10 items-center group
          ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative w-44 h-44 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-indigo-50/50 flex items-center justify-center shadow-inner" 
                     style={{background: 'conic-gradient(#4f46e5 78%, #e0e7ff 0)'}}>
                    <div className="w-36 h-36 bg-white/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center shadow-[0_10px_30px_-10px_rgba(79,70,229,0.3)]">
                        <span className="text-5xl font-bold text-slate-900 tracking-tighter">78%</span>
                        <span className="text-xs text-indigo-500 font-bold uppercase tracking-widest mt-1">Ready</span>
                    </div>
                </div>
                <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full -z-10"></div>
            </div>
            
            <div className="flex-1 w-full space-y-7">
                <div className="flex justify-between items-end">
                    <h3 className="text-xl font-bold text-slate-900">Career Readiness Score</h3>
                    <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">View Details</button>
                </div>
                <div className="space-y-6">
                    <ProgressBar label="Profile Strength" percentage={90} color="bg-indigo-600" delay={0} />
                    <ProgressBar label="Applications" percentage={75} color="bg-violet-600" delay={100} />
                    <ProgressBar label="Interview Prep" percentage={70} color="bg-fuchsia-600" delay={200} />
                </div>
            </div>
        </div>

        {/* ROW 2: 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: AI Match Quality */}
          <GlassCard delay={200} mounted={mounted}>
             <div className="flex justify-between items-start mb-2">
                 <h3 className="text-gray-500 font-semibold text-sm uppercase tracking-wide">AI Match Quality</h3>
                 <div className="bg-indigo-50 p-2 rounded-xl text-indigo-600 shadow-sm">
                    <ArrowUpRight size={18} />
                 </div>
             </div>
             <div className="mb-4">
                <span className="text-5xl font-bold text-slate-900 tracking-tight">82%</span>
                <p className="text-xs text-gray-500 font-medium mt-1">avg across active applications</p>
             </div>
             <div className="flex items-center gap-2 mb-8 bg-green-50/80 p-2 rounded-lg border border-green-100 inline-flex">
                 <TrendingUp size={14} className="text-green-600"/>
                 <span className="text-green-700 font-bold text-xs">3 matches this week</span>
             </div>
             <div className="mt-auto flex items-end gap-1.5 h-16 opacity-80 hover:opacity-100 transition-opacity">
                 {/* Bar Chart Visualization */}
                 {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                    <div key={i} className="bg-gradient-to-t from-indigo-600 to-violet-400 w-full rounded-t-lg transition-all duration-500 hover:bg-indigo-500" 
                         style={{height: `${h}%`, transitionDelay: `${i * 50}ms`}}></div>
                 ))}
             </div>
          </GlassCard>

          {/* Card 2: Interview Success */}
          <GlassCard delay={300} mounted={mounted}>
             <div className="flex justify-between items-start mb-6">
                 <h3 className="text-gray-500 font-semibold text-sm uppercase tracking-wide">Success Predictor</h3>
                 <div className="bg-orange-50 p-2 rounded-xl text-orange-600 shadow-sm"><Target size={18} /></div>
             </div>
             <div className="space-y-6">
                <div className="group/item hover:bg-white/50 p-3 -mx-3 rounded-2xl transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">f</div>
                           <div>
                               <h4 className="font-bold text-slate-900 text-sm">Meta</h4>
                               <p className="text-[10px] text-gray-500 font-medium uppercase">Senior PM</p>
                           </div>
                        </div>
                        <div className="bg-green-100/80 text-green-700 text-xs font-bold px-2 py-1 rounded-lg border border-green-200">85%</div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 pl-11">
                        <span className="flex items-center gap-1"><Clock size={12} /> Tmrw 3 PM</span>
                        <span className="flex items-center gap-1 text-green-600 font-medium"><CheckCircle size={12} /> Prep Ready</span>
                    </div>
                </div>

                <div className="group/item hover:bg-white/50 p-3 -mx-3 rounded-2xl transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center font-bold text-xs shadow-md">G</div>
                           <div>
                               <h4 className="font-bold text-slate-900 text-sm">Google</h4>
                               <p className="text-[10px] text-gray-500 font-medium uppercase">Product Mgr</p>
                           </div>
                        </div>
                        <div className="bg-orange-100/80 text-orange-700 text-xs font-bold px-2 py-1 rounded-lg border border-orange-200">65%</div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 pl-11">
                        <span className="flex items-center gap-1"><Clock size={12} /> Dec 15</span>
                        <div className="flex items-center gap-1.5 text-orange-600 font-medium">
                            <div className="w-12 h-1.5 bg-orange-200 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[60%]"></div>
                            </div>
                            60%
                        </div>
                    </div>
                </div>
             </div>
          </GlassCard>

          {/* Card 3: Revenue Impact */}
          <GlassCard delay={400} mounted={mounted}>
             <div className="flex justify-between items-start mb-2">
                <h3 className="text-gray-500 font-semibold text-sm uppercase tracking-wide">Revenue Impact</h3>
                <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600 shadow-sm"><DollarSign size={18}/></div>
             </div>
             <div className="mb-8 relative">
                 <h3 className="text-5xl font-bold text-slate-900 tracking-tight mb-1 relative z-10">+$45K</h3>
                 <p className="text-xs text-gray-500 font-medium">potential annual increase</p>
                 <div className="absolute right-0 top-0 w-20 h-20 bg-emerald-400/20 blur-2xl rounded-full -z-0"></div>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl border border-white/60">
                   <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Target size={16} className="text-indigo-400"/> Matched Roles
                   </div>
                   <p className="font-bold text-slate-900">12</p>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl border border-white/60">
                   <div className="flex items-center gap-2 text-sm text-gray-600">
                      <TrendingUp size={16} className="text-emerald-400"/> Top Potential
                   </div>
                   <p className="font-bold text-emerald-600">$185K</p>
                </div>
             </div>
          </GlassCard>
        </div>

        {/* ROW 3: Agent Status & Insights */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          
          <GlassCard delay={500} mounted={mounted}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                 <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-2xl text-white shadow-lg shadow-green-500/20">
                    <Rocket size={24} fill="currentColor" />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 text-lg">AI Agent Status</h3>
                    <div className="flex items-center gap-2 mt-1 bg-green-50 px-2 py-0.5 rounded-full w-fit border border-green-100">
                       <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                       <span className="text-[10px] font-bold text-green-700 tracking-wide uppercase">Active & Hunting</span>
                    </div>
                 </div>
              </div>
              <div className="flex gap-2">
                 <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition"><SettingsIcon size={20}/></button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <ActionPill icon={<Target size={14}/>} label="Auto-Apply (5)" active />
              <ActionPill icon={<Clock size={14}/>} label="Mock Interview" />
              <ActionPill icon={<Users size={14}/>} label="Referrals" />
              <ActionPill icon={<Search size={14}/>} label="Scan Jobs" />
            </div>

            <div className="space-y-4">
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Live Activity Log</div>
               <div className="bg-white/40 rounded-2xl p-1 border border-white/50 space-y-1">
                   <ActivityItem icon={<Zap size={14} className="text-amber-500"/>} text="8 applications sent" time="2m ago" />
                   <ActivityItem icon={<Users size={14} className="text-blue-500"/>} text="3 referrals requested" time="15m ago" />
                   <ActivityItem icon={<Clock size={14} className="text-purple-500"/>} text="Interview scheduled: Meta" time="1h ago" />
               </div>
            </div>
          </GlassCard>

          <GlassCard delay={600} mounted={mounted}>
             <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                   <div className="bg-indigo-50 p-2.5 rounded-xl text-indigo-600">
                        <Sparkles size={20} fill="currentColor" />
                   </div>
                   <h3 className="font-bold text-slate-900 text-lg">AI Insights</h3>
                </div>
                <span className="text-[10px] text-gray-400 font-medium bg-white/50 px-2 py-1 rounded-lg border border-white/60">Updated 2m ago</span>
             </div>
             <div className="space-y-4">
                <InsightItem 
                   icon={<Zap size={16} className="text-white" />}
                   iconBg="bg-gradient-to-br from-amber-400 to-orange-500"
                   text={<span><span className="font-bold text-slate-800">Amazon PM role</span> has 3x response rate for profiles like yours</span>}
                   highlight="High Signal" 
                   highlightColor="text-orange-600 bg-orange-50 border-orange-100"
                />
                <InsightItem 
                   icon={<TrendingUp size={16} className="text-white" />}
                   iconBg="bg-gradient-to-br from-blue-400 to-indigo-500"
                   text={<span><span className="font-bold text-slate-800">Target Companies</span> are hiring 30% more this week</span>}
                   highlight="Market Trend" 
                   highlightColor="text-blue-600 bg-blue-50 border-blue-100"
                />
                <InsightItem 
                   icon={<Target size={16} className="text-white" />}
                   iconBg="bg-gradient-to-br from-emerald-400 to-teal-500"
                   text={<span>Your <span className="font-bold text-slate-800">profile strength</span> increased by 12% after certifications</span>}
                   highlight="Growth" 
                   highlightColor="text-emerald-600 bg-emerald-50 border-emerald-100"
                />
             </div>
          </GlassCard>
        </div>

        {/* ROW 4: Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8">
          {/* Skill Gap Analyzer */}
          <GlassCard delay={700} mounted={mounted}>
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink-50 p-2.5 rounded-xl text-pink-600 shadow-sm"><Target size={18}/></div>
                <h3 className="font-bold text-slate-900">Skill Gap Analyzer</h3>
             </div>
             <div className="space-y-3 relative z-10">
                <SkillItem name="GraphQL" match="+15%" jobs="23" delay={0} />
                <SkillItem name="System Design" match="+12%" jobs="18" delay={100} />
                <SkillItem name="SQL Analytics" match="+8%" jobs="14" delay={200} />
             </div>
             <button className="group w-full mt-6 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                <Play size={16} fill="currentColor" /> Start Prep
                <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
             </button>
          </GlassCard>

          {/* Intelligent Cooldown */}
          <GlassCard delay={800} mounted={mounted}>
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 shadow-sm"><Clock size={18}/></div>
                <h3 className="font-bold text-slate-900">Intelligent Cooldown</h3>
                <span className="ml-auto bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wide border border-orange-100">High Pace</span>
             </div>
             <div className="grid grid-cols-3 gap-2 text-center mb-6 bg-white/40 p-3 rounded-2xl border border-white/50">
               <div>
                  <div className="text-2xl font-bold text-slate-900">8</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Today</div>
               </div>
               <div className="border-x border-gray-200/50">
                  <div className="text-2xl font-bold text-slate-900">10</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Limit</div>
               </div>
               <div>
                  <div className="text-2xl font-bold text-slate-900">9 AM</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Best Time</div>
               </div>
             </div>
             <div className="mb-2 flex justify-between text-xs font-medium">
                <span className="text-gray-500">Velocity</span>
                <span className="text-orange-500 font-bold">40% above optimal</span>
             </div>
             <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden mb-4 shadow-inner">
                <div className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full w-[40%] shadow-lg"></div>
             </div>
             <p className="text-xs text-slate-600 bg-orange-50/50 p-3 rounded-xl border border-orange-100/50 leading-relaxed backdrop-blur-sm">
               You're applying faster than optimal. Recommendation: <span className="font-bold text-orange-700">Take a break tomorrow.</span>
             </p>
          </GlassCard>

          {/* Magnet Tokens */}
          <GlassCard delay={900} mounted={mounted} className="relative overflow-hidden">
             {/* Decorative Background Glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl rounded-full -z-0"></div>

             <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-3">
                   <div className="bg-yellow-50 p-2.5 rounded-xl text-yellow-600 shadow-sm"><Magnet size={18}/></div>
                   <h3 className="font-bold text-slate-900">Magnet Tokens</h3>
                </div>
                <button className="text-xs font-bold text-indigo-600 flex items-center hover:underline bg-indigo-50 px-2 py-1 rounded-lg">View All <ArrowRight size={12} className="ml-1"/></button>
             </div>
             <div className="flex items-baseline gap-2 mb-1 relative z-10">
                <span className="text-4xl font-bold text-slate-900 tracking-tight">1,250</span>
             </div>
             <p className="text-xs font-medium text-green-600 mb-6 bg-green-50 inline-block px-2 py-0.5 rounded-md border border-green-100 relative z-10">+275 this week</p>
             <div className="space-y-3 relative z-10">
                <TokenItem label="Referral accepted" amount="+150" />
                <TokenItem label="Application success" amount="+50" />
                <TokenItem label="Interview completed" amount="+75" />
             </div>
             <div className="mt-6 p-3 bg-gradient-to-r from-amber-100/50 to-yellow-50/50 border border-amber-100 rounded-xl relative z-10 backdrop-blur-sm">
               <p className="text-xs text-amber-800 font-medium text-center flex items-center justify-center gap-1">
                 <Sparkles size={12}/> Unlock premium with 500 more tokens
               </p>
             </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}

/* --- Reusable Components (Keep in Home or move to separate utility files) --- */

// Helper to fix the Settings icon conflict
const SettingsIcon = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);

function GlassCard({ children, delay = 0, mounted, className = "" }: { children: React.ReactNode, delay?: number, mounted: boolean, className?: string }) {
    return (
        <div className={`bg-white/60 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col group ${className} ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    )
}

function ProgressBar({ label, percentage, color, delay }: { label: string, percentage: number, color: string, delay: number }) {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => setWidth(percentage), 100 + delay);
        return () => clearTimeout(timer);
    }, [percentage, delay]);

    return (
        <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-500 w-28 shrink-0">{label}</span>
            <div className="flex-1 h-2.5 bg-gray-100/80 rounded-full overflow-hidden relative shadow-inner">
                <div className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${color} shadow-lg`} 
                     style={{width: `${width}%`}}></div>
            </div>
            <span className="text-sm font-bold text-slate-900 w-8 text-right">{percentage}%</span>
        </div>
    )
}

function ActionPill({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
   return (
      <button className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[11px] font-bold border transition-all duration-300 hover:-translate-y-0.5 ${
         active 
         ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/20" 
         : "bg-white/50 text-slate-600 border-white/60 hover:bg-white hover:border-white hover:shadow-md"
      }`}>
         {icon}
         {label}
      </button>
   )
}

function ActivityItem({ icon, text, time }: { icon: React.ReactNode, text: string, time: string }) {
   return (
      <div className="flex items-center gap-3 text-sm group cursor-pointer hover:bg-white/60 p-2 rounded-xl transition-all duration-200">
         <div className="bg-gray-50 p-1.5 rounded-lg shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">{icon}</div>
         <div className="flex-1">
             <p className="text-slate-700 font-medium leading-snug">{text}</p>
         </div>
         <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">{time}</span>
      </div>
   )
}

function InsightItem({ icon, iconBg, text, highlight, highlightColor }: { icon: React.ReactNode, iconBg: string, text: React.ReactNode, highlight: string, highlightColor: string }) {
   return (
      <div className="flex justify-between items-start gap-4 group cursor-pointer p-4 -mx-2 rounded-2xl hover:bg-white/40 border border-transparent hover:border-white/50 transition-all duration-300">
         <div className="flex gap-4 items-start">
             <div className={`mt-0.5 p-2 rounded-xl shadow-md ${iconBg} group-hover:scale-110 transition-transform duration-300`}>{icon}</div>
             <div className="space-y-1.5">
                 <p className="text-sm text-slate-600 leading-snug">{text}</p>
                 <div className={`text-[10px] font-bold inline-block px-2 py-0.5 rounded-md border ${highlightColor}`}>
                    {highlight}
                 </div>
             </div>
         </div>
         <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
            <ArrowRight size={12} className="text-indigo-600" />
         </div>
      </div>
   )
}

function SkillItem({ name, match, jobs, delay }: { name: string, match: string, jobs: string, delay: number }) {
   return (
      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/40 border border-white/60 hover:border-indigo-200 hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer group hover:-translate-x-1"
           style={{animationDelay: `${delay}ms`}}>
         <div>
            <div className="font-bold text-sm text-slate-900 group-hover:text-indigo-700 transition-colors">{name}</div>
            <div className="text-[10px] text-gray-500 font-medium mt-0.5">Unlocks {jobs} opportunities</div>
         </div>
         <div className="text-xs font-bold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-lg border border-emerald-100 shadow-sm">{match}</div>
      </div>
   )
}

function TokenItem({ label, amount }: { label: string, amount: string }) {
   return (
      <div className="flex justify-between items-center text-sm p-2 hover:bg-white/40 rounded-lg transition-colors">
         <span className="text-slate-600 font-medium">{label}</span>
         <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs border border-emerald-100">{amount}</span>
      </div>
   )
}