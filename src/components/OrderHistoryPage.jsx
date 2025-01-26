import React from "react";
import OrderCard from "./OrderCard";

const OrderHistoryPage = ({ orders, setOrders }) => {

  const deleteOrder = (orderId) => {
    console.log("Deleting order with ID:", orderId);
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <div className="grid gap-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} onDelete={deleteOrder} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
