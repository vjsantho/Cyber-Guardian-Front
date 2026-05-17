import { motion } from 'framer-motion';
import { Activity, Star, Award, Shield } from 'lucide-react';

export default function ActivitiesTab() {
  const activities = [
    { type: 'quiz', icon: <Star className="w-5 h-5 text-yellow-500 fill-current" />, title: "Passed 'Phishing Defender'", time: "2 hours ago", points: "+50 XP" },
    { type: 'badge', icon: <Award className="w-5 h-5 text-purple-500" />, title: "Earned 'Phishing Spotter' Badge", time: "2 hours ago", points: null },
    { type: 'lesson', icon: <Shield className="w-5 h-5 text-blue-500" />, title: "Completed Module 2: Safe Internet Practices", time: "1 day ago", points: "+100 XP" },
    { type: 'login', icon: <Activity className="w-5 h-5 text-green-500" />, title: "Logged in from Chrome (Windows)", time: "2 days ago", points: null },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl">
          <Activity className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Recent Activities</h1>
      </div>

      <div className="bg-white dark:bg-[#1e293b] rounded-[2rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-3 md:ml-4 space-y-8 pb-4">
          {activities.map((activity, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline dot/icon */}
              <div className="absolute -left-5 md:-left-6 top-0 bg-white dark:bg-[#1e293b] p-1.5 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="bg-slate-50 dark:bg-slate-800 p-1.5 rounded-full">
                  {activity.icon}
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white">{activity.title}</h3>
                  {activity.points && (
                    <span className="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-md">
                      {activity.points}
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-slate-500">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
