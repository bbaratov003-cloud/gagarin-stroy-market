import { useState } from 'react';
import './AdminAuth.css';

function AdminAuth({ onLogin }) {
  const [username, setUsername] = useState(''); // Login uchun yangi state
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Siz xohlagan yangi login va parol tekshiruvi
    if (username === 'gagarin_admin' && password === 'gagarin_stroy01') {
      onLogin();
      setError('');
    } else {
      setError('❌ Noto\'g\'ri login yoki parol!');
    }
  };

  return (
    <div className="admin-auth">
      <div className="auth-card">
        <div className="auth-logo">
          <span>🏗️</span>
          <h2>GAGARIN STROY MARKET</h2>
          <p>Admin Panel</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* 1. Login kiritish katagi */}
          <div className="auth-input">
            <label>👤 Login</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Loginni kiriting"
              autoFocus
              required
            />
          </div>

          {/* 2. Parol kiritish katagi */}
          <div className="auth-input">
            <label>🔐 Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parolni kiriting"
              required
            />
          </div>

          {error && <div className="auth-error">{error}</div>}
          
          <button type="submit" className="auth-btn">
            🚪 Kirish
          </button>
        </form>
        
        {/* Yangilangan eslatma qismi */}
        <div className="auth-hint">
          <p>Login: <strong>gagarin_admin</strong></p>
          <p>Parol: <strong>gagarin_stroy01</strong></p>
        </div>
      </div>
    </div>
  );
}

export default AdminAuth;
