import { useState } from 'react';

function LoginForm() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const fakeLoginApi = async ({ email, password }) => {
    // Simulating an API response delay with a promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password123') {
          resolve({ status: 'success', message: 'Login successful' });
        } else {
          reject({ status: 'error', message: 'Invalid credentials' });
        }
      }, 1000); // 1 second delay
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fakeLoginApi(credentials);
      alert(response.message); // Success message
    } catch (err) {
      setError(err.message); // Error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Correo"
        onChange={handleChange}
        value={credentials.email}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleChange}
        value={credentials.password}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Ingresando...' : 'Ingresar'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default LoginForm;