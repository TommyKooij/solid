import { useParams } from "@solidjs/router";
import { createResource, Show } from "solid-js";

const fetchProduct = async (id) => {
  const res = await fetch("http://localhost:4000/products/" + id);
  return res.json();
};

const Product = () => {
  const params = useParams();
  const [product] = createResource(params.id, fetchProduct);

  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-5 gap-7">
          <div class="col-span-2">
            <img src={product().img} alt="Product Image" />
          </div>
          <div class="col-span-3">
            <h2 class="text-3xl font-bold mb-7">{product().title}</h2>
            <p>{product().description}</p>
            <p class="my-7 text-2xl">Only €{product().price}</p>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Product;
