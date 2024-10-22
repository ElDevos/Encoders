import { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    companyName: '',
    representative: '',
    companyID: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('Registro exitoso!');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Registro de Empresa Agrícola</h2>

      <input
        type="text"
        name="companyName"
        placeholder="Nombre de la Empresa"
        value={formData.companyName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="representative"
        placeholder="Representante Legal"
        value={formData.representative}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="companyID"
        placeholder="ID de la Empresa"
        value={formData.companyID}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del Contacto"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Registrarse</button>
    </form>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  margin: '0 auto',
  gap: '15px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default RegisterForm;
