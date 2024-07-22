import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

const App = (props) => {
  const [darkTheme, setDarkTheme] = createSignal(false);
  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  return (
    <>
      <div class="container m-auto">
        <header
          class="my-4 p-2 text-lg flex items-center gap-4"
          classList={{
            "bg-neutral-900": darkTheme(),
            "text-white": darkTheme(),
          }}
        >
          <span
            class="material-symbols-outlined cursor-pointer"
            onClick={toggleTheme}
          >
            light_mode
          </span>
          <h1>Merch Shop</h1>

          <A href="/">Home</A>
          <A href="/cart">Cart</A>
        </header>

        {props.children}
      </div>
    </>
  );
};

export default App;
