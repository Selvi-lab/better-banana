"use client";
import { createContext, useContext, useState } from "react";
const Ctx = createContext(null);
export function StoreProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState(1);
  const toggleWish = (id) =>
    setWishlist((w) =>
      w.includes(id) ? w.filter((x) => x !== id) : [...w, id],
    );
  return (
    <Ctx.Provider
      value={{
        wishlist,
        toggleWish,
        cart,
        addToCart: () => setCart((c) => c + 1),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
export const useStore = () => useContext(Ctx);
