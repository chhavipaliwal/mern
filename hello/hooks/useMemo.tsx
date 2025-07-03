import { useState, useMemo } from "react";

export default function Memory() {
  const [cart, setCart] = useState([
    { id: 1, name: "Apple", price: 1.2 },
    { id: 2, name: "Banana", price: 0.8 },
    { id: 3, name: "Cherry", price: 2.5 },
  ]);
  const [discount, setDiscount] = useState(0);
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <>
      <div className="bg-gray-100 flex justify center items-center ">
        <h1 className="text-2xl font-bold">UseMemo Example</h1>
        <h2>Shopping Cart</h2>
        {cart.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </div>
        ))}
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button onClick={() => setDiscount(discount + 10)}>
          Apply 10% Discount
        </button>
      </div>
    </>
  );
}
