import { motion } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-primary-500/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-secondary-500/5 rounded-full blur-[90px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 py-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm mb-6 border border-primary-100 dark:border-primary-800">
              <Shield className="w-4 h-4" />
              <span>About CyberGuardians</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
              Empowering the Next Generation of <span className="text-primary-500">Digital Citizens</span>
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                CyberGuardians is a dedicated platform designed to bridge the gap in cybersecurity education for students. In an era where the digital world is as real as the physical one, we believe every student deserves the tools to navigate it safely.
              </p>
              <p>
                Our mission is simple: <strong className="text-slate-900 dark:text-white">To make cyber security awareness fun, interactive, and accessible.</strong> We combine gamified learning with real-world scenarios to teach students how to identify threats, protect their privacy, and become responsible digital leaders.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  "Interactive Simulations",
                  "Student-Centric Content",
                  "Teacher-Approved Lessons",
                  "Gamified Rewards System"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="font-bold text-slate-900 dark:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-3xl"></div>
            <img 
              src="https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg?w=826" 
              alt="About CyberGuardians" 
              className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl border-4 border-white/50 dark:border-slate-800/50"
            />
          </motion.div>
        </div>

        {/* Vision/Values Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Our Vision", text: "A world where every student can explore the internet without fear, armed with the knowledge to protect themselves." },
            { title: "Our Values", text: "Accessibility, Integrity, and fun. We believe learning about safety shouldn't be scary or boring." },
            { title: "Our Community", text: "Join thousands of schools and students who are already part of the CyberGuardians movement." }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-500">{card.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
