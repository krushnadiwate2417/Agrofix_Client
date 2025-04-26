"use client";

import Loader from "@/components/Loader";
import OrdersCard from "@/components/OrderCard";
import fetchFunction from "@/constants/functions";
import { CHECK_ORDERS } from "@/constants/urls";
import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [error, setError] = useState("");
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleOrdersFetch();
  }, [count]);

  const handleOrdersFetch = async () => {
    const result = await fetchFunction({
      crudMethod: "GET",
      apiUrl: CHECK_ORDERS,
      setError,
    });
    setOrders(result.data);
  };

  return (
    <>
      {!orders.length ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            All Orders
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <div key={order.order_id} className="w-full">
                <OrdersCard orders={order} setCount={setCount} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
