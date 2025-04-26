"use client"

import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div
            onClick={() => router.push('/admin/inventory')}
            className="cursor-pointer bg-white shadow-md hover:shadow-xl rounded-2xl p-8 text-center text-2xl font-semibold text-gray-800 transition-all duration-300"
          >
            📦 Check Inventory
          </div>

          <div
            onClick={() => router.push('/admin/adminorders')}
            className="cursor-pointer bg-white shadow-md hover:shadow-xl rounded-2xl p-8 text-center text-2xl font-semibold text-gray-800 transition-all duration-300"
          >
            📑 Check Orders
          </div>

        </div>
      </div>
    </>
  );
}
