import { Link } from 'react-router-dom';
import { Shield, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-500 p-2 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                Cyber<span className="text-primary-500">Guardians</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering the next generation with the knowledge and skills to navigate the digital world safely and responsibly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Learning Modules', path: '/learn' },
                { name: 'Quizzes', path: '/quizzes' },
                { name: 'Cyber Tips', path: '/tips' },
                { name: 'Dashboard', path: '/dashboard' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Privacy */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4">Privacy & Safety</h3>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Safety Guidelines', 'Report an Issue'].map((item) => (
                <li key={item}>
                  <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>hello@cyberguardians.edu</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>123 Safe Internet Lane,<br />Digital City, Web 10101</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {currentYear} CyberGuardians. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-500">
            <span>Built with ❤️ for school students.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
