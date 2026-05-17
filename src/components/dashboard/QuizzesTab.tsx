import { motion } from 'framer-motion';
import { HelpCircle, Clock, Star } from 'lucide-react';

export default function QuizzesTab() {
  const quizzes = [
    { title: "Password Master Quiz", questions: 10, time: "10 mins", score: 100, locked: false },
    { title: "Phishing Defender Test", questions: 15, time: "15 mins", score: 85, locked: false },
    { title: "Social Media Safety Check", questions: 12, time: "10 mins", score: null, locked: false },
    { title: "Advanced Malware Quiz", questions: 20, time: "20 mins", score: null, locked: true },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
          <HelpCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Assigned Quizzes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-6 rounded-[1.5rem] shadow-sm border ${
              quiz.locked ? 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-70' 
              : 'bg-white dark:bg-[#1e293b] border-slate-100 dark:border-slate-800'
            } flex flex-col`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{quiz.title}</h3>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1"><HelpCircle className="w-3 h-3" /> {quiz.questions} Qs</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {quiz.time}</span>
                </div>
              </div>
              {quiz.score !== null && (
                <div className="bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1.5 rounded-lg flex items-center gap-1 border border-yellow-200 dark:border-yellow-800">
                  <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 fill-current" />
                  <span className="font-bold text-yellow-700 dark:text-yellow-400">{quiz.score}%</span>
                </div>
              )}
            </div>
            
            <button 
              disabled={quiz.locked}
              className={`w-full mt-auto py-3 rounded-xl font-bold transition-all ${
              quiz.locked 
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed' 
                : quiz.score !== null
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50'
                  : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg hover:shadow-purple-500/20'
            }`}>
              {quiz.locked ? 'Locked (Complete Previous)' : quiz.score !== null ? 'Retake Quiz' : 'Start Quiz'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
