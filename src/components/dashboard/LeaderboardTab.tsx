import { motion } from 'framer-motion';
import { Trophy, Medal } from 'lucide-react';

export default function LeaderboardTab() {
  const users = [
    { rank: 1, name: "Alex Chen", points: 4500, avatar: "1", color: "text-yellow-500" },
    { rank: 2, name: "Sarah J.", points: 4250, avatar: "2", color: "text-slate-400" },
    { rank: 3, name: "Mike T.", points: 4100, avatar: "3", color: "text-amber-600" },
    { rank: 4, name: "Student (You)", points: 2450, avatar: "4", color: "text-slate-700 dark:text-slate-400", isMe: true },
    { rank: 5, name: "Emily R.", points: 2200, avatar: "5", color: "text-slate-700 dark:text-slate-400" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl">
          <Trophy className="w-8 h-8 text-orange-600 dark:text-orange-400" />
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Global Leaderboard</h1>
      </div>

      <div className="bg-white dark:bg-[#1e293b] rounded-[2rem] p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="space-y-4">
          {users.map((user, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-center justify-between p-4 rounded-2xl ${
                user.isMe ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
              } transition-colors`}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 text-center font-bold text-lg text-slate-500">
                  #{user.rank}
                </div>
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`} 
                  alt="Avatar" 
                  className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-[#1e293b] shadow-sm"
                />
                <div>
                  <h3 className={`font-bold ${user.isMe ? 'text-blue-700 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
                    {user.name}
                  </h3>
                  {user.rank <= 3 && <Medal className={`w-4 h-4 ${user.color} mt-1`} />}
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-lg text-slate-900 dark:text-white">{user.points}</p>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">XP Points</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
