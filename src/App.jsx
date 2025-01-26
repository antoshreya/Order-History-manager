import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./components/Welcome";
import AddOrderPage from "./components/AddOrderPage";
import OrderHistoryPage from "./components/OrderHistoryPage";

function App() {
  const LOCAL_STORAGE_KEY = "ordersData"; 

  
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/add-order"
          element={<AddOrderPage setOrders={setOrders} />}
        />
        <Route
          path="/order-history"
          element={<OrderHistoryPage orders={orders} setOrders={setOrders} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
