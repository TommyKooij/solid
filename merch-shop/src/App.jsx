import Card from "./components/ui/Card";

function App() {
  return (
    <>
      <div class="container m-auto">
        <header>
          <h1>Merch Shop</h1>
        </header>

        <div class="grid grid-cols-3 gap-6 my-4">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
