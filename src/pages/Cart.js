import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity, getSubtotal } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: '20px' }}>
              <h3>{item.name}</h3>
              <p>Precio: ${item.basePrice}</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span style={{ margin: '0 10px' }}>Cantidad: {item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <p>Subtotal: ${item.basePrice * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: 'green', color: 'white' }}>
                Eliminar
              </button>
            </div>
          ))}
          <hr />
          <h3>Total a Pagar: ${getSubtotal()}</h3>
          <button style={payButtonStyle}>Pagar</button>
        </div>
      )}
    </div>
  );
}

// Estilo del botón de pagar
const payButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#008000',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  borderRadius: '5px',
};

export default Cart;
