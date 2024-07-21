import { createResource, For, Show } from "solid-js";
import Card from "../components/ui/Card";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
};

const Home = () => {
  const [data] = createResource(fetchProducts);

  return (
    <Show when={data()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-3 gap-6 my-4">
        <For each={data()}>
          {(product) => (
            <Card rounded={true} flat={true}>
              <img src={product.img} alt={product.title} />
              <h2 class="my-3 font-bold">{product.title}</h2>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
};

export default Home;
