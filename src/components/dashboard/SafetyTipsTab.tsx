import { motion } from 'framer-motion';
import { Lightbulb, Lock, EyeOff, MessageSquareOff } from 'lucide-react';

export default function SafetyTipsTab() {
  const tips = [
    { icon: <Lock className="w-6 h-6 text-blue-500" />, title: "Never Share Passwords", text: "Keep your passwords to yourself. Not even your best friend should know them." },
    { icon: <EyeOff className="w-6 h-6 text-pink-500" />, title: "Private Profile", text: "Ensure your social media profiles are set to private so strangers can't view your information." },
    { icon: <MessageSquareOff className="w-6 h-6 text-yellow-500" />, title: "Think Before Posting", text: "Once you post a photo or message online, it stays there forever." },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-2xl">
          <Lightbulb className="w-8 h-8 text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Daily Safety Tips</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-[#1e293b] p-6 rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4">
              {tip.icon}
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{tip.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {tip.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
