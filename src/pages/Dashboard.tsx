import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Moon, Sun, Bell, Play, Flame, 
  Book, BrainCircuit, Star, Activity, Lightbulb, Trophy, Target, Shield, ArrowRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleQuickAction = (path: string, label: string) => {
    toast.info(`Opening ${label}...`);
    navigate(path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#0f172a] overflow-x-hidden font-sans pb-20 relative">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[25%] h-[25%] bg-purple-500/5 rounded-full blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="relative z-10">
      
      {/* Top Header */}
      <header className="h-16 bg-[#111827] flex items-center justify-between px-4 sm:px-6 lg:px-8 z-20 shrink-0 sticky top-0">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2 text-xl font-display font-bold">
            <span className="text-primary-500">Cyber</span>
            <span className="text-white">Guardians</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-white/80 font-bold border-l border-slate-700 pl-6">
            <span>Student Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex relative group">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500" />
            <input 
              type="text" 
              placeholder="Search lessons, quizzes..." 
              className="w-64 bg-slate-800 text-sm text-white placeholder-slate-400 rounded-full pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-3 ml-2">
            <button 
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full border-2 border-slate-800"></span>
            </button>

            <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:ring-2 hover:ring-purple-400 hover:ring-offset-2 hover:ring-offset-slate-900 transition-all">
              S
            </div>
            
            <Link to="/" className="ml-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
              Exit
            </Link>
          </div>
        </div>
      </header>

      {/* Scrollable Dashboard Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Welcome Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="bg-white dark:bg-[#1e293b] rounded-[2rem] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none"></div>

            <div className="z-10 w-full">
              <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-3">
                Good Day, <span className="text-primary-600 dark:text-primary-400">Student!</span> 👋
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium text-lg">
                You're on a 14-day streak! Keep learning to earn your Cyber Champion certificate.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate('/learn')}
                  className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-2xl font-bold transition-all shadow-lg shadow-primary-500/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Continue Learning</span>
                </button>
                <button 
                  onClick={() => navigate('/quizzes')}
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-8 py-3.5 rounded-2xl font-bold transition-all active:scale-95"
                >
                  <BrainCircuit className="w-5 h-5" />
                  <span>Take a Quiz</span>
                </button>
              </div>
            </div>

            <div className="mt-8 md:mt-0 z-10 shrink-0">
              <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-3xl border border-orange-100 dark:border-orange-800/50 flex flex-col items-center justify-center text-center">
                <div className="text-orange-500 bg-white dark:bg-orange-950 p-4 rounded-2xl shadow-sm mb-4">
                  <Flame className="w-10 h-10 fill-current" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 leading-none">14</p>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mt-2">Day Streak</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Explore Modules', path: '/learn', icon: <Book className="w-6 h-6" />, color: 'bg-blue-500', desc: 'Dive into cyber lessons' },
              { label: 'Take Challenges', path: '/quizzes', icon: <Target className="w-6 h-6" />, color: 'bg-purple-500', desc: 'Test your safety skills' },
              { label: 'View Safety Tips', path: '/tips', icon: <Lightbulb className="w-6 h-6" />, color: 'bg-yellow-500', desc: 'Quick daily safety rules' }
            ].map((action, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleQuickAction(action.path, action.label)}
                className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-6 text-left hover:shadow-md transition-all group"
              >
                <div className={`${action.color} text-white p-4 rounded-2xl shadow-lg`}>
                  {action.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">{action.label}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{action.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Learning Progress */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-2 bg-white dark:bg-[#1e293b] p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                    <Activity className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="font-bold text-2xl text-slate-900 dark:text-white font-display">Learning Progress</h2>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Overall</p>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">65%</p>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  { label: 'Password Safety', progress: 85, color: 'bg-blue-500' },
                  { label: 'Phishing Detection', progress: 72, color: 'bg-pink-500' },
                  { label: 'Social Media Privacy', progress: 40, color: 'bg-yellow-500' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-bold mb-3">
                      <span className="text-slate-700 dark:text-slate-300">{item.label}</span>
                      <span className="text-slate-900 dark:text-white">{item.progress}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${item.color} rounded-full shadow-sm`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Daily Cyber Challenge Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="bg-slate-900 dark:bg-primary-900/40 p-8 rounded-[2.5rem] shadow-2xl shadow-primary-500/10 text-white relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6 text-primary-400" />
                <span className="font-bold text-primary-300 uppercase tracking-widest text-xs">Daily Challenge</span>
              </div>
              
              <h3 className="text-2xl font-bold font-display mb-6 leading-tight">
                Can you spot a fake email address?
              </h3>
              
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 mb-8 font-mono text-sm break-all">
                From: <span className="text-primary-300 underline">support@amozon-security.com</span>
              </div>

              <div className="space-y-3 mt-auto">
                <button 
                  onClick={() => toast.error("Wrong! Always check for misspellings like 'amozon'.")}
                  className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/5 transition-all text-left font-bold"
                >
                  Real Email
                </button>
                <button 
                  onClick={() => toast.success("Correct! That's a phishing attempt.")}
                  className="w-full bg-primary-500 hover:bg-primary-600 p-4 rounded-2xl transition-all text-left font-bold flex items-center justify-between group"
                >
                  <span>Phishing Attempt</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Achievement Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Recent Achievements
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Password Master', date: '2 days ago', icon: '🔑' },
                  { label: 'Verified Human', date: '5 days ago', icon: '👤' },
                  { label: 'Quiz Champ', date: '1 week ago', icon: '🏆' }
                ].map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-2xl transition-colors">
                    <div className="text-3xl">{ach.icon}</div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{ach.label}</p>
                      <p className="text-xs text-slate-500">{ach.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-slate-500 hover:text-primary-500 hover:border-primary-500 transition-all">
                View All Badges
              </button>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-2xl font-display">Upcoming Modules</h3>
                <Link to="/learn" className="text-primary-500 font-bold hover:underline">Explore All</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Social Engineering', icon: '🤝', color: 'bg-orange-100 text-orange-600' },
                  { title: 'Malware Defense', icon: '🦠', color: 'bg-red-100 text-red-600' }
                ].map((mod, idx) => (
                  <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-[2rem] flex flex-col items-center text-center">
                    <div className={`w-16 h-16 ${mod.color} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm`}>
                      {mod.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-4">{mod.title}</h4>
                    <button className="bg-white dark:bg-slate-800 px-6 py-2 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                      Coming Soon
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      </div>
    </div>
  );
}
