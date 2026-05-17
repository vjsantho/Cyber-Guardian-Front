import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCcw, Trophy } from 'lucide-react';
import { toast } from 'react-toastify';

const quizQuestions = [
  {
    id: 1,
    question: "What is the best way to create a strong password?",
    options: [
      "Use your name and birth year",
      "Use '123456' because it's easy to remember",
      "Combine words, numbers, and symbols like 'Blue$Dog99!'",
      "Use the word 'password'"
    ],
    correctAnswer: 2,
    explanation: "A strong password combines uppercase and lowercase letters, numbers, and symbols to make it hard for hackers to guess."
  },
  {
    id: 2,
    question: "You receive an email saying you won a free iPhone. It asks you to click a link to claim it. What do you do?",
    options: [
      "Click the link and fill in my address",
      "Forward it to all my friends so they can win too",
      "Reply to ask if it's real",
      "Delete the email and don't click anything"
    ],
    correctAnswer: 3,
    explanation: "This is a common phishing scam. Never click links in emails from unknown senders offering free prizes."
  },
  {
    id: 3,
    question: "Someone you don't know asks for your home address in an online game chat. What should you do?",
    options: [
      "Tell them, they seem nice",
      "Give a fake address",
      "Ignore them, block them, and tell a trusted adult",
      "Ask them for their address first"
    ],
    correctAnswer: 2,
    explanation: "Never share personal information with strangers online. Blocking them and telling an adult keeps you safe."
  }
];

export default function Quizzes() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (!isAnswerChecked) {
      setSelectedAnswer(index);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerChecked(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 100);
      toast.success("Correct! +100 XP");
    } else {
      toast.error("Incorrect answer. Try again next time!");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[20%] w-[35%] h-[35%] bg-yellow-500/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-primary-500/5 rounded-full blur-[90px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">Cyber Safety Quiz</h1>
          <p className="text-slate-600 dark:text-slate-400">Test your knowledge and earn XP points!</p>
          
          <div className="mt-6 inline-flex items-center space-x-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-800">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-slate-800 dark:text-slate-200">Score: {score} XP</span>
          </div>
        </div>

        {!showResults ? (
          <motion.div 
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-primary-500 uppercase tracking-wider">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <div className="w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-500 transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 leading-relaxed">
              {quizQuestions[currentQuestion].question}
            </h2>

            <div className="space-y-4 mb-8">
              {quizQuestions[currentQuestion].options.map((option, index) => {
                let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ";
                
                if (!isAnswerChecked) {
                  buttonClass += selectedAnswer === index 
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300" 
                    : "border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300";
                } else {
                  if (index === quizQuestions[currentQuestion].correctAnswer) {
                    buttonClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
                  } else if (selectedAnswer === index) {
                    buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
                  } else {
                    buttonClass += "border-slate-200 dark:border-slate-700 opacity-50 bg-white dark:bg-slate-900";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={isAnswerChecked}
                    className={buttonClass}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg">{option}</span>
                      {isAnswerChecked && index === quizQuestions[currentQuestion].correctAnswer && (
                        <div className="text-green-500 font-bold">✓</div>
                      )}
                      {isAnswerChecked && selectedAnswer === index && index !== quizQuestions[currentQuestion].correctAnswer && (
                        <div className="text-red-500 font-bold">✗</div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {isAnswerChecked && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-2xl mb-8 ${
                  selectedAnswer === quizQuestions[currentQuestion].correctAnswer
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                }`}
              >
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  {selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? "Awesome Job!" : "Not quite!"}
                </h3>
                <p>{quizQuestions[currentQuestion].explanation}</p>
              </motion.div>
            )}

            <div className="flex justify-end">
              {!isAnswerChecked ? (
                <button 
                  onClick={handleCheckAnswer}
                  disabled={selectedAnswer === null}
                  className="bg-primary-500 disabled:bg-slate-300 dark:disabled:bg-slate-700 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md shadow-primary-500/20"
                >
                  Check Answer
                </button>
              ) : (
                <button 
                  onClick={handleNextQuestion}
                  className="flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-8 py-3 rounded-xl font-bold transition-colors"
                >
                  <span>{currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>

          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-12 shadow-xl border border-slate-200 dark:border-slate-800 text-center"
          >
            <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-12 h-12 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              You scored <span className="font-bold text-primary-500">{score} XP</span> out of {quizQuestions.length * 100} XP
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={restartQuiz}
                className="flex items-center justify-center space-x-2 border-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-500 px-8 py-4 rounded-xl font-bold transition-all"
              >
                <RefreshCcw className="w-5 h-5" />
                <span>Try Again</span>
              </button>
              <button 
                onClick={() => toast.info("More quizzes coming soon!")}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1"
              >
                View More Quizzes
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
