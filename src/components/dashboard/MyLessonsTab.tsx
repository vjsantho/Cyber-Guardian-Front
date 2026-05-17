import { motion } from 'framer-motion';
import { BookOpen, PlayCircle, CheckCircle } from 'lucide-react';

export default function MyLessonsTab() {
  const lessons = [
    { title: "Introduction to Password Security", progress: 100, duration: "15 min" },
    { title: "How to Spot a Phishing Email", progress: 60, duration: "25 min" },
    { title: "Social Media Privacy Settings", progress: 0, duration: "20 min" },
    { title: "What is Two-Factor Authentication?", progress: 0, duration: "10 min" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
          <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">My Lessons</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-[#1e293b] p-6 rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">{lesson.title}</h3>
              {lesson.progress === 100 ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <PlayCircle className="w-6 h-6 text-blue-500" />
              )}
            </div>
            <p className="text-sm text-slate-500 mb-6 flex items-center gap-2">
              <span className="font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Module {idx + 1}</span>
              <span>•</span>
              <span>{lesson.duration}</span>
            </p>
            
            <div className="mt-auto">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-500">Progress</span>
                <span className={lesson.progress === 100 ? 'text-green-500' : 'text-blue-500'}>{lesson.progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${lesson.progress === 100 ? 'bg-green-500' : 'bg-blue-600'}`} 
                  style={{ width: `${lesson.progress}%` }}
                ></div>
              </div>
              <button className={`w-full mt-6 py-2.5 rounded-xl font-bold transition-all ${
                lesson.progress === 100 
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg hover:shadow-blue-500/20'
              }`}>
                {lesson.progress === 100 ? 'Review Lesson' : lesson.progress > 0 ? 'Continue Lesson' : 'Start Lesson'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
