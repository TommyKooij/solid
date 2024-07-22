import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [items, setItems] = createStore([
    { title: "Test", quantity: 2, id: 100, price: 15 },
    { title: "Test 2", quantity: 3, id: 101, price: 10 },
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
