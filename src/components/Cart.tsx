import type { QueueItem } from "../App";
import "../index.css";

interface CartProps {
  Queue: QueueItem[];
  AddUpdate: (item: QueueItem) => void;
  SubUpdate: (item: QueueItem) => void;
  RemoveItem: (id: number) => void;
}

function Cart({
  Queue,
  AddUpdate,
  SubUpdate,
  RemoveItem,
}: CartProps) {

  // Total Price
  const total = Queue.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Empty Cart
  if (Queue.length === 0) {
    return (
      <div className="p-8 flex justify-center bg-[#201d1d] rounded-xl mt-6">

        <div className="bg-zinc-900 text-white w-80 p-6 rounded-xl">

          <h2 className="text-lg font-semibold text-center">
            Your cart is empty 🛒
          </h2>

        </div>
      </div>
    );
  }

  return (
    <div className="p-8 flex justify-center bg-[#201d1d] rounded-xl mt-6">

      <div className="bg-zinc-900 text-white w-80 max-h-96 overflow-y-auto no-scrollbar p-6 rounded-xl">

        <h2 className="text-lg font-semibold mb-4">
          Shopping Cart
        </h2>

        <hr className="border-zinc-700 mb-4" />

        {/* Items */}
        {Queue.map((item) => (
          <div key={item.id}>

            <div className="flex justify-between mb-4">

              <div>
                <h3 className="text-sm font-medium">
                  {item.name}
                </h3>

                <p className="text-blue-400 text-sm">
                  ₹{item.price}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-2 mt-2">

                  <button
                    onClick={() => SubUpdate(item)}
                    className="w-6 h-6 bg-zinc-700 rounded"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => AddUpdate(item)}
                    className="w-6 h-6 bg-zinc-700 rounded"
                  >
                    +
                  </button>

                </div>
              </div>

              {/* Delete */}
              <button
                onClick={() => RemoveItem(item.id)}
                className="text-red-500 text-lg"
              >
                🗑
              </button>

            </div>

            <hr className="border-zinc-700 mb-4" />

          </div>
        ))}

        {/* Total */}
        <div className="flex justify-between font-semibold mb-4">

          <span>Total:</span>
          <span>₹{total}</span>

        </div>

        {/* Checkout */}
        <button className="w-full bg-green-600 py-2 rounded-lg hover:bg-green-700">

          Checkout

        </button>

      </div>
    </div>
  );
}

export default Cart;
