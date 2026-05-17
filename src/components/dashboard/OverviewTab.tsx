import { motion } from 'framer-motion';
import { Play, Flame, Book, BrainCircuit, Trophy, Star, Activity, Lightbulb } from 'lucide-react';

export default function OverviewTab() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="bg-white dark:bg-[#1e293b] rounded-[2rem] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden"
      >
        {/* Decorative gradient overlay */}
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none"></div>

        <div className="z-10 w-full">
          <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
            Good Day, <span className="text-blue-600 dark:text-blue-400">Student!</span> 👋
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">
            You're on a roll. Keep learning to earn your Cyber Champion certificate!
          </p>
          
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md shadow-blue-500/20 hover:shadow-lg">
              <Play className="w-4 h-4 fill-current" />
              <span>Continue Learning</span>
            </button>
            <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2.5 rounded-full font-bold transition-all">
              <BrainCircuit className="w-4 h-4" />
              <span>Take a Quiz</span>
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-0 z-10 shrink-0">
          <div className="bg-orange-50 dark:bg-orange-900/20 px-6 py-4 rounded-2xl border border-orange-100 dark:border-orange-800/50 flex items-center gap-4">
            <div className="text-orange-500 bg-white dark:bg-orange-950 p-2 rounded-full shadow-sm">
              <Flame className="w-8 h-8 fill-current" />
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 leading-none">14</p>
              <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mt-1">Day Streak</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'LESSONS DONE', value: '12', icon: <Book className="w-6 h-6 text-blue-500" />, badge: '+2', colorClass: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' },
          { label: 'QUIZZES PASSED', value: '9', icon: <BrainCircuit className="w-6 h-6 text-purple-500" />, badge: '85%', colorClass: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' },
          { label: 'BADGES EARNED', value: '6', icon: <Trophy className="w-6 h-6 text-green-500" />, badge: '+1 New', colorClass: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' },
          { label: 'CYBER POINTS', value: '2,450', icon: <Star className="w-6 h-6 text-yellow-500 fill-current" />, badge: '#42 Global', colorClass: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 * (i + 1) }}
            className="bg-white dark:bg-[#1e293b] p-5 rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl ${stat.colorClass.split(' ').slice(2).join(' ')}`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-md ${stat.colorClass}`}>
                {stat.badge}
              </span>
            </div>
            <div className="mt-auto">
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white leading-none mb-1">
                {stat.value}
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Learning Progress */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-white dark:bg-[#1e293b] p-6 sm:p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800"
        >
          <div className="flex justify-between items-end mb-8">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Activity className="w-5 h-5 text-blue-500" />
              <h2 className="font-bold text-lg">Learning Progress</h2>
            </div>
            <span className="text-sm font-bold text-slate-500">Overall: <span className="text-blue-600 dark:text-blue-400">65%</span></span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-slate-700 dark:text-slate-300">Password Safety</span>
                <span className="text-slate-900 dark:text-white font-bold">85%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-slate-700 dark:text-slate-300">Phishing Detection</span>
                <span className="text-slate-900 dark:text-white font-bold">72%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-slate-700 dark:text-slate-300">Social Media Privacy</span>
                <span className="text-slate-900 dark:text-white font-bold">40%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Daily Tip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6 }}
          className="bg-indigo-50 dark:bg-indigo-900/20 p-6 sm:p-8 rounded-[2rem] shadow-sm border border-indigo-100 dark:border-indigo-800/30 flex flex-col h-full"
        >
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-4 font-bold text-sm tracking-wider uppercase">
            <Lightbulb className="w-5 h-5 fill-current" />
            <span>Daily Tip #1</span>
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
            Never use the same password for multiple accounts. A breach on one site puts all your accounts at risk!
          </h3>

          <div className="mt-auto flex items-center justify-between text-xs font-bold text-indigo-600/70 dark:text-indigo-400/70">
            <span>📅 May 16, 2026</span>
            <button className="bg-indigo-100 dark:bg-indigo-900/50 hover:bg-indigo-200 dark:hover:bg-indigo-800 px-4 py-2 rounded-lg transition-colors text-indigo-700 dark:text-indigo-300">
              Read More
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
