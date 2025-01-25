// 
import React from "react";
import "./OrderCard.css";

const OrderCard = ({ order }) => (
  <div className="order-card">
    <h3>Order #{order.id}</h3>
    <p><strong>Customer:</strong> {order.customerName}</p>
    <p><strong>Date:</strong> {order.date}</p>
    <p><strong>Amount:</strong> {order.amount}</p>
    <p><strong>Status:</strong> {order.status}</p>
  </div>
);

export default OrderCard;
