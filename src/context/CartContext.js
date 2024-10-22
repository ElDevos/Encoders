import { createContext, useContext, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar producto al carrito o incrementar su cantidad
  const addToCart = (service) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === service.id);

      if (existingItem) {
        // Si ya existe, incrementa la cantidad
        return prevItems.map((item) =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Si es un nuevo producto, agregarlo con cantidad 1
        return [...prevItems, { ...service, quantity: 1 }];
      }
    });
  };

  // Eliminar un producto del carrito completamente
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Reducir la cantidad del producto o eliminarlo si llega a 0
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calcular subtotal y total
  const getSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.basePrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, decreaseQuantity, getSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
