import type { QueueItem } from "../App";
import "../index.css";
interface CartProps {
  Queue: QueueItem[];
  AddUpdate?: (id : {id : QueueItem}) => void;
  SubUpdate?: (id : {id : QueueItem}) => void;
  Quantity?: number;
}

function Cart({ Queue }: CartProps) {
  if (Queue.length == 0) {
    return (
      <div className="p-8 flex w-120 items-center rounded-2xl justify-center bg-[#201d1d]">
        <div className="bg-zinc-900 text-white w-80 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Your cart is empty </h2>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="p-8 flex w-120 items-center rounded-2xl justify-center bg-[#201d1d]">
        <div className="bg-zinc-900 text-white w-80 max-h-90 no-scrollbar overflow-y-scroll  p-6 rounded-xl shadow-lg">
          {/* Title */}

          <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>

          <hr className="border-zinc-700 mb-4" />
          {/* Product */}

          {Queue.map((item) => (
            
            <>
            {/* console.log(item.qty, item.id, item.name, item.price); */}
              <div className="flex justify-between items-start  mb-4">
                <div>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-blue-400 text-sm font-semibold">
                    {item.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-2 mt-2">
                    <button className="w-6 h-6 rounded bg-zinc-700">-</button>
                    <span>{item.qty}</span>
                    <button className="w-6 h-6 rounded bg-zinc-700">+</button>
                  </div>
                </div>

                {/* Delete */}
                <button className="text-red-500 text-lg">🗑</button>
              </div>

              <hr className="border-zinc-700 mb-4" />

              {/* Total */}
              <div className="flex justify-between items-center mb-4 font-semibold">
                <span>Total:</span>
                <span>{item.name}</span>
              </div>
            </>
          ))}
          {/* Checkout */}
          <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-medium">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
