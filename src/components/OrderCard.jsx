import React from "react";

const OrderCard = ({ order, onDelete }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="font-bold text-lg">{order.customerName}</h2>
      <p>
        <strong>Date:</strong> {order.date}
      </p>
      <p>
        <strong>Amount:</strong> {order.amount}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
      <button
        onClick={() => onDelete(order.id)}
        className="bg-red-600 text-white py-1 px-3 rounded mt-2 hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default OrderCard;
