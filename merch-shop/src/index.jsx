/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./index.css";
import { lazy } from "solid-js";
import App from "./App";
import Product from "./pages/Product";
import { CartContextProvider } from "./context/CartContext";

const root = document.getElementById("root");
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <CartContextProvider>
      <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Router>
    </CartContextProvider>
  ),
  root
);
