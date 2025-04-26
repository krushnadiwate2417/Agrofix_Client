import { useContext, useState } from "react";
import Image from "next/image";
import fetchFunction from "@/constants/functions";
import { CHANGE_ORDER_STATUS, FALLBACK_IMG_URL } from "@/constants/urls";
import GlobalContext from "@/context/GlobalContext";

export default function OrdersCard({ orders, setCount }) {
  const [imgErr, setImgErr] = useState(false);
  const [selectedStatusValue, setSelectedStatusValue] = useState('');
  const {isAdmin} = useContext(GlobalContext);

  const updateOrderStatus = async (e) => {
    const data = {
      order_status: e.target.value,
      order_id: orders.order_id,
    };
    const result = await fetchFunction({
      crudMethod: "PUT",
      apiUrl: CHANGE_ORDER_STATUS,
      postData: data,
    });
    if (result) setCount((curr) => curr + 1);
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 space-y-4 md:space-y-0 md:space-x-6">
      
      <div className="w-24 h-24 relative">
        <Image
          alt="Product Image"
          onError={() => setImgErr(true)}
          src={imgErr ? FALLBACK_IMG_URL : orders.img_url}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col text-gray-800 text-sm w-full">
        <div className="font-bold text-lg">{orders.product_name}</div>
        <div className="text-green-600 font-semibold mt-1">₹ {orders.price_per_unit}</div>

        <div className="mt-4">
          <p><span className="font-semibold">Ordered By:</span> {orders.user_name}</p>
          <p><span className="font-semibold">Contact:</span> {orders.contact}</p>
          <p><span className="font-semibold">Delivery Address:</span> {orders.delivery_address}</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <p><span className="font-semibold">Quantity:</span> {orders.quantity}</p>
          <p><span className="font-semibold">Total Cost:</span> ₹ {orders.total_price}</p>
          <p><span className="font-semibold">Status:</span> {orders.order_status}</p>
        </div>

        {isAdmin && <div className="mt-4">
          <select
            value={selectedStatusValue}
            onChange={(e) => {
              setSelectedStatusValue(e.target.value);
              updateOrderStatus(e);
            }}
            className="w-full p-2 border rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="" disabled>--Select Status--</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>}
      </div>
    </div>
  );
}
