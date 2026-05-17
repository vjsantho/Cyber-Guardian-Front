import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Features from './pages/Features';
import Quizzes from './pages/Quizzes';
import Tips from './pages/Tips';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import AdminSignup from './pages/AdminSignup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {!isDashboard && !isAdmin && <Navbar />}
      <ToastContainer position="top-right" autoClose={3000} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/features" element={<Features />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
        </Routes>
      </main>
      {!isDashboard && !isAdmin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
