export default function AdminForm() {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
        <form className="bg-white p-8 rounded-2xl shadow-2xl w-80 animate-scaleIn space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Admin Sign In</h2>
  
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
  
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }
  