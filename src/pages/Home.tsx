import { motion } from 'framer-motion';
import { Shield, Lock, EyeOff, Smartphone, Award, ArrowRight, Play, CheckCircle, CheckCircle2, BookOpen, Lightbulb, MessageSquareOff, Key, UserX, RefreshCw, Link2Off, ShieldAlert } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', bounce: 0.5, duration: 1 }
  }
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-secondary-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-accent-500/10 rounded-full blur-[110px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">#1 Cybersecurity Platform for Kids</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight relative">
                <span className="block">Stay Safe Online</span>
                <span className="block text-slate-400 dark:text-slate-500">with</span>
                <motion.span 
                  variants={textVariants}
                  className="block text-gradient mt-2 inline-block relative"
                >
                  CyberGuardians
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  />
                </motion.span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Learn how to protect your digital world through fun games, interactive quizzes, and real-life cyber scenarios!
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/signup" className="flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-1">
                  <span>Start Learning</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/quizzes" className="flex items-center justify-center space-x-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-md hover:-translate-y-1">
                  <Play className="w-5 h-5 text-primary-500" />
                  <span>Take a Quiz</span>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-center space-x-4 text-sm text-slate-500 font-medium pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform`}>
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="avatar" />
                    </div>
                  ))}
                </div>
                <p>Join 10,000+ students learning safely!</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
              className="relative lg:ml-10"
            >
              <div className="relative z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-[3rem] blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative glass-card rounded-[3rem] p-4 border-2 border-white/40 shadow-2xl overflow-hidden bg-white/20 dark:bg-slate-900/40">
                  <motion.img 
                    src="/hero-image.png" 
                    alt="Cyber Security Hero" 
                    className="w-full h-auto rounded-[2.5rem] drop-shadow-2xl object-cover"
                    animate={{ 
                      y: [0, -15, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 6,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
              
              {/* Floating Shield Icon */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-700"
              >
                <div className="bg-blue-500 p-2 rounded-full shadow-lg shadow-blue-500/30">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Floating Lock Icon */}
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-700"
              >
                <div className="bg-purple-500 p-2 rounded-full shadow-lg shadow-purple-500/30">
                  <Lock className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl flex items-center space-x-4 shadow-2xl z-20 border border-slate-100 dark:border-slate-700"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-green-500 p-2 rounded-full shadow-lg shadow-green-500/30"
                >
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">100% Secure</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Safe for kids</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Rules Section */}
      <section id="tips" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest uppercase">
              <Lightbulb className="w-4 h-4 fill-current" />
              <span>Safety Tips</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
              Essential <span className="text-blue-600 dark:text-blue-500">Cyber Safety</span> Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Lock className="w-6 h-6 text-blue-500" />,
                num: "01",
                text: "Never share your password with anyone - not even your best friend."
              },
              {
                icon: <MessageSquareOff className="w-6 h-6 text-yellow-500" />,
                text: "Use strong passwords with letters, numbers, and symbols. Make it 12+ characters."
              },
              {
                icon: <UserX className="w-6 h-6 text-orange-500" />,
                num: "02",
                text: "Don't talk to strangers online or share personal details with people you haven't met."
              },
              {
                icon: <Smartphone className="w-6 h-6 text-green-500" />,
                num: "03",
                text: "Enable two-factor authentication (2FA) on all important accounts."
              },
              {
                icon: <Link2Off className="w-6 h-6 text-pink-500" />,
                num: "04",
                text: "Never click suspicious links in emails or messages - even from people you know."
              }
            ].map((tip, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-slate-50 dark:bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {tip.icon}
                </div>
                <span className="text-xl font-display font-extrabold text-blue-600 dark:text-blue-500 mb-2">{tip.num}</span>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  {tip.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="py-24 relative overflow-hidden bg-primary-600 dark:bg-primary-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Join Thousands of Students in the Fight for a Safer Internet!
              </h2>
              <div className="space-y-6">
                {[
                  "Free educational resources for students and teachers",
                  "Monthly security challenges and competitions",
                  "Exclusive digital badges and certifications",
                  "24/7 access to safety guides and tips"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="bg-white/20 p-1.5 rounded-full">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-primary-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <button 
                  onClick={() => navigate('/signup')}
                  className="bg-white text-primary-600 hover:bg-slate-50 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Create Your Free Account
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Weekly Leaderboard</h3>
                  <p className="text-primary-100">See who's leading the way in cyber safety!</p>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Alex Defender", score: "4,500 XP", color: "bg-yellow-400" },
                    { name: "Sarah Safe", score: "3,820 XP", color: "bg-slate-300" },
                    { name: "Leo Shield", score: "3,100 XP", color: "bg-orange-400" }
                  ].map((user, idx) => (
                    <div key={idx} className="bg-white/10 p-4 rounded-2xl flex items-center justify-between border border-white/5">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${user.color} rounded-full flex items-center justify-center font-bold text-slate-900`}>{idx+1}</div>
                        <span className="font-bold text-white">{user.name}</span>
                      </div>
                      <span className="text-primary-100 font-medium">{user.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
}
