import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, BookOpen, BrainCircuit, ShieldCheck, 
  BarChart3, Settings, LogOut, Search, 
  MoreVertical, CheckCircle2, AlertCircle, UserPlus, LogIn
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getAccounts, getActivityLog, type StudentAccount, type ActivityLog } from '../utils/authStore';

const data = [
  { name: 'Mon', students: 400, completions: 240 },
  { name: 'Tue', students: 300, completions: 139 },
  { name: 'Wed', students: 200, completions: 980 },
  { name: 'Thu', students: 278, completions: 390 },
  { name: 'Fri', students: 189, completions: 480 },
  { name: 'Sat', students: 239, completions: 380 },
  { name: 'Sun', students: 349, completions: 430 },
];

const mockStudents = [
  { id: 1, name: "Alex Defender", email: "alex@school.edu", lastLogin: "2024-05-16 10:30 AM", progress: 85, status: "Active" },
  { id: 2, name: "Sarah Safe", email: "sarah@school.edu", lastLogin: "2024-05-15 02:45 PM", progress: 92, status: "Active" },
  { id: 3, name: "Leo Shield", email: "leo@school.edu", lastLogin: "2024-05-14 09:15 AM", progress: 45, status: "Inactive" },
  { id: 4, name: "Emma Guard", email: "emma@school.edu", lastLogin: "2024-05-16 11:20 AM", progress: 78, status: "Active" },
  { id: 5, name: "Chris Cyber", email: "chris@school.edu", lastLogin: "2024-05-12 04:00 PM", progress: 30, status: "Warning" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [liveAccounts, setLiveAccounts] = useState<StudentAccount[]>([]);
  const [activityLog, setActivityLog] = useState<ActivityLog[]>([]);

  // Quiz creation state
  const [isCreateQuizModalOpen, setIsCreateQuizModalOpen] = useState(false);
  const [newQuizTitle, setNewQuizTitle] = useState('');
  const [quizCount, setQuizCount] = useState(15);

  // Course Modules state
  const [courseModules, setCourseModules] = useState([
    'Password Security', 'Phishing Detection', 'Social Media Privacy', 'Network Safety'
  ]);
  const [isEditModuleModalOpen, setIsEditModuleModalOpen] = useState(false);
  const [editingModuleIndex, setEditingModuleIndex] = useState<number | null>(null);
  const [editingModuleName, setEditingModuleName] = useState('');

  // Auto-refresh live data every 5 seconds
  useEffect(() => {
    const refresh = () => {
      setLiveAccounts(getAccounts());
      setActivityLog(getActivityLog());
    };
    refresh();
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredAccounts = liveAccounts.filter(
    a => a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         a.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
    toast.success("Logging out of admin portal...");
    navigate('/login');
  };

  const handleAction = (action: string) => {
    toast.info(`Action "${action}" triggered!`);
  };

  const handleExportCSV = () => {
    if (liveAccounts.length === 0) {
      toast.warn('No student data to export yet.');
      return;
    }

    // Build CSV content
    const headers = ['Name', 'Email', 'Registered At', 'Last Login', 'Login Count', 'Status'];
    const rows = liveAccounts.map((s) => [
      `"${s.name}"`,
      `"${s.email}"`,
      `"${s.createdAt}"`,
      `"${s.lastLogin}"`,
      s.loginCount,
      s.status,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `cyberguardians_students_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`✅ Exported ${liveAccounts.length} student record(s) to CSV!`);
  };

  const handleCreateQuizSubmit = () => {
    if (!newQuizTitle.trim()) {
      toast.error('Please enter a quiz title');
      return;
    }
    setQuizCount(prev => prev + 1);
    toast.success(`✅ Quiz "${newQuizTitle}" created successfully!`);
    setNewQuizTitle('');
    setIsCreateQuizModalOpen(false);
  };

  const handleEditModuleClick = (idx: number, name: string) => {
    setEditingModuleIndex(idx);
    setEditingModuleName(name);
    setIsEditModuleModalOpen(true);
  };

  const handleSaveModule = () => {
    if (editingModuleIndex !== null && editingModuleName.trim()) {
      setCourseModules(prev => {
        const next = [...prev];
        next[editingModuleIndex] = editingModuleName;
        return next;
      });
      toast.success('✅ Module updated successfully!');
      setIsEditModuleModalOpen(false);
    } else {
      toast.error('Module name cannot be empty');
    }
  };

  const handlePreviewModule = (name: string) => {
    toast.info(`Navigating to preview for ${name}...`);
    navigate('/learn');
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#0f172a] overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-[#1e293b] border-r border-slate-200 dark:border-slate-800 flex flex-col z-30">
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2 text-xl font-display font-bold">
            <ShieldCheck className="w-8 h-8 text-primary-500" />
            <span className="text-slate-900 dark:text-white">GuardAdmin</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {[
            { id: 'overview', icon: <BarChart3 className="w-5 h-5" />, label: 'Overview' },
            { id: 'students', icon: <Users className="w-5 h-5" />, label: 'Student Management' },
            { id: 'content', icon: <BookOpen className="w-5 h-5" />, label: 'Content Editor' },
            { id: 'reports', icon: <AlertCircle className="w-5 h-5" />, label: 'Safety Reports' },
            { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === item.id 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 mb-4">
            <p className="text-xs font-bold text-slate-500 uppercase mb-2">Admin Plan</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">Enterprise Edition</p>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative">
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Header */}
        <header className="h-20 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md sticky top-0 border-b border-slate-200 dark:border-slate-800 z-20 px-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white capitalize">
            {activeTab.replace('-', ' ')}
          </h2>
          
          <div className="flex items-center space-x-6">
            <div className="relative group hidden md:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-primary-500" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-slate-100 dark:bg-slate-800 text-sm rounded-full pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="relative p-2 text-slate-500 hover:text-primary-500 transition-colors">
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#0f172a]"></div>
              <ShieldCheck className="w-6 h-6" />
            </button>
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stat Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Students', value: liveAccounts.length.toString(), change: liveAccounts.length > 0 ? `+${liveAccounts.length} live` : 'None yet', icon: <Users className="w-6 h-6 text-blue-500" /> },
                  { label: 'Quiz Completion', value: '84%', change: '+5%', icon: <BrainCircuit className="w-6 h-6 text-purple-500" /> },
                  { label: 'Modules Active', value: '24', change: 'Stable', icon: <BookOpen className="w-6 h-6 text-green-500" /> },
                  { label: 'Alerts Resolved', value: '98.2%', change: '+2%', icon: <ShieldCheck className="w-6 h-6 text-pink-500" /> },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                        {stat.icon}
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-md ${stat.change.includes('+') ? 'text-green-600 bg-green-50' : 'text-slate-500 bg-slate-50'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold">Engagement Over Time</h3>
                    <select className="bg-slate-50 dark:bg-slate-900 text-sm border-none rounded-lg px-3 py-1 outline-none">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                    </select>
                  </div>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="completions" fill="#a855f7" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Live Activity Feed</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Live
                    </span>
                  </div>
                  {activityLog.length === 0 ? (
                    <div className="text-center py-10 text-slate-400">
                      <p className="font-medium">No activity yet.</p>
                      <p className="text-xs mt-1">Student logins & signups will appear here.</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-72 overflow-y-auto">
                      {activityLog.slice(0, 8).map((entry) => (
                        <div key={entry.id} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            entry.type === 'signup' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-blue-100 dark:bg-blue-900/30'
                          }`}>
                            {entry.type === 'signup'
                              ? <UserPlus className="w-4 h-4 text-green-600" />
                              : <LogIn className="w-4 h-4 text-blue-600" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm truncate">{entry.name}</p>
                            <p className="text-xs text-slate-500 truncate">{entry.email}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              entry.type === 'signup' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                              {entry.type === 'signup' ? 'New Signup' : 'Login'}
                            </span>
                            <p className="text-[10px] text-slate-400 mt-1">{entry.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Student Directory</h3>
                  <p className="text-slate-500">Live accounts — updates every 5 seconds. <span className="inline-flex items-center gap-1 text-green-500 font-bold"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{liveAccounts.length} registered</span></p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleExportCSV}
                    className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                    </svg>
                    Export CSV
                  </button>
                </div>
              </div>

              {filteredAccounts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-slate-400" />
                  </div>
                  <p className="font-bold text-slate-500">No student accounts yet.</p>
                  <p className="text-sm text-slate-400 mt-1">Accounts appear here as students sign up or log in.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50">
                      <tr>
                        <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase">Student</th>
                        <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase">Registered At</th>
                        <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase">Last Login</th>
                        <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase">Logins</th>
                        <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                        <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {filteredAccounts.map((student) => (
                        <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center font-bold text-primary-600 text-sm">
                                {student.name.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <p className="font-bold text-slate-900 dark:text-white">{student.name}</p>
                                <p className="text-xs text-slate-500">{student.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-5 text-sm text-slate-600 dark:text-slate-400 font-medium">{student.createdAt}</td>
                          <td className="px-8 py-5 text-sm text-slate-600 dark:text-slate-400 font-medium">{student.lastLogin}</td>
                          <td className="px-8 py-5">
                            <span className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-bold">
                              {student.loginCount}×
                            </span>
                          </td>
                          <td className="px-8 py-5">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                            }`}>
                              {student.status}
                            </span>
                          </td>
                          <td className="px-8 py-5 text-right">
                            <button 
                              onClick={() => handleAction(`View ${student.name}`)}
                              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            >
                              <MoreVertical className="w-4 h-4 text-slate-400" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'content' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Course Modules</h3>
                <div className="space-y-4">
                  {courseModules.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                      <span className="font-bold text-sm">{item}</span>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditModuleClick(i, item)} className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Edit</button>
                        <button onClick={() => handlePreviewModule(item)} className="p-2 bg-primary-500 text-white rounded-lg text-xs font-bold hover:bg-primary-600 transition-colors">Preview</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Quiz Bank</h3>
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BrainCircuit className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-slate-500 mb-6">{quizCount} Active Quizzes</p>
                  <button onClick={() => setIsCreateQuizModalOpen(true)} className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-bold text-sm">Create New Quiz</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white dark:bg-slate-800 p-12 rounded-[3rem] text-center">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Safety Incident Reports</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-8">
                No new incidents reported in the last 24 hours. All systems are operating normally.
              </p>
              <button onClick={() => handleAction('Download Report')} className="px-8 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold">
                Download Incident History
              </button>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-3xl space-y-6">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Platform Configuration</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <p className="font-bold">Allow Student Signups</p>
                      <p className="text-sm text-slate-500">Students can create their own accounts</p>
                    </div>
                    <div className="w-12 h-6 bg-primary-500 rounded-full relative p-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <p className="font-bold">Maintenance Mode</p>
                      <p className="text-sm text-slate-500">Hides the platform from public access</p>
                    </div>
                    <div className="w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative p-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full absolute left-1"></div>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleAction('Save Settings')} className="mt-8 bg-primary-500 text-white px-8 py-3 rounded-xl font-bold">Save Changes</button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Create Quiz Modal */}
      {isCreateQuizModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 dark:border-slate-700"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold dark:text-white">Create New Quiz</h3>
              <button onClick={() => setIsCreateQuizModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Quiz Title</label>
                <input 
                  type="text" 
                  value={newQuizTitle}
                  onChange={(e) => setNewQuizTitle(e.target.value)}
                  placeholder="e.g. Advanced Phishing Tactics"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Target Module</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white">
                  <option>Password Security</option>
                  <option>Phishing Detection</option>
                  <option>Social Media Privacy</option>
                  <option>Network Safety</option>
                </select>
              </div>
              <button 
                onClick={handleCreateQuizSubmit}
                className="w-full mt-4 bg-primary-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-600 transition-colors"
              >
                Save & Create
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Edit Module Modal */}
      {isEditModuleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 dark:border-slate-700"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold dark:text-white">Edit Module</h3>
              <button onClick={() => setIsEditModuleModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Module Name</label>
                <input 
                  type="text" 
                  value={editingModuleName}
                  onChange={(e) => setEditingModuleName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
                />
              </div>
              <button 
                onClick={handleSaveModule}
                className="w-full mt-4 bg-primary-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-600 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
