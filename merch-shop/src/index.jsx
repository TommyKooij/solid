/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./index.css";
import { lazy } from "solid-js";
import App from "./App";

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
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Router>
  ),
  root
);
