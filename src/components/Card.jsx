import { DELETE_PRODUCT, FALLBACK_IMG_URL } from "@/constants/urls";
import GlobalContext from "@/context/GlobalContext";
import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import fetchFunction from "@/constants/functions";

export default function Card({ product, setCount }) {
  const { isAdmin, setOrderedProduct } = useContext(GlobalContext);
  const [imgErr, setImgErr] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleOrder = (product) => {
    setOrderedProduct(product);
    router.push('/placeorder');
  };

  const handleDeleteProduct = async (product) => {
    const result = await fetchFunction({
      crudMethod: "DELETE",
      apiUrl: DELETE_PRODUCT + product.product_id,
      setError
    });
    if (result) setCount((curr) => curr + 1);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">

      <div className="w-32 h-32 relative mb-4">
        <Image
          alt="Product Image"
          onError={() => setImgErr(true)}
          src={imgErr ? FALLBACK_IMG_URL : product.img_url}
          fill
          className="object-cover rounded-full border-2 border-green-400"
        />
      </div>

      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.product_name}</h2>
        <p className="text-green-600 font-bold mt-1">₹ {product.price_per_unit}</p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {!isAdmin && (
          <button
            onClick={() => handleOrder(product)}
            className="w-full py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            Order Now
          </button>
        )}
        {isAdmin && (
          <>
            <button
              className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              Update Product
            </button>
            <button
              onClick={() => handleDeleteProduct(product)}
              className="w-full py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              Delete Product
            </button>
          </>
        )}
      </div>
    </div>
  );
}
