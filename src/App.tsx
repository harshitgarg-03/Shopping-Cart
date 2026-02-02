import { useState } from "react";
import "./App.css";
import ProductCart from "./components/ProductCart";
import Cart from "./components/Cart";

export interface QueueItem {
  id?: number;
  name?: string;
  price?: number;
}

function App() {
  const [Queue, setQueue] = useState<QueueItem[]>([]);
  function AddItem(item: QueueItem) {
    setQueue((prev) => {
      const existItem = prev.find((q) => q.id == item.id);
      if (existItem) return prev;
      return [...prev, { ...item }];
    });
  }

  console.log(Queue);

  return (
    <div className={` bg-blue-500 p-8 rounded-2xl mt-8 m-4`}>
      <div className={`mb-2 border-b border-white pb-4`}>
        <h1 className={`text-4xl text-white mb-3 font-bold`}>Basic Props</h1>
      </div>
      <ProductCart onAdd={AddItem} />
      <Cart Queue={Queue} />
    </div>
  );
}

export default App;
