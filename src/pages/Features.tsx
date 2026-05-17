import { motion } from 'framer-motion';
import { Shield, BookOpen, Award, CheckCircle2, ChevronRight, Zap, Target, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Features() {
  const navigate = useNavigate();

  const handleLearnMore = (feature: string) => {
    toast.info(`More info about ${feature} coming soon!`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 relative overflow-hidden">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-primary-500/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-secondary-500/5 rounded-full blur-[90px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      <div className="relative z-10">
      
      {/* Hero Section for Features */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-4 text-primary-600 dark:text-primary-400 font-bold text-sm tracking-widest uppercase"
            >
              <Shield className="w-4 h-4 fill-current" />
              <span>Platform Capabilities</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-8 text-slate-900 dark:text-white leading-tight">
              Powerful Features for <br />
              <span className="text-primary-600">Digital Safety</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Our platform provides everything a student needs to become a pro at internet safety. From interactive lessons to real-world simulators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Interactive Lessons",
                desc: "Engaging modules that explain complex cyber concepts in simple, kid-friendly terms.",
                icon: <BookOpen className="w-8 h-8" />,
                color: "bg-blue-500",
                shadow: "shadow-blue-500/20"
              },
              {
                title: "Safe Simulators",
                desc: "Practice spotting phishing emails and avoiding scams in a safe, controlled environment.",
                icon: <Zap className="w-8 h-8" />,
                color: "bg-pink-500",
                shadow: "shadow-pink-500/20"
              },
              {
                title: "Earn Rewards",
                desc: "Win badges, level up your profile, and compete on leaderboards while you learn.",
                icon: <Award className="w-8 h-8" />,
                color: "bg-green-500",
                shadow: "shadow-green-500/20"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg ${card.shadow} group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display text-slate-900 dark:text-white">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {card.desc}
                </p>
                <button 
                  onClick={() => handleLearnMore(card.title)}
                  className="flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Detailed Features Grid */}
          <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-slate-900 dark:text-white">Everything you need to stay safe</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  {[
                    { text: "100+ Learning Scenarios", icon: <Target className="w-5 h-5" /> },
                    { text: "Phishing Detectors", icon: <Shield className="w-5 h-5" /> },
                    { text: "Password Strength Labs", icon: <Zap className="w-5 h-5" /> },
                    { text: "Privacy Audit Tools", icon: <CheckCircle2 className="w-5 h-5" /> },
                    { text: "Community Forums", icon: <Users className="w-5 h-5" /> },
                    { text: "Certified Badges", icon: <Award className="w-5 h-5" /> }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors">
                      <div className="text-primary-500">{feat.icon}</div>
                      <span className="text-slate-700 dark:text-slate-300 font-bold">{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl"></div>
                  <img 
                    src="https://img.freepik.com/free-vector/security-analyst-working-with-laptop-magnifying-glass-data-protection-cyber-security-cloud-computing-safe-information-storage-concept-vector-isolated-illustration_335657-2244.jpg" 
                    alt="Cyber Security Analysis" 
                    className="relative z-10 w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 dark:bg-black text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to explore?</h2>
          <p className="text-slate-400 text-xl mb-12">Join thousands of students and start your journey today. It's free and always will be for students.</p>
          <button 
            onClick={() => navigate('/signup')}
            className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-1 active:scale-95"
          >
            Get Started Now
          </button>
        </div>
      </section>

      </div>
    </div>
  );
}
