import { motion } from 'framer-motion';
import { Award, Shield, Lock, EyeOff, CheckCircle2 } from 'lucide-react';

export default function BadgesTab() {
  const badges = [
    { name: "Password Pro", icon: <Lock className="w-10 h-10" />, color: "bg-blue-500", earned: true, date: "May 10, 2026" },
    { name: "Phishing Spotter", icon: <Shield className="w-10 h-10" />, color: "bg-purple-500", earned: true, date: "May 12, 2026" },
    { name: "Privacy Master", icon: <EyeOff className="w-10 h-10" />, color: "bg-pink-500", earned: false, req: "Complete Privacy Module" },
    { name: "Cyber Champion", icon: <Award className="w-10 h-10" />, color: "bg-yellow-500", earned: false, req: "Pass All Quizzes" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl">
          <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">My Badges</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((badge, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            className={`p-6 rounded-[2rem] border ${
              badge.earned 
                ? 'bg-white dark:bg-[#1e293b] border-slate-100 dark:border-slate-800 shadow-xl' 
                : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-60 grayscale'
            } flex flex-col items-center text-center relative`}
          >
            {badge.earned && (
              <div className="absolute -top-3 -right-3 bg-green-500 rounded-full p-1 border-4 border-white dark:border-[#1e293b] shadow-md">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            )}
            
            <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white mb-4 shadow-inner ${badge.color}`}>
              {badge.icon}
            </div>
            
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">{badge.name}</h3>
            
            {badge.earned ? (
              <p className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
                Earned {badge.date}
              </p>
            ) : (
              <p className="text-xs font-medium text-slate-500">
                To unlock: {badge.req}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
