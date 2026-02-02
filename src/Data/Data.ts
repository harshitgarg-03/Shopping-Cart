
interface dataprops  {
    id: number,
    itemName: string,
    itemPrice: number
    qty : number
}

export const data : dataprops[] = [
  { id: 1, itemName: "EarBuds", itemPrice: 399, qty : 1 },
  { id: 2, itemName: "Watch", itemPrice: 799 , qty : 1},
  { id: 3, itemName: "Bracelette", itemPrice: 1099 , qty : 1},
  { id: 4, itemName: "Mobile", itemPrice: 10099 , qty : 1 },
];
