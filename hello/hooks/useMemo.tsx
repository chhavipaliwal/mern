import { useState, useMemo } from "react";

export default function Memory() {
  const [cart] = useState([
    { id: 1, name: "Apple", price: 3000 },
    { id: 2, name: "Banana", price: 8000 },
    { id: 3, name: "Cherry", price: 2500 },
  ]);
  const [discount, setDiscount] = useState(0);
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <>
      <div className="bg-gray-500 flex flex-col justify-center items-center text-black h-screen ">
        <h1 className="text-2xl font-bold">UseMemo Example</h1>
        <h2>Shopping Cart</h2>
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} :${item.price}
          </p>
        ))}
        <h3>Total Price: ${totalPrice}</h3>
        <button
          onClick={() => setDiscount(discount + 10)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          Apply Discount (${discount})
        </button>
      </div>
    </>
  );
}
