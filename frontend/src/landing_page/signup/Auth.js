import React, { useState, useEffect } from 'react'; // Added useEffect

// Redirecting Summary component
const Summary = () => {
  useEffect(() => {
    // Redirect to the holdings page
    window.location.href = "http://localhost:3001/";
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Redirecting...</h1>
    </div>
  );
};

/**
 * Auth component for signup/login
 */
function Auth({ onAuthSuccess }) {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Mock API call
    setTimeout(() => {
      if (!formData.email.includes('@')) {
        setError("Please enter a valid email address.");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
      if (isSignup && !formData.username) {
        setError("Username is required for signing up.");
        return;
      }

      onAuthSuccess(); // Success callback to parent
    }, 1000);
  };

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
    setFormData({ username: "", email: "", password: "" });
    setError("");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="logo">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ff5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#ff5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#ff5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2>{isSignup ? "Create Account" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          )}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          {error && <p className="error">{error}</p>}
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        {!isSignup && (
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        )}
        <div className="toggle-auth">
          <span>
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <button onClick={toggleAuthMode} className="toggle-button">
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Main App component
 */
export default function App() {
  const [page, setPage] = useState('auth');

  const handleAuthSuccess = () => setPage('summary');

  const renderPage = () => {
    switch (page) {
      case 'summary':
        return <Summary />;
      case 'auth':
      default:
        return <Auth onAuthSuccess={handleAuthSuccess} />;
    }
  };

  return (
    <>
      <style>{`
        .auth-container { display:flex; justify-content:center; align-items:center; height:100vh; background-color:#f8f8f8; font-family:Arial,sans-serif; }
        .auth-box { background:#fff; padding:40px 30px; border-radius:4px; box-shadow:0 2px 10px rgba(0,0,0,0.1); width:350px; text-align:center; }
        .auth-box .logo { margin-bottom:25px; }
        .auth-box h2 { margin-bottom:25px; color:#333; font-size:24px; font-weight:normal; }
        .auth-box input { width:100%; padding:12px 15px; margin:10px 0; border-radius:4px; border:1px solid #e0e0e0; outline:none; font-size:16px; box-sizing:border-box; }
        .auth-box button { width:100%; padding:12px; margin-top:15px; border:none; border-radius:4px; background:#ff5722; color:#fff; font-size:16px; cursor:pointer; transition:0.3s; }
        .auth-box button:hover { background:#e64a19; }
        .auth-box .error { color:#d32f2f; font-size:14px; margin-top:10px; text-align:left; }
        .toggle-auth { margin-top:20px; font-size:14px; color:#666; }
        .toggle-button { background:none; border:none; color:#ff5722; cursor:pointer; font-weight:bold; }
        .toggle-button:hover { text-decoration:underline; }
      `}</style>
      {renderPage()}
    </>
  );
}
