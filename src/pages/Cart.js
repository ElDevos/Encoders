import { useCart } from '../context/CartContext';
import '../styles/Cart.css';
function Cart() {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity, getSubtotal } = useCart();

  return (
    <div className="cart-container">
      <h2>🛒 Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Precio: ${item.basePrice}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>Cantidad: {item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <p className="subtotal">Subtotal: ${item.basePrice * item.quantity}</p>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <hr />
          <div className="cart-summary">
            <h3>Total a Pagar: ${getSubtotal()}</h3>
            <button className="checkout-button">Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
