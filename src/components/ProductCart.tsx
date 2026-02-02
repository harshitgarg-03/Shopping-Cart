import { data } from "../Data/Data";
import { FaCartPlus } from "react-icons/fa";
import type { QueueItem } from "../App";
interface ShowCardProps {
  name: string;
  price: number;
  onAdd: (item: QueueItem) => void;
  id: number
}

function ShowCard({id, name, price, onAdd}: ShowCardProps) {
  return (
    <div className="py-4 rounded-xl text-center px-6 bg-gray-700">
      <div className="text-white font-semibold text-xl mb-2">{name}</div>

      <div className="text-blue-500 font-semibold mb-2">${price}</div>

      <button
        className="text-gray-500 px-4 cursor-pointer hover:bg-sky-200 mb-2 flex py-2 gap-3 ml-18 mt-4 justify-center items-center rounded-xl bg-white"
        onClick={() => {
          onAdd({
            id: id,
            name,
            price,
          });
        }}
      >
        <FaCartPlus />
        <div>Add to Cart</div>
      </button>
    </div>
  );
}

interface ProductCartProps {
  onAdd: (item: QueueItem) => void;
}

function ProductCart({ onAdd }: ProductCartProps) {
  return (
    <div className="grid gap-6 p-4 md:grid-cols-4 grid-cols-2">
      {data.map((item, idx) => (
        <ShowCard
          key={idx}
          id={idx+1}
          name={item.itemName}
          price={item.itemPrice}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default ProductCart;
