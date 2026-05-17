import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, EyeOff, Smartphone, ShieldAlert, PlayCircle, BookOpen, X, ChevronRight, CheckCircle2, Trophy, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';

const modules = [
  {
    id: 1,
    title: "The Password Vault",
    description: "Learn how to build unbreakable passwords.",
    icon: <Lock className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50 dark:bg-blue-900/20",
    progress: 0,
    status: "in_progress",
    duration: "15 mins",
    content: {
      intro: "A strong password is your first line of defense. Weak passwords are like leaving your front door unlocked!",
      steps: [
        { title: "Use 12+ Characters", detail: "Longer passwords are exponentially harder to crack. Aim for at least 12 characters mixing letters, numbers and symbols." },
        { title: "Avoid Personal Info", detail: "Never use your name, birthday, or pet's name. Hackers try these first in what's called a 'dictionary attack'." },
        { title: "Use a Passphrase", detail: "Try a random sentence like 'PurpleElephant$JumpsOver7' — it's easy to remember and very secure." },
        { title: "Enable 2FA", detail: "Two-Factor Authentication adds a second lock. Even if someone steals your password, they still can't get in!" },
      ],
      quizzes: [
        { question: "Which of these is the STRONGEST password?", options: ["password123", "John1990!", "T3!gR#zP9$mQ", "mydog"], answer: 2 },
        { question: "Why is a 12-character password better than an 8-character one?", options: ["It takes exponentially longer to crack", "It is easier to remember", "Websites require it", "It prevents phishing"], answer: 0 },
        { question: "What is a 'dictionary attack'?", options: ["Looking up words in a physical dictionary", "Using software to try every word in the dictionary as a password", "A physical attack on a server", "Guessing passwords based on social media"], answer: 1 },
        { question: "Which of the following is a good passphrase?", options: ["12345678", "IlovemydogFluffy", "BlueBanana$FliesHigh99", "passwordpassword"], answer: 2 },
        { question: "What does 2FA stand for?", options: ["Two-File Access", "Two-Factor Authentication", "Total Folder Action", "Two-Face Algorithm"], answer: 1 },
        { question: "How does 2FA protect you?", options: ["It makes your password longer", "It encrypts your hard drive", "It requires a second form of verification (like a text or app code)", "It hides your IP address"], answer: 2 },
        { question: "Is it safe to use the same password for multiple websites?", options: ["Yes, if it's a strong password", "No, if one site is breached, all your accounts are at risk", "Yes, it's easier to remember", "Only for social media"], answer: 1 },
        { question: "Which is considered personal information that should NOT be in a password?", options: ["Your pet's name", "Your birth year", "Your street name", "All of the above"], answer: 3 },
        { question: "What should you do if you suspect your password has been stolen?", options: ["Wait and see what happens", "Change it immediately and enable 2FA", "Delete your account", "Call the police"], answer: 1 },
        { question: "What is a password manager?", options: ["A person who remembers your passwords", "A tool that generates and stores strong passwords securely", "A notebook where you write passwords", "A feature in your browser that makes passwords weak"], answer: 1 }
      ]
    }
  },
  {
    id: 2,
    title: "Phishing Detectives",
    description: "Spot fake emails and messages.",
    icon: <ShieldAlert className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-50 dark:bg-purple-900/20",
    progress: 0,
    status: "locked",
    duration: "20 mins",
    content: {
      intro: "Phishing attacks trick you into giving away your personal information. Learn to spot the warning signs!",
      steps: [
        { title: "Check the Sender Address", detail: "Fake emails often come from addresses like 'support@amaz0n-help.com'. Always verify the exact domain." },
        { title: "Watch for Urgent Language", detail: "'Your account will be closed in 24 hours!' — scammers use panic to make you act without thinking." },
        { title: "Hover Before You Click", detail: "Hover your mouse over any link before clicking. Check if the URL matches the supposed sender's website." },
        { title: "Never Share Personal Info", detail: "Legitimate companies will NEVER ask for your password, SSN, or credit card number over email." },
      ],
      quizzes: [
        { question: "You get an email from 'support@paypa1.com' asking you to verify your password. What do you do?", options: ["Click the link and enter your password", "Forward it to friends", "Delete it and report as phishing", "Reply with your info"], answer: 2 },
        { question: "What is the main goal of a phishing attack?", options: ["To give you a virus", "To trick you into revealing sensitive information", "To crash your computer", "To send you spam ads"], answer: 1 },
        { question: "Why do phishing emails often use urgent language?", options: ["Because they care about your security", "To panic you into acting quickly without thinking", "To make the email look professional", "Because servers are shutting down"], answer: 1 },
        { question: "How can you check a link without clicking it?", options: ["You can't", "Hover your mouse cursor over it to see the real destination", "Right-click and select 'Open'", "Copy and paste it to a friend"], answer: 1 },
        { question: "Which salutation is a common sign of a phishing email?", options: ["Dear [Your Name]", "Hi [Your Name]", "Dear Customer / Dear User", "Hello [Your Name]"], answer: 2 },
        { question: "What is 'Smishing'?", options: ["Phishing via SMS (text messages)", "A type of firewall", "A strong password technique", "Phishing via phone calls"], answer: 0 },
        { question: "A legitimate bank will never ask for your ___ in an email.", options: ["Name", "Account balance", "Password or full Social Security Number", "Branch location"], answer: 2 },
        { question: "What should you do if you accidentally clicked a phishing link?", options: ["Nothing, you are fine", "Disconnect from the internet and run a malware scan, change passwords", "Email the scammer back", "Restart your computer"], answer: 1 },
        { question: "Look at this URL: http://www.bankofamerica-login-update.com. Is it legitimate?", options: ["Yes, it says Bank of America", "No, it's likely a fake domain designed to trick you", "Yes, it says login", "Maybe, if it has a padlock"], answer: 1 },
        { question: "What does the padlock icon in the browser address bar mean?", options: ["The website is 100% safe from hackers", "The connection is encrypted (HTTPS), but the site could still be a phishing site", "Your computer is locked", "The website has a strong password"], answer: 1 }
      ]
    }
  },
  {
    id: 3,
    title: "Privacy Protector",
    description: "What to share and what to hide online.",
    icon: <EyeOff className="w-8 h-8 text-cyan-500" />,
    color: "bg-cyan-50 dark:bg-cyan-900/20",
    progress: 0,
    status: "locked",
    duration: "18 mins",
    content: {
      intro: "Your personal data is valuable. Once you post something online, it can stay there forever. Learn how to protect your digital footprint.",
      steps: [
        { title: "Adjust Privacy Settings", detail: "Always check the default privacy settings on social media apps. Set your profiles to 'Private' so only friends can see your posts." },
        { title: "Think Before You Post", detail: "Would you want your future boss or grandmother to see this? If not, don't post it. Images can be screenshotted and shared." },
        { title: "Limit Location Sharing", detail: "Turn off background location sharing for apps that don't need it. Never post your live location (e.g., 'I am at the park alone right now!')." },
        { title: "Beware of Oversharing", detail: "Quizzes like 'What is your mother's maiden name?' or 'What was your first pet?' are often designed to steal password reset answers." },
      ],
      quizzes: [
        { question: "Why is it important to set your social media profiles to private?", options: ["To get more followers", "So only people you trust can see your personal information and photos", "To make the app run faster", "To avoid seeing ads"], answer: 1 },
        { question: "Which of the following is safe to share publicly online?", options: ["Your home address", "Your phone number", "A review of a movie you watched", "Your current live location"], answer: 2 },
        { question: "What is a 'Digital Footprint'?", options: ["The trail of data you leave behind while using the internet", "A shoe store online", "A new type of malware", "The steps to hacking a computer"], answer: 0 },
        { question: "Why should you avoid posting your live location?", options: ["It uses too much battery", "It lets strangers know exactly where you are, which can be dangerous", "It causes the app to crash", "It is against the law"], answer: 1 },
        { question: "What should you do before downloading a new app?", options: ["Check what permissions it requests (like camera, location, contacts)", "Download it immediately if it's free", "Give it a 5-star review", "Share it with all your contacts"], answer: 0 },
        { question: "Can a deleted photo still exist on the internet?", options: ["No, it's gone forever", "Yes, someone could have screenshotted or saved it before you deleted it", "Only if it was on Facebook", "Only for 24 hours"], answer: 1 },
        { question: "You see a fun quiz asking for the name of the street you grew up on. What is the risk?", options: ["There is no risk", "It is boring", "That information is often used as a security question to reset passwords", "It will spam your friends"], answer: 2 },
        { question: "Who can see your posts if your profile is 'Public'?", options: ["Only your friends", "Only people in your city", "Anyone on the internet", "Only your family"], answer: 2 },
        { question: "What does it mean to 'overshare' online?", options: ["Sharing too much personal information that could compromise your privacy or safety", "Posting more than 5 times a day", "Sharing a post with multiple friends", "Sharing a computer with someone else"], answer: 0 },
        { question: "If an app you use for taking notes asks for access to your microphone and camera, what should you do?", options: ["Allow it", "Deny access, because a notes app shouldn't need those permissions", "Delete the app immediately", "Buy the premium version"], answer: 1 }
      ]
    }
  },
  {
    id: 4,
    title: "Cyber Kindness",
    description: "Dealing with cyberbullying.",
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    color: "bg-pink-50 dark:bg-pink-900/20",
    progress: 0,
    status: "locked",
    duration: "15 mins",
    content: {
      intro: "The internet is a community. How we treat others online matters. Learn how to be a positive digital citizen and how to handle cyberbullying.",
      steps: [
        { title: "Be an Upstander, Not a Bystander", detail: "If you see someone being bullied online, don't just watch. Support the victim privately, report the bully, and don't forward hurtful messages." },
        { title: "Block and Report", detail: "You have the power to control your space. Use the 'Block' button on toxic individuals and 'Report' abusive comments to the platform." },
        { title: "Don't Feed the Trolls", detail: "Internet trolls want to make you angry. The best response is no response. Engaging with them only gives them what they want." },
        { title: "Take a Screen Break", detail: "If online interactions are causing you stress or sadness, it is completely okay to log off and take a break from social media." },
      ],
      quizzes: [
        { question: "What is an 'Upstander'?", options: ["Someone who stands while using the computer", "Someone who watches bullying happen and does nothing", "Someone who takes action to support the victim of bullying", "Someone who bullies others"], answer: 2 },
        { question: "If you are being cyberbullied, what is the best first step?", options: ["Bully them back", "Save the evidence (screenshots) and block the person", "Delete all your accounts", "Argue with them online"], answer: 1 },
        { question: "What does the phrase 'Don't feed the trolls' mean?", options: ["Don't give food to mythical creatures", "Don't respond to people who are trying to provoke an angry reaction online", "Don't post pictures of your meals", "Don't use social media at night"], answer: 1 },
        { question: "Why is it important to report abusive comments?", options: ["To get the person arrested", "To alert the platform's moderators so they can remove the content and penalize the user", "To win an argument", "Because it's a trend"], answer: 1 },
        { question: "Is cyberbullying illegal?", options: ["No, it's just words", "In many cases, yes. Severe harassment, threats, and stalking have legal consequences.", "Only if it happens during school hours", "Only on certain websites"], answer: 1 },
        { question: "How does cyberbullying differ from traditional bullying?", options: ["It doesn't hurt as much", "It can happen 24/7, reach a massive audience quickly, and the bully can be anonymous", "It only happens to adults", "It only happens in games"], answer: 1 },
        { question: "If your friend sends you a mean photo making fun of a classmate, what should you do?", options: ["Forward it to others", "Laugh at it", "Tell your friend it's not cool and do not forward it", "Post it on your own profile"], answer: 2 },
        { question: "What is 'Digital Empathy'?", options: ["Understanding and caring about how your online words and actions affect others", "A computer virus", "Using emojis in every message", "Sending a lot of texts"], answer: 0 },
        { question: "Who can you talk to if you are experiencing cyberbullying?", options: ["A trusted adult (parent, teacher, counselor)", "No one", "Only your friends", "The person bullying you"], answer: 0 },
        { question: "Why should you take screenshots of cyberbullying?", options: ["To post them later", "To keep as evidence in case you need to show an adult or report it", "To make fun of the bully", "To save storage space"], answer: 1 }
      ]
    }
  }
];

type Module = typeof modules[0];

function LessonModal({ mod, onClose }: { mod: Module; onClose: () => void }) {
  const [step, setStep] = useState(0); 
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!mod.content) return null;

  const steps = mod.content.steps;
  const quizzes = mod.content.quizzes;
  const totalSteps = steps.length;
  const totalQuizzes = quizzes.length;

  const isIntro = step === 0;
  const isStep = step > 0 && step <= totalSteps;
  const isQuizPhase = step > totalSteps && step <= totalSteps + totalQuizzes;
  const isDone = step === totalSteps + totalQuizzes + 1;

  const currentStep = isStep ? steps[step - 1] : null;
  const currentQuizIndex = isQuizPhase ? step - totalSteps - 1 : 0;
  const currentQuiz = isQuizPhase ? quizzes[currentQuizIndex] : null;

  const handleNext = () => {
    setStep(s => s + 1);
    setSelectedAnswer(null);
    setQuizSubmitted(false);
  };

  const handleQuizSubmit = () => {
    if (selectedAnswer === null || !currentQuiz) return;
    setQuizSubmitted(true);
    if (selectedAnswer === currentQuiz.answer) {
      toast.success("🎉 Correct!");
      setScore(s => s + 1);
    } else {
      toast.error("Not quite!");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring' as any, stiffness: 300, damping: 30 }}
          className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl max-w-xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className={`p-6 flex items-center justify-between ${mod.color} border-b border-slate-100 dark:border-slate-800`}>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${mod.color} flex items-center justify-center`}>
                {mod.icon}
              </div>
              <div>
                <h2 className="font-bold text-lg text-slate-900 dark:text-white">{mod.title}</h2>
                <p className="text-xs text-slate-500">
                  {isDone 
                    ? "Complete!" 
                    : isQuizPhase 
                      ? `Quiz ${currentQuizIndex + 1} of ${totalQuizzes}` 
                      : isIntro 
                        ? "Introduction" 
                        : `Step ${step} of ${totalSteps}`}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl hover:bg-black/10 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full bg-primary-500 transition-all duration-500"
              style={{ width: `${isDone ? 100 : (step / (totalSteps + totalQuizzes + 1)) * 100}%` }}
            />
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-8">
            <AnimatePresence mode="wait">
              {isIntro && (
                <motion.div key="intro" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Welcome to this module!</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{mod.content.intro}</p>
                  <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800">
                    <p className="text-sm font-bold text-primary-600 dark:text-primary-400">📚 This lesson has {totalSteps} steps + {totalQuizzes} quiz questions</p>
                  </div>
                </motion.div>
              )}

              {currentStep && (
                <motion.div key={`step-${step}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary-500 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full mb-4">
                    <span>Step {step} of {totalSteps}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{currentStep.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{currentStep.detail}</p>
                </motion.div>
              )}

              {isQuizPhase && currentQuiz && (
                <motion.div key={`quiz-${currentQuizIndex}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-500 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full mb-4">
                    <span>🧠 Knowledge Check {currentQuizIndex + 1}/{totalQuizzes}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">{currentQuiz.question}</h3>
                  <div className="space-y-3">
                    {currentQuiz.options.map((opt, i) => (
                      <button
                        key={i}
                        disabled={quizSubmitted}
                        onClick={() => setSelectedAnswer(i)}
                        className={`w-full text-left p-4 rounded-2xl border-2 font-medium transition-all ${
                          quizSubmitted
                            ? i === currentQuiz.answer
                              ? 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-700'
                              : i === selectedAnswer
                                ? 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700'
                                : 'border-slate-100 dark:border-slate-800 text-slate-400'
                            : selectedAnswer === i
                              ? 'border-primary-400 bg-primary-50 dark:bg-primary-900/20 text-primary-700'
                              : 'border-slate-100 dark:border-slate-800 hover:border-primary-200 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="font-bold mr-3">{['A', 'B', 'C', 'D'][i]}.</span> {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {isDone && (
                <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                  <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-12 h-12 text-yellow-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-slate-900 dark:text-white">Module Complete! 🎉</h3>
                  <p className="text-slate-500 max-w-xs mx-auto mb-4">You've mastered <strong>{mod.title}</strong>. Keep it up, Cyber Guardian!</p>
                  <div className="inline-block bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-6 py-3">
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-1">Your Quiz Score</p>
                    <p className={`text-2xl font-black ${score >= 7 ? 'text-green-500' : 'text-primary-500'}`}>
                      {score} / {totalQuizzes}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
            {step > 0 && !isDone && !quizSubmitted ? (
              <button onClick={() => setStep(s => s - 1)} className="flex items-center gap-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-bold transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : <div />}

            {isDone ? (
              <button onClick={onClose} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-green-500/25 transition-all">
                <CheckCircle2 className="w-5 h-5" /> Done!
              </button>
            ) : isQuizPhase ? (
              quizSubmitted ? (
                <button onClick={handleNext} className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary-500/25 transition-all">
                  {currentQuizIndex === totalQuizzes - 1 ? 'Finish Module' : 'Next Question'} <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleQuizSubmit}
                  disabled={selectedAnswer === null}
                  className="bg-purple-500 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-purple-500/25 transition-all"
                >
                  Submit Answer
                </button>
              )
            ) : (
              <button onClick={handleNext} className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary-500/25 transition-all">
                {isIntro ? 'Start Lesson' : step === totalSteps ? 'Take Quiz' : 'Next'} <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Learn() {
  const [activeModule, setActiveModule] = useState<Module | null>(null);

  const handleModuleAction = (mod: Module) => {
    if (mod.status === 'locked') {
      toast.warning(`"${mod.title}" is locked. Complete previous modules to unlock!`);
      return;
    }
    setActiveModule(mod);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] bg-pink-500/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      {activeModule && <LessonModal mod={activeModule} onClose={() => setActiveModule(null)} />}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold mb-4">Learning Modules</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
              Master cybersecurity through our interactive, fun, and easy-to-understand courses. Complete modules to earn badges!
            </p>
          </div>
          <div className="mt-6 md:mt-0 bg-white dark:bg-slate-900 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center font-bold">
              Lvl 2
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Your Progress</p>
              <div className="w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-primary-500 w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => mod.status === 'locked' && handleModuleAction(mod)}
              className={`relative bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                mod.status === 'locked'
                  ? 'border-slate-100 dark:border-slate-800 opacity-75 cursor-not-allowed'
                  : mod.status === 'completed'
                    ? 'border-green-200 dark:border-green-900/50'
                    : 'border-primary-200 dark:border-primary-900/50 hover:-translate-y-1'
              }`}
            >
              {mod.status === 'locked' && (
                <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40 backdrop-blur-[1px] rounded-3xl z-10 flex items-center justify-center">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg">
                    <Lock className="w-6 h-6 text-slate-400" />
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-6">
                <div className={`w-20 h-20 shrink-0 rounded-2xl ${mod.color} flex items-center justify-center`}>
                  {mod.icon}
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold font-display">{mod.title}</h2>
                    {mod.status === 'completed' && (
                      <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                        Done ✓
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{mod.description}</p>

                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <PlayCircle className="w-4 h-4" />
                      <span>{mod.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>Interactive Lesson</span>
                    </div>
                  </div>

                  {mod.status !== 'locked' && (
                    <div className="space-y-2 mb-5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-slate-500">Progress</span>
                        <span className={mod.progress === 100 ? "text-green-500" : "text-primary-500"}>
                          {mod.progress}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-1000 ${mod.progress === 100 ? "bg-green-500" : "bg-primary-500"}`}
                          style={{ width: `${mod.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {mod.status === 'in_progress' && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleModuleAction(mod); }}
                      className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 active:scale-95 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-primary-500/20 flex items-center gap-2"
                    >
                      <PlayCircle className="w-4 h-4" /> Continue Learning
                    </button>
                  )}
                  {mod.status === 'completed' && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleModuleAction(mod); }}
                      className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" /> Review Module
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
