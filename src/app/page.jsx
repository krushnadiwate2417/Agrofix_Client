"use client";

import { GET_PRODUCTS } from "@/constants/urls";
import { useContext, useEffect, useState } from "react";
import fetchFunction from "@/constants/functions";
import Loader from "@/components/Loader";
import Card from "@/components/Card";
import GlobalContext from "@/context/GlobalContext";

export default function Home() {
  const [result, setResult] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [productType, setProductType] = useState("Vegetables");
  const {isAdmin} = useContext(GlobalContext);

  useEffect(() => {
    handleFetch();
  }, [count]);

  const handleFetch = async () => {
    const result = await fetchFunction({
      crudMethod: "GET",
      apiUrl: GET_PRODUCTS,
      setError,
    });
    if (result) {
      setResult(result.data);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {!result.length ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8 gap-4">
            <button
              className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${
                productType === "Vegetables"
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600 border border-green-600 hover:bg-green-100"
              }`}
              onClick={() => setProductType("Vegetables")}
            >
              Vegetables
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${
                productType === "Fruits"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-yellow-500 border border-yellow-500 hover:bg-yellow-100"
              }`}
              onClick={() => setProductType("Fruits")}
            >
              Fruits
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {result
              .filter((val) => {
                return productType === "Vegetables"
                  ? val.is_vegetable === true
                  : val.is_fruit === true;
              })
              .map((product) => (
                <Card key={product.product_id} setCount={setCount} product={product} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
