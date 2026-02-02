import { useState } from "react";
import "./App.css";
import ProductCart from "./components/ProductCart";
import Cart from "./components/Cart";

export interface QueueItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

function App() {
  const [Queue, setQueue] = useState<QueueItem[]>([]);

  // Add item / Increase qty if exists
  function AddItem(item: QueueItem) {
    setQueue((prev) => {
      const exist = prev.find((q) => q.id === item.id);

      if (exist) {
        return prev.map((q) =>
          q.id === item.id
            ? { ...q, qty: q.qty + 1 }
            : q
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  }

  // Increase qty
  function AddQty(item: QueueItem) {
    setQueue((prev) =>
      prev.map((q) =>
        q.id === item.id
          ? { ...q, qty: q.qty + 1 }
          : q
      )
    );
  }

  // Decrease qty (min = 1)
  function SubQty(item: QueueItem) {
    setQueue((prev) =>
      prev.map((q) =>
        q.id === item.id && q.qty > 1
          ? { ...q, qty: q.qty - 1 }
          : q
      )
    );
  }

  // Remove item
  function RemoveItem(id: number) {
    setQueue((prev) => prev.filter((q) => q.id !== id));
  }

  return (
    <div className="bg-blue-500 p-8 rounded-2xl mt-8 m-4">

      <h1 className="text-4xl text-white mb-6 font-bold">
        Shopping Cart
      </h1>

      <ProductCart onAdd={AddItem} />

      <Cart
        Queue={Queue}
        AddUpdate={AddQty}
        SubUpdate={SubQty}
        RemoveItem={RemoveItem}
      />

    </div>
  );
}

export default App;
