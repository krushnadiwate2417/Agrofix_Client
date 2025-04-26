import GlobalContext from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Header() {
  const router = useRouter();
  const { isAdmin, setIsAdmin } = useContext(GlobalContext);

  return (
    <>
      <div className="w-full bg-green-600 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="text-white text-2xl font-bold">
            AGROFIX Assignment
          </div>

          {!isAdmin && (
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setIsAdmin(true);
                  router.push("/admin/dashboard");
                }}
                className="bg-white text-green-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-green-100 transition-all"
              >
                Admin Login
              </button>
              <button
                onClick={() => router.push('/trackorders')}
                className="bg-white text-green-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-green-100 transition-all"
              >
                Your Orders
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
