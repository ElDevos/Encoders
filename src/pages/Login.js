import { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Importamos el contexto de autenticación
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Obtenemos la función de login
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(); // Iniciamos sesión
    navigate('/'); // Redirigimos a la página principal
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: '0 auto',
  gap: '10px',
};

export default Login;
