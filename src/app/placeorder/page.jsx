"use client";

import GlobalContext from "@/context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import fetchFunction from "@/constants/functions";
import { PLACE_ORDER } from "@/constants/urls";

export default function OrderPlacement() {
  const { orderedProduct } = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(1);
  const [user_name, setUser_Name] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [delivery_address, setDeliveryAddress] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!orderedProduct) router.push("/");
  }, []);

  async function handlePlaceOrder(e) {
    e.preventDefault();
    const numContact = Number(contact);
    const data = {
      user_name: user_name,
      contact: numContact,
      delivery_address,
      order_status: "Pending",
      product_id: orderedProduct.product_id,
      total_price: orderedProduct.price_per_unit * quantity,
      product_name: orderedProduct.product_name,
      quantity: quantity,
    };

    const result = await fetchFunction({
      crudMethod: "POST",
      apiUrl: PLACE_ORDER,
      postData: data,
      setError,
    });
    if(result) router.push("/")
  }

  return (
    <>
      {orderedProduct ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <form
            onSubmit={handlePlaceOrder}
            className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Place Your Order
            </h2>

            <input
              placeholder="Product Name"
              defaultValue={orderedProduct.product_name}
              disabled
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
            />

            <input
              placeholder="Product Quantity to Order"
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}
              type="number"
              min={1}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              placeholder="User Name"
              type="text"
              value={user_name}
              onChange={(e) => setUser_Name(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              placeholder="User Contact"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              placeholder="Delivery Address"
              type="text"
              value={delivery_address}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <div className="text-gray-700 font-medium">
              Product Price Per Unit: ₹ {orderedProduct.price_per_unit}
            </div>

            <div className="text-green-600 font-bold text-lg">
              Total: ₹ {orderedProduct.price_per_unit * quantity}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            >
              Place Order
            </button>

            {error && (
              <div className="text-red-500 text-sm text-center mt-2">{error}</div>
            )}
          </form>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-lg font-semibold text-red-600">Something Went Wrong</div>
        </div>
      )}
    </>
  );
}
