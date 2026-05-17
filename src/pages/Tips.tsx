import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, RefreshCw, Share2, Heart } from 'lucide-react';

const tips = [
  "Never share your passwords with anyone, not even your best friend!",
  "If an online game or quiz asks for your real name or address, don't give it to them.",
  "Create passwords using a mix of letters, numbers, and symbols.",
  "Don't click on links in emails from people you don't know.",
  "Be kind online! Cyberbullying hurts real feelings.",
  "Before you post a picture, ask yourself: 'Would I show this to my grandma?'",
  "If someone online makes you feel uncomfortable, tell a trusted adult immediately.",
  "Log out of your accounts when using a public computer or a friend's phone."
];

export default function Tips() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const generateRandomTip = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * tips.length);
    } while (newIndex === currentTipIndex && tips.length > 1);
    
    setCurrentTipIndex(newIndex);
    setIsLiked(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/20">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">Cyber Tip of the Day</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Learn a new way to stay safe online every single day!
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTipIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-primary-100 dark:border-primary-900/30 text-center relative z-10"
            >
              <p className="text-2xl md:text-3xl font-display font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-10">
                "{tips[currentTipIndex]}"
              </p>
              
              <div className="flex justify-center items-center space-x-6 border-t border-slate-100 dark:border-slate-800 pt-8">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-full transition-colors flex items-center gap-2 ${
                    isLiked 
                      ? 'bg-pink-100 text-pink-500 dark:bg-pink-900/30' 
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="font-medium">{isLiked ? 'Loved it!' : 'Love this'}</span>
                </button>

                <button className="p-3 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                  <Share2 className="w-6 h-6" />
                  <span className="font-medium">Share</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Decorative background cards */}
          <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] bg-primary-100 dark:bg-primary-900/20 rounded-3xl -z-10 transform rotate-2"></div>
          <div className="absolute top-8 left-8 right-[-32px] bottom-[-32px] bg-secondary-100 dark:bg-secondary-900/20 rounded-3xl -z-20 transform rotate-3"></div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={generateRandomTip}
            className="group flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold mx-auto transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Show Me Another Tip</span>
          </button>
        </div>
      </div>
    </div>
  );
}
