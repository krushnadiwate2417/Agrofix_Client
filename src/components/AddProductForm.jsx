import fetchFunction from "@/constants/functions";
import { ADD_PRODUCTS } from "@/constants/urls";
import { useState } from "react";

export default function AddProductForm({ setFormState }) {
  const [img_url, setImgUrl] = useState('');
  const [product_name, setProductName] = useState('');
  const [price_per_unit, setPricePerUnit] = useState('');
  const [productType, setProductType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      img_url,
      product_name,
      price_per_unit,
      is_fruit: productType === 'Fruit' ? true : false,
      is_vegetable: productType === 'Vegetable' ? true : false,
    };
    const result = await fetchFunction({
      crudMethod: "POST",
      apiUrl: ADD_PRODUCTS,
      postData: data,
      setError
    });
    if (result) setFormState(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-600">Add New Product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            type="text"
            placeholder="Image URL"
            value={img_url}
            onChange={(e) => setImgUrl(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            required
            type="text"
            placeholder="Product Name"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            required
            type="number"
            placeholder="Price Per Unit"
            value={price_per_unit}
            onChange={(e) => setPricePerUnit(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            required
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">--Select--</option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetable">Vegetable</option>
          </select>

          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
