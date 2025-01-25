// import React from "react";
// import { useNavigate } from "react-router-dom";

// const WelcomePage = () => {
//   const navigate = useNavigate();

//   const handleStart = () => {
//     navigate("/order-manager");
//   };

//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
//       <h1 className="text-5xl font-bold mb-6">Welcome to Order History Manager</h1>
//       <p className="text-lg mb-8 text-center max-w-xl">
//         Organize and manage your order histories efficiently. Add, filter, and
//         sort your orders dynamically to keep track of everything seamlessly.
//       </p>
//       <button
//         onClick={handleStart}
//         className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 shadow-lg transition-all duration-300"
//       >
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default WelcomePage;

import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleNewOrder = () => {
    navigate("/add-order"); // Redirect to the new order page
  };

  const handleOrderHistory = () => {
    navigate("/order-history"); // Redirect to the order history page
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Order History Manager</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Organize and manage your order histories efficiently. Add, filter, and
        sort your orders dynamically to keep track of everything seamlessly.
      </p>
      <div className="flex space-x-6">
        <button
          onClick={handleNewOrder}
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 shadow-lg transition-all duration-300"
        >
          Add New Order
        </button>
        <button
          onClick={handleOrderHistory}
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 shadow-lg transition-all duration-300"
        >
          View Order History
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
