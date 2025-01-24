import React, { useState, useEffect } from "react";
import OrderCard from "./OrderCard";
import "./FilterSortOrders.css";

const LOCAL_STORAGE_KEY = "ordersData"; // Key to store/retrieve data in local storage

const FilterSortOrders = () => {
  const [orders, setOrders] = useState(() => {
    // Load orders from Local Storage on initial render
    const savedOrders = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedOrders ? JSON.parse(savedOrders) : []; // Default to empty array if no data
  });

  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOption, setSortOption] = useState("Date");
  const [newOrder, setNewOrder] = useState({
    id: "",
    customerName: "",
    date: "",
    amount: "",
    status: "Pending",
  });

  // Save orders to Local Storage whenever orders change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  const handleStatusChange = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleAddOrder = (e) => {
    e.preventDefault();
    setOrders([
      ...orders,
      { ...newOrder, id: orders.length + 1 }, // Assign a unique ID
    ]);
    setNewOrder({ id: "", customerName: "", date: "", amount: "", status: "Pending" });
  };

  const filteredOrders = orders.filter(
    (order) => filterStatus === "All" || order.status === filterStatus
  );

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (sortOption === "Date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === "Amount") {
      return b.amount - a.amount;
    }
    return 0;
  });

  return (
    <div className="filter-sort-orders">
      <div className="controls">
        <label>
          Filter by Status:
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </label>

        <label>
          Sort by:
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Date">Date</option>
            <option value="Amount">Amount</option>
          </select>
        </label>
      </div>

      <form className="add-order-form" onSubmit={handleAddOrder}>
        <h4 style={{ color: "white" }}>Add New Order</h4>
        <label>
          Customer Name:
          <input
            type="text"
            value={newOrder.customerName}
            onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={newOrder.date}
            onChange={(e) => setNewOrder({ ...newOrder, date: e.target.value })}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={newOrder.amount}
            onChange={(e) => setNewOrder({ ...newOrder, amount: Number(e.target.value) })}
            required
          />
        </label>
        <button type="submit">Add Order</button>
      </form>

      <div className="orders-list">
        {sortedOrders.map((order) => (
          <div key={order.id}>
            <OrderCard order={order} />
            <label>
              Update Status:
              <select
                value={order.status}
                onChange={(e) =>
                  handleStatusChange(order.id, e.target.value)
                }
              >
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSortOrders;
