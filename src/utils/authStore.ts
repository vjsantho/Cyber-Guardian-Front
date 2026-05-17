// Shared auth store using localStorage for cross-page state

export interface StudentAccount {
  id: string;
  name: string;
  email: string;
  password: string; // stored as plain text (client-side only, no backend)
  createdAt: string;
  lastLogin: string;
  loginCount: number;
  progress: number;
  status: 'Active' | 'Inactive';
  completedModules: number[]; // array of completed module IDs
}

export interface ActivityLog {
  id: string;
  type: 'signup' | 'login';
  name: string;
  email: string;
  timestamp: string;
}

const ACCOUNTS_KEY = 'cg_student_accounts';
const ACTIVITY_KEY = 'cg_activity_log';
const SESSION_KEY = 'cg_current_user';

// ─── Accounts ────────────────────────────────────────────────────────────────

export function getAccounts(): StudentAccount[] {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveAccounts(accounts: StudentAccount[]) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

export function registerAccount(name: string, email: string, password: string): StudentAccount {
  const accounts = getAccounts();
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Block duplicate registration
  const existing = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    throw new Error('An account with this email already exists. Please log in instead.');
  }

  const newAccount: StudentAccount = {
    id: `std_${Date.now()}`,
    name,
    email: email.toLowerCase(),
    password,
    createdAt: now,
    lastLogin: now,
    loginCount: 1,
    progress: 0,
    status: 'Active',
    completedModules: [],
  };

  accounts.unshift(newAccount);
  saveAccounts(accounts);
  logActivity('signup', name, email);
  setCurrentUser(newAccount);
  return newAccount;
}

export function loginAccount(email: string, password: string): StudentAccount {
  const accounts = getAccounts();
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const idx = accounts.findIndex(a => a.email.toLowerCase() === email.toLowerCase());

  if (idx < 0) {
    throw new Error('No account found with this email. Please sign up first.');
  }

  if (accounts[idx].password !== password) {
    throw new Error('Incorrect password. Please try again.');
  }

  accounts[idx].lastLogin = now;
  accounts[idx].loginCount += 1;
  accounts[idx].status = 'Active';
  saveAccounts(accounts);
  logActivity('login', accounts[idx].name, email);
  setCurrentUser(accounts[idx]);
  return accounts[idx];
}

// ─── Session ──────────────────────────────────────────────────────────────────

export function setCurrentUser(user: StudentAccount) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function getCurrentUser(): StudentAccount | null {
  try {
    const data = localStorage.getItem(SESSION_KEY);
    if (!data) return null;
    const user: StudentAccount = JSON.parse(data);
    // Re-fetch from accounts to get the latest completedModules
    const accounts = getAccounts();
    const fresh = accounts.find(a => a.id === user.id);
    if (fresh) {
      setCurrentUser(fresh);
      return fresh;
    }
    return user;
  } catch {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

// ─── Module Progress ──────────────────────────────────────────────────────────

export function completeModule(moduleId: number): void {
  const user = getCurrentUser();
  if (!user) return;

  if (user.completedModules.includes(moduleId)) return; // already completed

  user.completedModules.push(moduleId);
  // Calculate overall progress: 4 modules total
  user.progress = Math.round((user.completedModules.length / 4) * 100);

  // Update in accounts list
  const accounts = getAccounts();
  const idx = accounts.findIndex(a => a.id === user.id);
  if (idx >= 0) {
    accounts[idx] = { ...accounts[idx], completedModules: user.completedModules, progress: user.progress };
    saveAccounts(accounts);
    setCurrentUser(accounts[idx]);
  }
}

// ─── Activity Log ─────────────────────────────────────────────────────────────

export function getActivityLog(): ActivityLog[] {
  try {
    return JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]');
  } catch {
    return [];
  }
}

function logActivity(type: 'signup' | 'login', name: string, email: string) {
  const log = getActivityLog();
  const entry: ActivityLog = {
    id: `act_${Date.now()}`,
    type,
    name,
    email,
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };
  log.unshift(entry);
  // Keep only last 50 entries
  localStorage.setItem(ACTIVITY_KEY, JSON.stringify(log.slice(0, 50)));
}
