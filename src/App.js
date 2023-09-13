import React, { useState, useEffect } from "react";
import "./App.css";

import ResturentForm from "./components/ResturentForm";
import OrderList from "./components/OrderList";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);

    const updatedLocalStorage = JSON.stringify(updatedOrders);
    localStorage.setItem("orders", updatedLocalStorage);
  };

  return (
    <div className="App">
      <ResturentForm addOrder={addOrder} />
      <OrderList orders={orders} deleteOrder={deleteOrder} />
    </div>
  );
}

export default App;
