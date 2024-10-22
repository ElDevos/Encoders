import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, getSubtotal } = useCart(); // Usamos el contexto del carrito
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    alert('¡Pedido confirmado! Gracias por tu compra.');
    navigate('/'); // Redirigimos al usuario a la página principal después del checkout
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Resumen del Pedido</h2>
      {cartItems.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: '15px' }}>
              <h3>{item.name}</h3>
              <p>Precio unitario: ${item.basePrice}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.basePrice * item.quantity}</p>
            </div>
          ))}
          <hr />
          <h3>Total: ${getSubtotal()}</h3>
          <button onClick={handleConfirmOrder} style={confirmButtonStyle}>
            Confirmar Pedido
          </button>
        </div>
      )}
    </div>
  );
}

// Estilo del botón de confirmación
const confirmButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#008000',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  borderRadius: '5px',
};

export default Checkout;
