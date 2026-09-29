import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    {
      id: "ruby-romance-deep-wine",
      productId: "ruby-romance",
      name: "Ruby Romance",
      shade: "Deep Wine",
      colorHex: "#722F37",
      price: 28.00,
      quantity: 1,
      engraving: "GLIIMMER",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0vG90LAcA9dFYfWOGR_dffcRPZeBJ9dsfzOOF6_KgcRA8X9JTp-vaClDJAgH_pUdEy5awGzQ4_xJgkJ46Yl1k_HSe36F65EDvsN2QGgDqcH4tavgD4-neIg82Ncn-kRQQuIyZvzTj3IuO1uedmJwUSn80OmP_RETlvUvChey9qCfmDhrp8WOksUvDoblwY8T0-A7xaLgWtmHC5uotoNIebLp4Pvo6af02tbvSRYlO7h7FnGkbGlY"
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, options = {}) => {
    const shadeName = options.shade || product.shades?.[0]?.name || "Default";
    const shadeHex = options.shadeHex || product.colorHex || "#8A1538";
    const engraving = options.engraving || "";
    const cartItemId = `${product.id}-${shadeName}-${engraving || 'standard'}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += options.quantity || 1;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: cartItemId,
            productId: product.id,
            name: product.name,
            shade: shadeName,
            colorHex: shadeHex,
            price: product.price,
            quantity: options.quantity || 1,
            engraving: engraving,
            image: product.cardImage || product.image
          }
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalCount,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
