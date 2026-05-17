import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Send, CheckCircle2, Shield } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success('Your message has been sent successfully!');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-accent-500/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[5%] left-[5%] w-[25%] h-[25%] bg-primary-500/5 rounded-full blur-[80px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have questions about our cybersecurity courses? Want to partner your school with CyberGuardians? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h2 className="text-2xl font-bold font-display mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-xl shrink-0">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Email Us</h3>
                    <p className="text-slate-600 dark:text-slate-400">hello@cyberguardians.edu</p>
                    <p className="text-sm text-slate-500 mt-1">We usually reply within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Headquarters</h3>
                    <p className="text-slate-600 dark:text-slate-400">123 Safe Internet Lane</p>
                    <p className="text-slate-600 dark:text-slate-400">Digital City, Web 10101</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl shrink-0">
                    <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Live Chat Support</h3>
                    <p className="text-slate-600 dark:text-slate-400">Available Mon-Fri, 9am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Fact Card */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Did you know?
              </h3>
              <p className="text-white/90">
                Over 10,000 schools have successfully integrated our cybersecurity curriculum to protect their students online.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            <h2 className="text-2xl font-bold font-display mb-6">Send us a Message</h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" placeholder="Alex" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" placeholder="Defender" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors" placeholder="alex@school.edu" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none" placeholder="How can we help you today?"></textarea>
                </div>

                <button type="submit" className="w-full flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-500/30 hover:-translate-y-1">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">Thanks for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-full font-bold transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
