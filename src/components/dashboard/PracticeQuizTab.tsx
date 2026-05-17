import { motion } from 'framer-motion';
import { PenTool, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

export default function PracticeQuizTab() {
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    setAnswered(true);
    setCorrect(isCorrect);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-2xl">
          <PenTool className="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Daily Practice Scenario</h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-[#1e293b] p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800"
      >
        <span className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4 block">Scenario #42</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          You receive an email from "Netflix" saying your account is suspended and you need to click a link to update your billing info. What do you do?
        </h2>

        {!answered ? (
          <div className="space-y-4">
            <button 
              onClick={() => handleAnswer(false)}
              className="w-full text-left p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium transition-all text-slate-700 dark:text-slate-300"
            >
              A) Click the link immediately to fix my account so I can watch movies.
            </button>
            <button 
              onClick={() => handleAnswer(false)}
              className="w-full text-left p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium transition-all text-slate-700 dark:text-slate-300"
            >
              B) Reply to the email asking if it's real.
            </button>
            <button 
              onClick={() => handleAnswer(true)}
              className="w-full text-left p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium transition-all text-slate-700 dark:text-slate-300"
            >
              C) Delete the email. If I am worried, I will go directly to Netflix.com in my browser.
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-xl border-2 ${correct ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              {correct ? <CheckCircle2 className="w-8 h-8 text-green-500" /> : <XCircle className="w-8 h-8 text-red-500" />}
              <h3 className={`text-xl font-bold ${correct ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                {correct ? 'Correct! Excellent job.' : 'Not quite right!'}
              </h3>
            </div>
            <p className={`font-medium ${correct ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
              Never click on links in unsolicited emails. Cybercriminals often pretend to be popular services (like Netflix) to steal your password or credit card.
            </p>
            <button 
              onClick={() => setAnswered(false)}
              className={`mt-6 px-6 py-2 rounded-lg font-bold text-white ${correct ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
            >
              Try Another Scenario
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
