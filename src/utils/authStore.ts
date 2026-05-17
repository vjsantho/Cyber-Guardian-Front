// Shared auth store using localStorage for cross-page state

export interface StudentAccount {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  lastLogin: string;
  loginCount: number;
  progress: number;
  status: 'Active' | 'Inactive';
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

export function registerAccount(name: string, email: string): StudentAccount {
  const accounts = getAccounts();
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Don't duplicate
  const existing = accounts.find(a => a.email === email);
  if (existing) {
    return recordLogin(email);
  }

  const newAccount: StudentAccount = {
    id: `std_${Date.now()}`,
    name,
    email,
    createdAt: now,
    lastLogin: now,
    loginCount: 1,
    progress: 0,
    status: 'Active',
  };

  accounts.unshift(newAccount);
  saveAccounts(accounts);
  logActivity('signup', name, email);
  return newAccount;
}

export function recordLogin(email: string): StudentAccount {
  const accounts = getAccounts();
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const idx = accounts.findIndex(a => a.email === email);
  if (idx >= 0) {
    accounts[idx].lastLogin = now;
    accounts[idx].loginCount += 1;
    accounts[idx].status = 'Active';
    saveAccounts(accounts);
    logActivity('login', accounts[idx].name, email);
    return accounts[idx];
  }

  // Unknown user — create a record
  const fallback: StudentAccount = {
    id: `std_${Date.now()}`,
    name: email.split('@')[0],
    email,
    createdAt: now,
    lastLogin: now,
    loginCount: 1,
    progress: 0,
    status: 'Active',
  };
  accounts.unshift(fallback);
  saveAccounts(accounts);
  logActivity('login', fallback.name, email);
  return fallback;
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
