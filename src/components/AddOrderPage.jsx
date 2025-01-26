import React, { useState } from "react";
import "./FilterSortOrders.css";

const AddOrderPage = ({ setOrders }) => {
  const [newOrder, setNewOrder] = useState({
    id: "",
    customerName: "",
    date: "",
    amount: "",
    status: "Pending",
  });

  const handleAddOrder = (e) => {
    e.preventDefault();
    setOrders((prevOrders) => [
      ...prevOrders,
      { ...newOrder, id: Date.now() },
    ]);
    setNewOrder({ id: "", customerName: "", date: "", amount: "", status: "Pending" });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Add New Order</h1>
        <form onSubmit={handleAddOrder} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Customer Name</label>
            <input
              type="text"
              value={newOrder.customerName}
              onChange={(e) =>
                setNewOrder({ ...newOrder, customerName: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Date</label>
            <input
              type="date"
              value={newOrder.date}
              onChange={(e) =>
                setNewOrder({ ...newOrder, date: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Amount</label>
            <input
              type="number"
              value={newOrder.amount}
              onChange={(e) =>
                setNewOrder({ ...newOrder, amount: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Status</label>
            <select
              value={newOrder.status}
              onChange={(e) =>
                setNewOrder({ ...newOrder, status: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Add Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOrderPage;
