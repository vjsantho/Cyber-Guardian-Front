import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Lock, User, Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerAdmin } from '../utils/authStore';

export default function AdminSignup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    organization: '',
    role: 'Teacher'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
      return;
    }
    try {
      registerAdmin(formData.name, formData.email, formData.password, formData.organization, formData.role);
      toast.success('Admin account created! Welcome to CyberGuardians. 🛡️');
      setTimeout(() => navigate('/admin'), 1500);
    } catch (err: any) {
      toast.error(err.message || 'Registration failed.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-600/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-slate-800/50 backdrop-blur-xl rounded-[2.5rem] p-8 border border-slate-700 shadow-2xl relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-4 shadow-lg shadow-primary-500/30">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-slate-400">Join our network of cyber-aware educators</p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-center space-x-4 mb-10">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                step >= i ? 'bg-primary-500 text-white' : 'bg-slate-700 text-slate-500'
              }`}>
                {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
              </div>
              {i === 1 && <div className={`w-12 h-1 ${step > 1 ? 'bg-primary-500' : 'bg-slate-700'} mx-2 rounded-full transition-all`}></div>}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="relative">
                <User className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  required
                  placeholder="Full Name" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  required
                  placeholder="Official Email" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="password" 
                  required
                  placeholder="Strong Password" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="relative">
                <Building className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  required
                  placeholder="School or Organization" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-2">Administrative Role</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Teacher', 'IT Manager', 'Principal', 'Moderator'].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setFormData({...formData, role})}
                      className={`py-3 rounded-xl font-bold text-sm transition-all border ${
                        formData.role === role 
                          ? 'bg-primary-500/20 border-primary-500 text-primary-400' 
                          : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <button 
            type="submit"
            className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center space-x-2 active:scale-95"
          >
            <span>{step === 1 ? 'Continue' : 'Create Admin Account'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Already an administrator? <Link to="/admin/login" className="text-primary-400 font-bold hover:underline">Login here</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
