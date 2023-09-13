import React, { useState } from "react";

import "./OrderList.css";

const RestaurantForm = ({ addOrder }) => {
  const [orderId, setOrderId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("table1");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId || !price || !dish || !table) return;

    const order = {
      id: orderId,
      price: parseFloat(price),
      dish,
      table,
    };
    console.log(order);

    addOrder(order);

    setOrderId("");
    setPrice("");
    setDish("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Unique Order Id:</label>
        <input
          type="number"
          name="id"
          placeholder="uniqueid"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <br />
        <label htmlFor="price">Choose Price:</label>
        <input
          type="number"
          name="price"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label htmlFor="dish"> Choose Dish:</label>
        <input
          type="text"
          name="dish"
          placeholder="dish"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
        />
        <br />

        <label htmlFor="table">Choose a table:</label>
        <select
          name="table"
          placeholder="choose a table"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        >
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">table 3</option>
        </select>
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
};

export default RestaurantForm;
