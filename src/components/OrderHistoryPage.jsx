import React from "react";
import OrderCard from "./OrderCard";
import "./FilterSortOrders.css";
const OrderHistoryPage = ({ orders }) => {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold my-6">Order History</h1>
      {orders.length > 0 ? (
        <div className="grid gap-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-gray-700">No orders available. Add some orders!</p>
      )}
    </div>
  );
};

export default OrderHistoryPage;
